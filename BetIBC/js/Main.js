$(document).ready(function(){

	// hide Create account from user dropdown menu 
	$("label[for='SignInModalTrigger']").parent("li").next("li").addClass("hidden");

	// don't allow creating an account if the user fills in US , Australia or Moldova as a country
	$("input#UserManagement_Form_Country").on("change" , function(event){
		var RestrictedCountries = ["USA" , "United States of America" , "Australia" , "Moldova"];
		var CountryFieldValue = $(this).val().toLowerCase();
		var DisableSubmit = false;


		RestrictedCountries.map(function(el){
			if(el.toLowerCase() == CountryFieldValue) {
				alert("You are from restricted territory. We can not assist you.")
				DisableSubmit = true;
			}
		});


		if(DisableSubmit) {
			$("input#UserManagement_Form_Country").parents("form").find("button[type='submit']").attr("disabled" , "disabled");
		} else {
			$("input#UserManagement_Form_Country").parents("form").find("button[type='submit']").removeAttr("disabled");
		}

	});
	
  
  var homepageCarousel = $('#slider').length;
  var bookmakerCarousel = $('#bookmakerSlider').length;
  var faq = $('.faq__question').length;
  
  if($("form[data-unique-id='FirstBookmakerAccount']").length > 0) {
  	
    var URL = "http://bet.dotfusion.ro/" + $("form[data-unique-id='FirstBookmakerAccount']").attr("data-edit-user-info");
    var sendObj = {
    	UserManagement_Form_HouseNumber: "True",
      	UserManagementForm: 1 
    }
    
    
    $.ajax({
        url: URL,
        type: 'POST',
      	data: sendObj
    })
    .done(function(response) {
        console.log("res success" , response);
      	$("form[data-unique-id='FirstBookmakerAccount']").submit();   	
    })
    .fail(function(error) {
        console.log("errorzzz" , error);
    });
    
   } 
  
  
  
	$("form[name='AddressForm']").submit(function(event){
		event.preventDefault();
      	$.ajax({
        	url: $(this).attr("action"),
        	type: 'POST',
      		data: $(this).serialize()
    	})
    	.done(function(response) {
          	window.location.href = "/Default.aspx?ID=61";
    	})
        .fail(function(error) {
            console.log("errorzzz" , error);
        });

	});
    
  function updateCurrencies(arg) {
  	var target = $("[data-unique-id='TargetCurrency']");
    var wrapper = "";
    
    arg.map(function(value){
    	wrapper += "<option value='"+value+"'>" + value + "</option>";
    });
    target.empty();
	target.append(wrapper);
 
  }
  
  
  $("body").on("click" , "input[data-currency]" , function(event){
    var currencies = $(this).attr("data-currency");
    
    var outputCurrencies = currencies.split(',');
    
    updateCurrencies(outputCurrencies);
  });
  
  
  
  if(homepageCarousel){
    $('#slider').slick({
        arrows: true,
        prevArrow: "<button class='arrow arrow--prev'></button>",
        nextArrow: "<button class='arrow arrow--next'></button>",
        infinite: true,
        slidesToShow: 1
    });
  }

  if(bookmakerCarousel){
    $('#bookmakerSlider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
  }


  if(faq){
    $('.faq__question').click(function () {
      if ($(this).parent().find('.faq__answer').hasClass('open') === true) {
        $(this).parent().find('.faq__answer').removeClass('open');
        $(this).removeClass('open');
      } else {
        $(this).parent().find('.faq__answer').addClass('open');
        $(this).addClass('open');
      }
    });
  }
  

});


function AJAXGetTabContent(data) {
	var deferred = $.Deferred();
	// console.log("AJAXDATA",data);
	$.ajax({
		url: data.url,
		type: 'GET',
		dataType: 'html'
	})
	.done(function(response) {
		// console.log("success");
		var obj = {};

		obj.content = response;
		obj.target = data.target;
		deferred.resolve(obj);
	})
	.fail(function(error) {
		deferred.reject("Failed loading content from" + url);
		// console.log("error");
	});
	return deferred.promise();
}





function renderData(data){	
  // console.log(data);
	var afterFirstTabData = _.drop(data);
	$.when(AJAXGetTabContent(data[0])).then(function(response){
		console.log(response);
		$(response.target).html(response.content);
		_.map(data, function(o){
			$.when(AJAXGetTabContent(o)).then(function(o){
				$(o.target).html(o.content);
			});
		});


		// working pagination
		// $("body").on("click" , ".pagination a" , function(event){
		// 	event.preventDefault();
		// 	var url = $(this).attr("href");
    //   console.log(event);
		// 	$.ajax({
		// 		url: url,
		// 		type: 'GET'
		// 	})
		// 	.done(function(data) {
		// 		$("#ProductCitations").empty();
		// 		$("#ProductCitations").html(data);
		// 	})
		// 	.fail(function() {
		// 		console.log("error");
		// 	});
			
		// });
	});

	
}
function activateHashTab(){
  var hash = window.location.hash;
  console.log(hash);
	if (hash != "") {
    console.log($(hash + "-tab"));
		$(".ajaxTabs .nav-item").removeClass("active");
		$(hash + "-tab").parent(".nav-item").addClass("active");
		$(".ajaxTabsContent .tab-pane").removeClass("active in");
		$(hash).addClass("active in");
	}
}
function removeHash() { 
    history.pushState("", document.title, window.location.pathname
                                                       + window.location.search);
}
$(function(){
	if($(".ajaxTabs").length > 0) {

		activateHashTab();

    $('.ajaxTabs').each(function(){
      var scope = $(this);
      var urlArray = [];
      var objActiveTab = {};
      objActiveTab.url = scope.find(".nav-item.active .nav-link").attr("data-href");
      objActiveTab.target = scope.find(".nav-item.active .nav-link").attr("href")
      urlArray.push(objActiveTab);
      scope.find(".nav-item").not(".active").each(function(){
        var obj = {};
        obj.url = $(this).find(".nav-link").attr("data-href");
        obj.target = $(this).find(".nav-link").attr("href")
        urlArray.push(obj);
      });

      if (_.size(urlArray) == 0) {
        console.log("Error: No data to load !");
      } else {
        renderData(urlArray);	
      }

      scope.find(".nav-link").on("click", function(){
        removeHash();
      });



    });

	}
  
  
  	$('[data-toggle="tooltip"]').tooltip();
  
});