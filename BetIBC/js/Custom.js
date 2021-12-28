var latestTipsPage = $("#latest-tips").length;
var IsTipsterPage = $("#tipster-filter-page").length;
var IsTipsterSinglePage = $(".tipster-single-page").length;
var tipsterFormPage = $(".tipsters-form").length;

//formular open-account
$(document).ready(function () {
    // Links
   if ($("a").length){
      $( "a" ).each(function( index ) {
         $( this ).attr("title", $( this ).text())
   
      });
   }
  if($("img").length){
       $( "img" ).each(function( index ) {
         var height = $( this ).height() + "px"; 
          var width = $( this ).width() + "px"; 
         $( this ).attr("height", height)
           $( this ).attr("width", width)
   
      });
     }
  
    // Navigation languages
    
    if ($(".language-tools").length) {
        function getLanguageLinks(api) {
            var deferred = $.Deferred();

            var tipstersApi = $(".language-tools").attr("data-navigation-feed");

            $.ajax({
                url: tipstersApi,
                type: 'GET',
                dataType: 'json'
            }).done(function (data) {
                //console.log("success");
                deferred.resolve(data);
            }).fail(function () {
                console.log("Error accessing User Details Endpoint...");
                deferred.reject("Error accessing User Details Endpoint...");
            });

            return deferred.promise();
        }

        $.when(getLanguageLinks()).then(function (links) {

           for(var i = 0; i <= links.length; i++){
             
             var areaCulture = links[i].areaCulture;
             var link = links[i].pageUrl
              
             $("."+ areaCulture +"").attr("href", link);
            
           }
         
          


        });
    }
    //Slider Tipsters
 
    $('.tipsters-slider-wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev test" name = "previous-slider"><i class="fa fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next " name = "next-slider"><i class="fa fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    //Slider Testimonials

    $('.testimonials-slider-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '300px',
        infinite: true,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
   //Slider Bookmaker

    $('.bookmaker-five-columns-carousel #bookmaker-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev " name="previous-slider"><i class="fa fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next " name="next-slider"><i class="fa fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.bookmaker-four-columns-carousel #bookmaker-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev "><i class="fa fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next "><i class="fa fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    //Get Predictions Count
    if ($("#approve-new-tip-form").length) {
        function getPredictionsCount(api) {
            var deferred = $.Deferred();

            var tipstersApi = $("body").attr("data-predictions-count");

            $.ajax({
                url: tipstersApi,
                type: 'GET',
                dataType: 'json'
            }).done(function (data) {
                //console.log("success");
                deferred.resolve(data);
            }).fail(function () {
                console.log("Error accessing User Details Endpoint...");
                deferred.reject("Error accessing User Details Endpoint...");
            });

            return deferred.promise();
        }

        $.when(getPredictionsCount()).then(function (predictionCount) {


            $("#Prediction").attr("value", predictionCount[0].predictionCount);


        });
    }
    //Tipsters Json data and math

    if(IsTipsterPage >= 1 || latestTipsPage >= 1 || IsTipsterSinglePage >= 1 || tipsterFormPage >= 1){


        function getTipsters(api) {
            var deferred = $.Deferred();

            var tipstersApi = $("body").attr("data-tipsters-feed");

            $.ajax({
                url: tipstersApi,
                type: 'GET',
                dataType: 'json'
            }).done(function (data) {
                //console.log("success");
                deferred.resolve(data);
            }).fail(function () {
                console.log("Error accessing User Details Endpoint...");
                deferred.reject("Error accessing User Details Endpoint...");
            });

            return deferred.promise();
        }

        /*
        function getTipstersDetails(api) {
            var deferred = $.Deferred();

            var tipstersApi = $("body").attr("data-tipsters-feed");

            $.ajax({
                url: tipstersApi,
                type: 'GET',
                dataType: 'json'
            }).done(function(data) {
                //console.log("success");
                deferred.resolve(data);
            }).fail(function() {
                console.log("Error accessing User Details Endpoint...");
                deferred.reject("Error accessing User Details Endpoint...");
            });

            return deferred.promise();
        }
    */

        if ($(".tipster-single-page").length >= 0 || tipsterFormPage >= 1) {


            $.when(getTipsters()).then(function (tipsterDetails) {

                var tipsterName = $("#tipster-name").attr("data-tipster-name");
                var predictionID = $(".prediction-single").attr("data-prediction-ID");
                var resultsData = [];
                var resultsDataWeek = [];
                var ROI_array = [];
                var resultsDataMonth = [];
                var currentTipsters = tipsterDetails.filter(function (object) {
                    return object.tipster == tipsterName;

                });

                // individual Prediction sort for Prediction form
                var tipsterNameTitle = $('#Tipster').val();

                var currentTipstersPrediction = tipsterDetails.filter(function (object) {
                    var tipsterWithoutSpace = object.tipster.replace(" ", "");
                    return tipsterWithoutSpace == tipsterName;

                });

                if ($(".tipster-general-informations").length) {


                    var tipsterNameTitleTipsterPage = $('#tipster-name').attr("data-tipster-name").replace(" ", "");
                    var currentTipstersPredictionTipsterPage = tipsterDetails.filter(function (object) {
                        var tipsterWithoutSpace = object.tipster.replace(" ", "");
                        return tipsterWithoutSpace == tipsterNameTitleTipsterPage;

                    });


                    var predictionsStausCounter = 0;
                   
                    for (var object in currentTipstersPredictionTipsterPage.reverse()) {
                        console.log("currentTipstersPredictionTipsterPage[object].won", currentTipstersPredictionTipsterPage[object].won);
                        if (predictionsStausCounter <= 10) {
                            if (currentTipstersPredictionTipsterPage[object].won != "") {
                                predictionsStausCounter ++;
                                if (currentTipstersPredictionTipsterPage[object].won == "won") {

                                    $("#predictions-value").prepend("<span class = 'win-value'>W</span>");
                                }
                                if (currentTipstersPredictionTipsterPage[object].won == "draw") {
                                    $("#predictions-value").prepend("<span class = 'draw-value'>D</span>");
                                }
                                if (currentTipstersPredictionTipsterPage[object].won == "half-won") {
                                    $("#predictions-value").prepend("<span class = 'win-value'>HW</span>");
                                }
                                if (currentTipstersPredictionTipsterPage[object].won == "half-lost") {
                                    $("#predictions-value").prepend("<span class = 'lost-value'>HL</span>");
                                }
                                if (currentTipstersPredictionTipsterPage[object].won == "lost") {
                                    $("#predictions-value").prepend("<span class = 'lost-value'>L</span>");


                                }
                            }
                        }
                    }
                  console.log("predictionsStausCounter", predictionsStausCounter);
                    //Tipster page Latest Tips
                    console.log(currentTipstersPredictionTipsterPage.reverse());


                }
                var tipsterPicksNumber = currentTipstersPrediction.length + 1;

                function getTipstersDetails(api) {
                    var deferred = $.Deferred();

                    var tipstersApi = $("body").attr("data-tipsters-details");

                    $.ajax({
                        url: tipstersApi,
                        type: 'GET',
                        dataType: 'json'
                    }).done(function (data) {
                        //console.log("success");
                        deferred.resolve(data);
                    }).fail(function () {
                        console.log("Error accessing User Details Endpoint...");
                        deferred.reject("Error accessing User Details Endpoint...");
                    });

                    return deferred.promise();
                }

                $.when(getTipstersDetails()).then(function (tipsterDetailsIndividual) {

                    var tipsterNameIndividual = $(".tipsters-form").attr("data-tipster-name");
                    var resultsData = [];
                    var resultsDataWeek = [];
                    var ROI_array = [];
                    var tipsterNameIndividualSort = $(".tipster-link-value").attr("data-tipster-name");

                    var currentTipstersIndividualSort = tipsterDetailsIndividual.filter(function (object) {
                        return object.tipsterName == tipsterNameIndividualSort;

                    });

                    try {
                        var selectTipsterRow = $("#TipsteSelector").val().replace(/\+/g, ' ');
                    } catch (err) {
                        var selectTipsterRow = $("#TipsteSelector").val()
                    }

                    for (var element in tipsterDetailsIndividual) {
                        if (tipsterDetailsIndividual[element].tipsterName == selectTipsterRow) {
                            if (tipsterDetailsIndividual[element].tipsterActive == "") {

                                $("#tipsterStatusPredictions").prepend("Inactive");
                                $("#tipsterStatusPredictions").css("color", "#e30f0c");
                            } else {

                                $("#tipsterStatusPredictions").prepend("Active");
                                $("#tipsterStatusPredictions").css("color", "#91cc65");
                            }
                        }

                    }

                    if ($(".tipsters-form").length) {
                        if ($(".nationality-flag-single").hasClass("flag-api")) {
                            var flagIcon = "flag-icon-" + currentTipstersIndividualSort[0].nationality + ""
                            $(".flag-api").addClass(flagIcon);

                        }

                        var tipsterPicksNumber = 0;

                        var currentTipstersIndividual = tipsterDetailsIndividual.filter(function (object) {
                            return object.tipsterName.toLowerCase() == tipsterNameIndividual.toLowerCase();

                        });
     
                 
                             
                        if (currentTipstersIndividual[0].followOnVIP.length) {
                            if (currentTipstersIndividual[0].followOnVIP == "True") {
                                $("#tipsters-prediction-form").append("<input type='checkbox' style='display: none;' checked='checked' class='checkbox hidden' id='FollowOn_VIP' name='FollowOn_VIP' /><label for='FollowOn_VIP' ></label>");


                            }
                        }


                    }
                    if ($("#approve-new-tip-form").length) {
                        var stakeForEuro = $("#Stake").val();
                        var currentTipstersIndividual = tipsterDetailsIndividual.filter(function (object) {
                            return object.tipsterName == tipsterNameIndividual;

                        });
                        var stakeInEuro = currentTipstersIndividual[0].tipsterStakeInEuro * stakeForEuro;
                        console.log(stakeInEuro, stakeForEuro);
                    }

                    if (tipsterNameIndividual != "") {
                        $('#Tipster_ID option').filter(function () {
                            return ($(this).text() == tipsterNameIndividual);
                        }).prop('selected', true);
                        $('#league-checkbox').click(function () {
                            $("#tournament_prediction_form").removeAttr("required");
                            $("#tournament_prediction_form").attr('value', "N/A");
                            $("#league_prediction_form").attr('value', "");
                            if ($('#league-checkbox').is(':checked')) {
                                $("#league_prediction_form").removeClass("hidden-input");
                                $("#tournament_prediction_form").addClass("hidden-input");

                            }
                        });
                        $('#turnament-checkbox').click(function () {
                            $("#league_prediction_form").removeAttr("required");
                            $("#league_prediction_form").attr('value', "N/A");
                            $("#tournament_prediction_form").attr('value', "");
                            if ($('#turnament-checkbox').is(':checked')) {
                                $("#tournament_prediction_form").removeClass("hidden-input");
                                $("#league_prediction_form").addClass("hidden-input");

                            }
                        });
                        $(".tipsters-form").addClass("active");

                        for (var item in tipsterDetailsIndividual) {

                            if (tipsterDetailsIndividual[item].tipsterName == tipsterNameIndividual) {

                                for (var j = 0; j <= currentTipstersPrediction.length; j++) {

                                    if (typeof currentTipstersPrediction[j] != 'undefined') {


                                        var now = moment().format('MMMM Do YYYY, h:mm:ss a');
                                        var dateStringPrediction = currentTipstersPrediction[j].predictionDate;
                                        var dateArgsPrediction = dateStringPrediction.match(/\d{2,4}/g);
                                        var yearPrediction = dateArgsPrediction[2];
                                        var monthPrediction = parseInt(dateArgsPrediction[1]) - 1;
                                        var dayPrediction = dateArgsPrediction[0];
                                        var tipdatemillisecondsPrediction = new Date(yearPrediction, monthPrediction, dayPrediction).getTime();
                                        var input = moment(tipdatemillisecondsPrediction);


                                    }
                                }
                            }

                        }

                    }
                    if ($('.overlay-tipsters-form').length) {
                        $(".overlay-tipsters-form").removeClass("active")
                    }
                });
                var tipsterPicksRaw = currentTipsters.length;
                var tipsterPicks = tipsterPicksRaw.toString();
                var counterLimit = 0;

                currentTipsters.map(function (obj) {
                    var today = new Date();
                    var monthpriorDate = new Date().setDate(today.getDate() - 30);
                    var weekpriorDate = new Date().setDate(today.getDate() - 7);
                    var dateString = obj.predictionDate,
                        dateArgs = dateString.match(/\d{2,4}/g),
                        year = dateArgs[2],
                        month = parseInt(dateArgs[1]) - 1,
                        day = dateArgs[0];
                    var tipdatemilliseconds = new Date(year, month, day).getTime();


                    if (obj.won == "won") {

                        var odd = obj.odd;
                        var stake = obj.stakeClean;
                        var out = odd * stake;

                        var ROI_in_stake = out - stake;
                        var ROI_in_percent = (ROI_in_stake / stake) * 100;
                        var stakeClean = stake;
                        var o = {};

                        o.ROI_in_stake = ROI_in_stake;
                        o.ROI_in_percent = ROI_in_percent;
                        o.stake = parseFloat(stake);
                        o.won = "won";

                        resultsData.push(o);

                    }
                    if (obj.won == "draw") {
                        var odd = obj.odd;
                        var stake = obj.stakeClean;
                        var out = odd * stake;


                        var ROI_in_stake = 0;
                        var ROI_in_percent = 0;

                        var o = {};

                        o.ROI_in_stake = ROI_in_stake;
                        o.ROI_in_percent = ROI_in_percent;
                        o.stake = parseFloat(stake);
                        o.won = "drow";

                        resultsData.push(o);


                    }
                    if (obj.won == "lost") {
                        var odd = obj.odd;
                        var stake = obj.stakeClean;
                        var out = odd * stake;


                        var ROI_in_stake = -stake;
                        var ROI_in_percent = -100;

                        var o = {};

                        o.ROI_in_stake = ROI_in_stake;
                        o.ROI_in_percent = ROI_in_percent;
                        o.stake = parseFloat(stake);
                        o.won = "lost";

                        resultsData.push(o);


                    }
                    if (obj.won == "half-lost") {
                        var odd = obj.odd;
                        var stake = obj.stakeClean - (obj.stakeClean / 2);
                        var out = odd * stake;


                        var ROI_in_stake = -stake / 2;
                        var ROI_in_percent = -100;

                        var o = {};

                        o.ROI_in_stake = ROI_in_stake;
                        o.ROI_in_percent = ROI_in_percent;
                        o.stake = parseFloat(stake);
                        o.won = "half-lost";

                        resultsData.push(o);

                    }
                    if (obj.won == "half-won") {
                        var odd = obj.odd;
                        var stake = obj.stakeClean;
                        var out = odd * stake;

                        var ROI_in_stake = (out - stake) / 2;
                        var ROI_in_percent = (ROI_in_stake / stake) * 100;
                        var stakeClean = stake;
                        var o = {};

                        o.ROI_in_stake = ROI_in_stake;
                        o.ROI_in_percent = ROI_in_percent;
                        o.stake = parseFloat(stake);
                        o.won = "half-won";

                        resultsData.push(o);

                    }
                    if (weekpriorDate < tipdatemilliseconds) {
                        if (obj.won == "won") {

                            var odd = obj.odd;
                            var stake = obj.stakeClean;
                            var out = odd * stake;

                            var ROI_in_stake = out - stake;
                            var ROI_in_percent = (ROI_in_stake / stake) * 100;

                            var o = {};

                            o.ROI_in_stake = ROI_in_stake;
                            o.ROI_in_percent = ROI_in_percent;
                            o.stake = parseFloat(stake);
                            o.won = "won";

                            resultsDataWeek.push(o);

                        }
                        if (obj.won == "draw") {

                            var odd = obj.odd;
                            var stake = obj.stakeClean;
                            var out = odd * stake;

                            var ROI_in_stake = out - stake;
                            var ROI_in_percent = (ROI_in_stake / stake) * 100;

                            var o = {};

                            o.ROI_in_stake = ROI_in_stake;
                            o.ROI_in_percent = ROI_in_percent;
                            o.stake = parseFloat(stake);
                            o.won = "drow";

                            resultsDataWeek.push(o);

                        }
                        if (obj.won == "lost") {
                            var odd = obj.odd;
                            var stake = obj.stakeClean;
                            var out = odd * stake;


                            var ROI_in_stake = -stake;
                            var ROI_in_percent = -100;

                            var o = {};

                            o.ROI_in_stake = ROI_in_stake;
                            o.ROI_in_percent = ROI_in_percent;
                            o.stake = parseFloat(stake);
                            o.won = "lost";

                            resultsDataWeek.push(o);

                        }
                        if (obj.won == "half-lost") {
                            var odd = obj.odd;
                            var stake = obj.stakeClean - (obj.stakeClean / 2);
                            var out = odd * stake;


                            var ROI_in_stake = -stake / 2;
                            var ROI_in_percent = -100;

                            var o = {};

                            o.ROI_in_stake = ROI_in_stake;
                            o.ROI_in_percent = ROI_in_percent;
                            o.stake = parseFloat(stake);
                            o.won = "half-lost";

                            resultsData.push(o);

                        }
                        if (obj.won == "half-won") {
                            var odd = obj.odd;
                            var stake = obj.stakeClean;
                            var out = odd * stake;

                            var ROI_in_stake = (out - stake) / 2;
                            var ROI_in_percent = (ROI_in_stake / stake) * 100;
                            var stakeClean = stake;
                            var o = {};

                            o.ROI_in_stake = ROI_in_stake;
                            o.ROI_in_percent = ROI_in_percent;
                            o.stake = parseFloat(stake);
                            o.won = "half-won";

                            resultsData.push(o);

                        }
                    }
                    if (monthpriorDate < tipdatemilliseconds) {
                        if (obj.won == "won") {

                            var odd = obj.odd;
                            var stake = obj.stakeClean;
                            var out = odd * stake;

                            var ROI_in_stake = out - stake;
                            var ROI_in_percent = (ROI_in_stake / stake) * 100;

                            var o = {};

                            o.ROI_in_stake = ROI_in_stake;
                            o.ROI_in_percent = ROI_in_percent;
                            o.stake = parseFloat(stake);
                            o.won = "win";

                            resultsDataMonth.push(o);

                        }
                        if (obj.won == "draw") {

                            var odd = obj.odd;
                            var stake = obj.stakeClean;
                            var out = odd * stake;

                            var ROI_in_stake = out - stake;
                            var ROI_in_percent = (ROI_in_stake / stake) * 100;

                            var o = {};

                            o.ROI_in_stake = ROI_in_stake;
                            o.ROI_in_percent = ROI_in_percent;
                            o.stake = parseFloat(stake);
                            o.won = "drow";

                            resultsDataMonth.push(o);

                        }
                        if (obj.won == "lost") {
                            var odd = obj.odd;
                            var stake = obj.stakeClean;
                            var out = odd * stake;


                            var ROI_in_stake = -stake;
                            var ROI_in_percent = -100;

                            var o = {};

                            o.ROI_in_stake = ROI_in_stake;
                            o.ROI_in_percent = ROI_in_percent;
                            o.stake = parseFloat(stake);
                            o.won = "lost";

                            resultsDataMonth.push(o);

                        }
                        if (obj.won == "half-lost") {
                            var odd = obj.odd;
                            var stake = obj.stakeClean - (obj.stakeClean / 2);
                            var out = odd * stake;


                            var ROI_in_stake = -stake / 2;
                            var ROI_in_percent = -100;

                            var o = {};

                            o.ROI_in_stake = ROI_in_stake;
                            o.ROI_in_percent = ROI_in_percent;
                            o.stake = parseFloat(stake);
                            o.won = "half-lost";

                            resultsData.push(o);

                        }
                        if (obj.won == "half-won") {
                            var odd = obj.odd;
                            var stake = obj.stakeClean;
                            var out = odd * stake;

                            var ROI_in_stake = (out - stake) / 2;
                            var ROI_in_percent = (ROI_in_stake / stake) * 100;
                            var stakeClean = stake;
                            var o = {};

                            o.ROI_in_stake = ROI_in_stake;
                            o.ROI_in_percent = ROI_in_percent;
                            o.stake = parseFloat(stake);
                            o.won = "half-won";

                            resultsData.push(o);

                        }
                    }
                    //Betting Stats


                });

                // tipster stake sum
                var tipsterStakeSum = 0;
                var tipsterStakeSumWeek = 0;
                var tipsterStakeSumMonth = 0;

                //tipster roi_i_stake sum

                var ROI_in_stake_SUM = 0;
                var ROI_in_stake_SUMWeek = 0;
                var ROI_in_stake_SUMMonth = 0;

                // tipster procent sum
                var procentSum = 0;
                var procentSumWeek = 0;
                var procentSumMonth = 0;
                //All time Sum
                resultsData.map(function (obj) {

                    tipsterStakeSum += obj.stake;
                    ROI_in_stake_SUM += obj.ROI_in_stake;

                });
                procentSum = ((ROI_in_stake_SUM / tipsterStakeSum) * 100).toFixed(2);
                var ROI_in_stake_SUM_fixed = ROI_in_stake_SUM.toFixed(2);
                //Week Sum
                resultsDataWeek.map(function (obj) {

                    tipsterStakeSumWeek += obj.stake;
                    ROI_in_stake_SUMWeek += obj.ROI_in_stake;

                });

                procentSumWeek = ((ROI_in_stake_SUMWeek / tipsterStakeSumWeek) * 100).toFixed(2);


                var ROI_in_stake_SUM_fixedWeek = ROI_in_stake_SUMWeek.toFixed(2);
                //Month Sum

                resultsDataMonth.map(function (obj) {

                    tipsterStakeSumMonth += obj.stake;
                    ROI_in_stake_SUMMonth += obj.ROI_in_stake;

                });

                procentSumMonth = ((ROI_in_stake_SUMMonth / tipsterStakeSumMonth) * 100).toFixed(2);


                var ROI_in_stake_SUM_fixedMonth = ROI_in_stake_SUMMonth.toFixed(2);


                if ($(".grid-tipster-value").length) {

                    var totalStakeAllTime = 0;
                    var totalStakeMonth = 0;
                    var totalStakeWeek = 0;
                    var picksCleanCountAllTime = 0;
                    var picksCleanCountMonth = 0;
                    var picksCleanCountWeek = 0;
                    var today = new Date();
                    var monthpriorDate = new Date().setDate(today.getDate() - 30);
                    var weekpriorDate = new Date().setDate(today.getDate() - 7);

                    for (var i = 0; currentTipsters.length >= i; i++) {


                        try {
                            if (currentTipsters[i].won != "") {
                                var dateRaw = currentTipsters[i].startGMTRaw.split("/");
                                var dateClen = dateRaw[2] + "-" + dateRaw[1] + "-" + dateRaw[0];

                                if (monthpriorDate <= new Date(dateClen).getTime()) {
                                    totalStakeMonth = parseFloat(totalStakeMonth) + parseFloat(currentTipsters[i].stakeClean);
                                    picksCleanCountMonth = picksCleanCountMonth + 1;
                                }
                                if (weekpriorDate < new Date(dateClen).getTime()) {
                                    totalStakeWeek = parseFloat(totalStakeWeek) + parseFloat(currentTipsters[i].stakeClean);
                                    picksCleanCountWeek = picksCleanCountWeek + 1;
                                }
                                totalStakeAllTime = parseFloat(totalStakeAllTime) + parseFloat(currentTipsters[i].stakeClean);
                                picksCleanCountAllTime = picksCleanCountAllTime + 1;
                            }
                        } catch (err) {
                        }

                    }

                }

                var stakeCalculationTotalAllTime = (totalStakeAllTime / picksCleanCountAllTime).toFixed(2);
                var stakeCalculationTotalMonth = (totalStakeMonth / picksCleanCountMonth).toFixed(2);
                var stakeCalculationTotalWeek = (totalStakeWeek / picksCleanCountWeek).toFixed(2);
                $("#tipster-picks").prepend("<div>" + tipsterPicksRaw + "</div>");
                $("#tipster-sum").prepend("<div>" + ROI_in_stake_SUM_fixed + "</div>");
                $("#tipster-sum-percent").prepend("<div>" + procentSum + " %" + "</div>");
                $(".roi-col .roi-values").append("<div class = 'tipster-value-col' id = 'procent-sum-all-time'><h3>" + procentSum + " %" + "</h3></div>");
                $(".average-stake-col .average-stake-values").append("<div class = 'tipster-value-col' id = 'stake-sum-all-time'><h3>" + stakeCalculationTotalAllTime + "   </h3></div>");
                $(".average-stake-col .average-stake-values").append("<div class = 'tipster-value-col' id = 'stake-sum-week'><h3>" + stakeCalculationTotalWeek + "</h3></div>");
                $(".roi-col .roi-values").append("<div class = 'tipster-value-col' id = 'procent-sum-month'><h3>" + procentSumMonth + " %" + "</h3></div>");
                $(".roi-col .roi-values").append("<div class = 'tipster-value-col' id = 'procent-sum-week'><h3>" + procentSumWeek + " %" + "</h3></div>");
                $(".average-stake-col .average-stake-values").append("<div class = 'tipster-value-col' id = 'stake-sum-month'><h3>" + stakeCalculationTotalMonth + "</h3></div>");

                //Betting Stats

                function getTipster(api) {
                    var deferred = $.Deferred();

                    if ($("#tipster-filter-page").length != 0) {

                        var tipstersApi = $("body").attr("data-tipster-sort-by-pages");
                    } else {
                        var tipstersApi = $("body").attr("data-tipsters-details");
                    }

                    $.ajax({
                        url: tipstersApi,
                        type: 'GET',
                        dataType: 'json'
                    }).done(function (data) {
                        //console.log("success");
                        deferred.resolve(data);
                    }).fail(function () {
                        console.log("Error accessing User Details Endpoint...");
                        deferred.reject("Error accessing User Details Endpoint...");
                    });

                    return deferred.promise();
                }

                var newCurrentTipsters = [];
                var output2 = "";

                $.when(getTipster()).then(function (tipsterDetailsLoop) {

                    var dateWithout24Hours = moment().format('L');
                    dateWithout24Hours += " ";
                    dateWithout24Hours += moment().format('LTS');
                    // Create Pagination on tipster list page
                    if ($("#tipster-filter-page").length != 0) {
                        var allPages = tipsterDetailsLoop[0].loopConterNumber;
                        var navigationOutput = "";
                        var tipstersApi = $("body").attr("data-tipster-sort-by-pages");
                        for (var i = 1; i <= allPages; i++) {
                            navigationOutput += "<li><a href = '" + window.location.pathname + "?PageNum=" + i + "'>" + i + "</a></li>";
                        }
                        $(".tipster-page-navigation ul").append(navigationOutput);
                    }


                    //BEGIN Checkbox PredictionForm
                    if ($('#Tipster').length != 0) {
                        for (var i = 0; i < tipsterDetailsLoop.length; i++) {
                            var value = document.getElementById("Tipster").value;
                            var name = tipsterDetailsLoop[i].tipsterName;
                            if (name.replace(/\s/g, "") == value) {
                                if (tipsterDetailsLoop[i].followOnVIP.length) {
                                    if (tipsterDetailsLoop[i].followOnVIP == "True") {
                                        //$("#FollowOn_VIP").prop("checked");
                                        $(".hidden #FollowOn_VIP").prop("checked", true);

                                    }
                                }
                            }
                        }
                    }


                    //END Checkbox PredictionForm

                    for (var i = 0; i < tipsterDetailsLoop.length; ++i) {


                        var tipsterName = tipsterDetailsLoop[i].tipsterName;
                        tipsterName = tipsterName.replace(/\s+/g, '');

                        var resultsData = [];
                        var currentTipsters = tipsterDetails.filter(function (object) {


                            return object.tipster.replace(/\s+/g, '') == tipsterName;

                        });


                        currentTipsters.map(function (obj) {

                            if (obj.won == "won") {

                                var odd = obj.odd;
                                var stake = obj.stakeClean;
                                var out = odd * stake;

                                var ROI_in_stake = out - stake;
                                var ROI_in_percent = (ROI_in_stake / stake) * 100;

                                var o = {};

                                o.ROI_in_stake = ROI_in_stake;
                                o.ROI_in_percent = ROI_in_percent;
                                o.stake = parseFloat(stake);
                                o.won = "won";

                                resultsData.push(o);

                            }
                            if (obj.won == "drow") {
                                var odd = obj.odd;
                                var stake = obj.stakeClean;
                                var out = odd * stake;


                                var ROI_in_stake = 0;
                                var ROI_in_percent = 0;

                                var o = {};

                                o.ROI_in_stake = ROI_in_stake;
                                o.ROI_in_percent = ROI_in_percent;
                                o.stake = parseFloat(stake);
                                o.won = "drow";

                                resultsData.push(o);


                            }
                            if (obj.won == "lost") {
                                var odd = obj.odd;
                                var stake = obj.stakeClean;
                                var out = odd * stake;


                                var ROI_in_stake = -stake;
                                var ROI_in_percent = -100;

                                var o = {};

                                o.ROI_in_stake = ROI_in_stake;
                                o.ROI_in_percent = ROI_in_percent;
                                o.stake = parseFloat(stake);
                                o.won = "lost";

                                resultsData.push(o);


                            }
                        });
                        // tipster stake sum
                        var tipsterStakeSum = 0;
                        //tipster roi_i_stake sum
                        var ROI_in_stake_SUM = 0;
                        // tipster procent sum
                        var procentSum = 0;
                        //All time Sum
                        resultsData.map(function (obj) {

                            tipsterStakeSum += obj.stake;
                            ROI_in_stake_SUM += obj.ROI_in_stake;

                        });

                        procentSum = ((ROI_in_stake_SUM / tipsterStakeSum) * 100).toFixed(2);
                        var ROI_in_stake_SUM_fixed = ROI_in_stake_SUM.toFixed(2);


                        var tipsterPicks = currentTipsters.length;


                        if (isNaN(ROI_in_stake_SUM_fixed)) {
                            ROI_in_stake_SUM_fixed = 0;
                        }
                        var defaultSort = {};

                        currentTipsters.push(defaultSort);

                        for (var j = 0; j < currentTipsters.length; j++) {


                            try {
                                var predictionDate = currentTipsters[j].predictionDate;

                                var parts = predictionDate.split("/");
                                var newDateFormat = new Date(parts[2], parts[1] - 1, parts[0]);
                                currentTipsters[j].predictionDateFormat = newDateFormat;
                            } catch (err) {

                            }

                            currentTipsters[j].defaultSort = tipsterDetailsLoop[i].sortOrder;
                            currentTipsters[j].roi = ROI_in_stake_SUM_fixed;
                            currentTipsters[j].tipsterPicks = tipsterPicks;
                            currentTipsters[j].procentSum = procentSum;
                            currentTipsters[j].tipsterID = tipsterDetailsLoop[i].PageId;
                            currentTipsters[j].nationality = tipsterDetailsLoop[i].nationality;
                            currentTipsters[j].tipsterImage = tipsterDetailsLoop[i].tipsterImage;
                            currentTipsters[j].tipsterActive = tipsterDetailsLoop[i].tipsterActive;
                            currentTipsters[j].shortDescription = tipsterDetailsLoop[i].shortDescription;
                            currentTipsters[j].tipsterBlog = tipsterDetailsLoop[i].tipsterBlog;
                            currentTipsters[j].followOnVIP = tipsterDetailsLoop[i].followOnVIP;
                            currentTipsters[j].tipsterActive = tipsterDetailsLoop[i].tipsterActive;
                            currentTipsters[j].tipsterSignInDate = tipsterDetailsLoop[i].tipsterSignInDate;

                        }
                        newCurrentTipsters.push(currentTipsters);

                        newCurrentTipsters.reverse();

                        var tipstertest = tipsterDetailsLoop;

                        /*  tipsterDetailsLoop[i].roi = ROI_in_stake_SUM_fixed;
                            tipsterDetailsLoop.sort(function(a,b){
                          return a.roi - b.roi;
                        }); */
                        //tipstertest.reverse();


                        //var tipsterImage = "";


                    }

                    $("#toDateTipster").mouseleave(function () {
                        var fromDateTipster = $("#fromDateTipster").val();
                        var toDateTipster = $("#toDateTipster").val();


                        var corectDateTo = toDateTipster.split("-").reverse().join("/");
                        var corectDateFrom = fromDateTipster.split("-").reverse().join("/");


                        var sortedArrayTable = _.sortBy(currentTipsters, function (currentTipsters) {

                            return currentTipsters.predictionDateFormat;
                        });
                        sortedArrayTable.reverse();

                        for (tip in sortedArrayTable) {
                            if ($("#tipster-table").hasClass("tipster-table")) {
                                try {


                                    var startGMT = sortedArrayTable[tip].startGMT;

                                    var partsGMT = startGMT.split("/");
                                    var newDateGMT = new Date(partsGMT[1] + "/" + partsGMT[0] + "/" + partsGMT[2]);
                                } catch (err) {
                                    console.log("False");
                                }


                                var newDateFormat = new Date(parts[2], parts[1] - 1, parts[0]);
                                console.log("firstFlor");
                                if (sortedArrayTable[tip].predictionDateFormat > new Date(corectDateFrom)) {
                                    if (sortedArrayTable[tip].predictionDateFormat < new Date(corectDateTo)) {
                                        console.log("thirdFlor");
                                        var markup = "";
                                        markup += "<tr>";
                                        markup += "<td>" + sortedArrayTable[tip].tipster + "</td>";
                                        markup += "<td>" + sortedArrayTable[tip].bookmakerEmail + "</td>";
                                        markup += "<td>" + sortedArrayTable[tip].predictionDate + "</td>";
                                        if (currentTipsters[tip].followOnVIP == "True") {
                                            markup += "<td>Yes</td>";
                                        } else {
                                            markup += "<td>No</td>";
                                        }
                                        markup += "<td>" + sortedArrayTable[tip].game + "</td>";
                                        markup += "<td>" + sortedArrayTable[tip].stake + "</td>";

                                        var dateAddDay = newDateGMT;
                                        dateAddDay.setHours(dateAddDay.getHours() + 24);
                                        console.log(dateAddDay);
                                        console.log(new Date());
                                        if (dateAddDay < new Date()) {
                                            markup += "<td>STARTED</td>";
                                        } else {
                                            markup += "<td>OPEN TO BET</td>";

                                        }
                                        markup += "<td>" + sortedArrayTable[tip].procentSum + "</td>";


                                        markup += "<td>" + sortedArrayTable[tip].tipsterActive + "</td>";
                                        markup += "</tr>";
                                        $("#tipster-table").append(markup);
                                    }
                                }
                            }
                        }
                    });
                    var appendTarget = "#tipster-filter-page .container .row";

                    newCurrentTipsters.sort(function (a, b) {
                        return a[0].defaultSort - b[0].defaultSort;
                    });
                    newCurrentTipsters.sort(function (a, b) {
                        return (a[0].tipsterActive === b[0].tipsterActive) ? 0 : (a[0].tipsterActive == "True") ? -1 : 1;


                    });

                    for (i = 0; i < newCurrentTipsters.length; i++) {
                        var averageStakeTipstersPage = 0;
                        var roiCalc = 0;
                        for (j = 0; j < newCurrentTipsters[i].length; j++) {
                            try {

                                if (newCurrentTipsters[i][j].stakeClean != undefined) {
                                    averageStakeTipstersPage = parseFloat(averageStakeTipstersPage) + parseFloat(newCurrentTipsters[i][j].stakeClean);
                                }

                            } catch (err) {

                            }

                            roiCalc = roiCalc + newCurrentTipsters[i][j].roi;

                        }

                        var averageStakeTipstersPageFinal = (averageStakeTipstersPage / (newCurrentTipsters[i].length - 1)).toFixed(2);

                        roiCalc = roiCalc / newCurrentTipsters[i].length;
                        roiCalc = roiCalc.toFixed(2);

                        var output = "";
                        if (newCurrentTipsters[i][0].tipster != undefined) {
                            var translateActive = $("#tipster-filter-page").attr("data-atribute-translate-active");
                            var translateInactive = $(".filter-tipsters").attr("data-atribute-inactive");
                            var translateButton = $("#tipster-filter-page").attr("data-atribute-translate-button");
                            var translatePicks = $("#tipster-filter-page").attr("data-atribute-translate-picks");
                            var translateAvarageStake = $("#tipster-filter-page").attr("data-translate-avarage-stake");
                            var translateRoi = $("#tipster-filter-page").attr("data-translate-all-time-roi");
                            output += "<div class = 'col grid__col-md-4 grid__col-md-3'>";
                            output += "<div class = 'col-content'>";
                            if (newCurrentTipsters[i][0].tipsterActive == "True") {
                                output += "<span class='tipster-status active'><i class='fa fa-circle ' aria-hidden=\"true\"><span class='tipster-status-text'>" + translateActive + "</span></i></span>";
                            } else {
                                output += "<span class='tipster-status'><i class='fa fa-circle ' aria-hidden=\"true\"><span class='tipster-status-text'>" + translateInactive + "</span></i></span>";
                            }
                            output += "<span class = 'nationality-icon flag flag-icon-" + newCurrentTipsters[i][0].nationality + "'></span>";
                            output += "<div class = 'tipster-profile-image'><img src ='/Admin/Public/GetImage.ashx?width=176&height=176&crop=5&Quality=99&Format=webP&image=" + newCurrentTipsters[i][0].tipsterImage + "' alt='tipster-image' width='88px' height='88px'></div>";
                            output += "<div class = 'tipster-profile-name'> <p>" + newCurrentTipsters[i][0].tipster + "</p> </div>";

                            output += "<div class = 'grid'>";
                            output += "<div class = 'tipster-profile-picks grid__col-md-4'><p>" + newCurrentTipsters[i][0].tipsterPicks + "<span>" + translatePicks + "</span></p></div>";

                            if (!isNaN(newCurrentTipsters[i][0].procentSum))
                                output += "<div class = 'tipster-profile-ROI grid__col-md-4'><p>" + newCurrentTipsters[i][0].procentSum + "%<span>" + translateRoi + "</span></p></div>";
                            else
                                output += "<div class = 'tipster-profile-ROI grid__col-md-4'><p> -<span>" + translateRoi + "</span></p></div>";
                            output += "<div class = 'tipster-profile-stake grid__col-md-4'><p>" + averageStakeTipstersPageFinal + "<span>" + translateAvarageStake + "</span></p></div>";
                            output += "</div>";
                            output += "<div class = 'tipster-profile-description'><p>" + newCurrentTipsters[i][0].shortDescription + "</p></div>";
                            output += "<div class = 'tipster-cta-section'>"
                            output += " <a href = '" + newCurrentTipsters[i][0].tipsterBlog + "' class='btn btn--primary btn--line-height dw-mod'><i class='fa fa-globe'></i>My Website</a>";
                            output += " <a href = '/Default.aspx?ID=" + newCurrentTipsters[i][0].tipsterID + "' class='btn btn--primary btn--line-height dw-mod'>Details</a>";
                            output += "</div>";
                            output += "</div>";
                            output += "</div>";

                            $(appendTarget).append(output);
                        }
                    }
                    var output2 = output;
                    $(".loading-overlay").removeClass("active");
                });
                var appendTarget = "#tipster-filter-page .container .row";

                $("#filter-tipster-select").change(function () {
                    $("select option:selected").each(function () {
                        txt = $(this).text();
                    });
                    if (txt == "All Tipsters") {

                        newCurrentTipsters.sort(function (a, b) {
                            return a[0].defaultSort - b[0].defaultSort;
                        });
                        newCurrentTipsters.sort(function (a, b) {
                            return (a[0].tipsterActive === b[0].tipsterActive) ? 0 : (a[0].tipsterActive == "True") ? -1 : 1;
                        });
                        $(appendTarget).empty();

                        for (i = 0; i < newCurrentTipsters.length; i++) {
                            var averageStakeTipstersPage = 0;
                            var roiCalc = 0;
                            for (j = 0; j < newCurrentTipsters[i].length; j++) {
                                try {

                                    if (newCurrentTipsters[i][j].stakeClean != undefined) {
                                        averageStakeTipstersPage = parseFloat(averageStakeTipstersPage) + parseFloat(newCurrentTipsters[i][j].stakeClean);
                                    }

                                } catch (err) {

                                }

                                roiCalc = roiCalc + newCurrentTipsters[i][j].roi;

                            }

                            var averageStakeTipstersPageFinal = (averageStakeTipstersPage / (newCurrentTipsters[i].length - 1)).toFixed(2);

                            roiCalc = roiCalc / newCurrentTipsters[i].length;
                            roiCalc = roiCalc.toFixed(2);

                            var output = "";

                            if (newCurrentTipsters[i][0].tipster != undefined) {
                                var translateActive = $("#tipster-filter-page").attr("data-atribute-translate-active");
                                var translateInactive = $("#tipster-filter-page").attr("data-atribute-translate-active");
                                var translateButton = $("#tipster-filter-page").attr("data-atribute-translate-button");
                                var translatePicks = $("#tipster-filter-page").attr("data-atribute-translate-picks");
                                var translateAvarageStake = $("#tipster-filter-page").attr("data-translate-avarage-stake");
                                var translateRoi = $("#tipster-filter-page").attr("data-translate-all-time-roi");
                                output += "<div class = 'col grid__col-md-4'>";
                                output += "<div class = 'col-content'>";
                                if (newCurrentTipsters[i][0].tipsterActive == "True") {
                                    output += "<span class='tipster-status active'><i class='fa fa-circle ' aria-hidden=\"true\"><span class='tipster-status-text'>" + translateActive + "</span></i></span>";
                                } else {
                                    output += "<span class='tipster-status'><i class='fa fa-circle ' aria-hidden=\"true\"><span class='tipster-status-text'>" + translateInactive + "</span></i></span>";
                                }
                                output += "<span class = 'nationality-icon flag flag-icon-" + newCurrentTipsters[i][0].nationality + "'></span>";
                                output += "<div class = 'tipster-profile-image'><img src ='" + newCurrentTipsters[i][0].tipsterImage + "'></div>";
                                output += "<div class = 'tipster-profile-nationality'> </div>";
                                output += "<div class = 'tipster-profile-name'> <p>" + newCurrentTipsters[i][0].tipster + "</p> </div>";
                                output += " <a href = '/Default.aspx?ID=" + newCurrentTipsters[i][0].tipsterID + "' class='btn btn--primary btn--line-height dw-mod'>" + translateButton + "</a>";
                                output += "<div class = 'grid'>";
                                output += "<div class = 'tipster-profile-picks grid__col-md-4'><p>" + newCurrentTipsters[i][0].tipsterPicks + "<span>" + translatePicks + "</span></p></div>";
                                output += "<div class = 'tipster-profile-stake grid__col-md-4'><p>" + averageStakeTipstersPageFinal + "<span>" + translateAvarageStake + "</span></p></div>";
                                output += "<div class = 'tipster-profile-ROI grid__col-md-4'><p>" + newCurrentTipsters[i][0].procentSum + "<span>" + translateRoi + "</span></p></div>";
                                output += "</div>";
                                output += "<div class = 'tipster-profile-description'><p>" + newCurrentTipsters[i][0].shortDescription + ":<a href = '" + newCurrentTipsters[i][0].tipsterBlog + "'>" + newCurrentTipsters[i][0].tipsterBlog + "</a></p></div>";
                                output += "</div>";
                                output += "</div>";
                                $(appendTarget).append(output);
                            }
                        }

                    }
                    if (txt == "New Tipsters") {
                        newCurrentTipsters.sort(function (a, b) {
                            return new Date(b[0].tipsterSignInDate) - new Date(a[0].tipsterSignInDate);
                        });
                        newCurrentTipsters.sort(function (a, b) {
                            return (a[0].tipsterActive === b[0].tipsterActive) ? 0 : (a[0].tipsterActive == "True") ? -1 : 1;
                        });

                        $(appendTarget).empty();
                        for (i = 0; i < newCurrentTipsters.length; i++) {
                            var averageStakeTipstersPage = 0;
                            var roiCalc = 0;
                            for (j = 0; j < newCurrentTipsters[i].length; j++) {
                                try {

                                    if (newCurrentTipsters[i][j].stakeClean != undefined) {
                                        averageStakeTipstersPage = parseFloat(averageStakeTipstersPage) + parseFloat(newCurrentTipsters[i][j].stakeClean);
                                    }

                                } catch (err) {

                                }

                                roiCalc = roiCalc + newCurrentTipsters[i][j].roi;

                            }

                            var averageStakeTipstersPageFinal = (averageStakeTipstersPage / (newCurrentTipsters[i].length - 1)).toFixed(2);

                            roiCalc = roiCalc / newCurrentTipsters[i].length;
                            roiCalc = roiCalc.toFixed(2);

                            var output = "";

                            if (newCurrentTipsters[i][0].tipster != undefined) {
                                var translateActive = $("#tipster-filter-page").attr("data-atribute-translate-active");
                                var translateInactive = $("#tipster-filter-page").attr("data-atribute-translate-active");
                                var translateButton = $("#tipster-filter-page").attr("data-atribute-translate-button");
                                var translatePicks = $("#tipster-filter-page").attr("data-atribute-translate-picks");
                                var translateAvarageStake = $("#tipster-filter-page").attr("data-translate-avarage-stake");
                                var translateRoi = $("#tipster-filter-page").attr("data-translate-all-time-roi");
                                output += "<div class = 'col grid__col-md-4'>";
                                output += "<div class = 'col-content'>";
                                if (newCurrentTipsters[i][0].tipsterActive == "True") {
                                    output += "<span class='tipster-status active'><i class='fa fa-circle ' aria-hidden=\"true\"><span class='tipster-status-text'>" + translateActive + "</span></i></span>";
                                } else {
                                    output += "<span class='tipster-status'><i class='fa fa-circle ' aria-hidden=\"true\"><span class='tipster-status-text'>" + translateInactive + "</span></i></span>";
                                }
                                output += "<span class = 'nationality-icon flag flag-icon-" + newCurrentTipsters[i][0].nationality + "'></span>";
                                output += "<div class = 'tipster-profile-image'><img src ='" + newCurrentTipsters[i][0].tipsterImage + "'></div>";
                                output += "<div class = 'tipster-profile-nationality'> </div>";
                                output += "<div class = 'tipster-profile-name'> <p>" + newCurrentTipsters[i][0].tipster + "</p> </div>";
                                output += " <a href = '/Default.aspx?ID=" + newCurrentTipsters[i][0].tipsterID + "' class='btn btn--primary btn--line-height dw-mod'>" + translateButton + "</a>";
                                output += "<div class = 'grid'>";
                                output += "<div class = 'tipster-profile-picks grid__col-md-4'><p>" + newCurrentTipsters[i][0].tipsterPicks + "<span>" + translatePicks + "</span></p></div>";
                                output += "<div class = 'tipster-profile-stake grid__col-md-4'><p>" + averageStakeTipstersPageFinal + "<span>" + translateAvarageStake + "</span></p></div>";
                                output += "<div class = 'tipster-profile-ROI grid__col-md-4'><p>" + newCurrentTipsters[i][0].procentSum + "<span>" + translateRoi + "</span></p></div>";
                                output += "</div>";
                                output += "<div class = 'tipster-profile-description'><p>" + newCurrentTipsters[i][0].shortDescription + ":<a href = '" + newCurrentTipsters[i][0].tipsterBlog + "'>" + newCurrentTipsters[i][0].tipsterBlog + "</a></p></div>";
                                output += "</div>";
                                output += "</div>";
                                $(appendTarget).append(output);
                            }
                        }

                    }
                    if (txt == "Most Picks") {
                        newCurrentTipsters.sort(function (a, b) {
                            return a.length - b.length;
                        });

                        $(appendTarget).empty();
                        newCurrentTipsters.reverse();
                        newCurrentTipsters.sort(function (a, b) {
                            return (a[0].tipsterActive === b[0].tipsterActive) ? 0 : (a[0].tipsterActive == "True") ? -1 : 1;
                        });
                        for (i = 0; i < newCurrentTipsters.length; i++) {
                            var averageStakeTipstersPage = 0;
                            var roiCalc = 0;
                            for (j = 0; j < newCurrentTipsters[i].length; j++) {
                                try {

                                    if (newCurrentTipsters[i][j].stakeClean != undefined) {
                                        averageStakeTipstersPage = parseFloat(averageStakeTipstersPage) + parseFloat(newCurrentTipsters[i][j].stakeClean);
                                    }

                                } catch (err) {

                                }

                                roiCalc = roiCalc + newCurrentTipsters[i][j].roi;

                            }

                            var averageStakeTipstersPageFinal = (averageStakeTipstersPage / (newCurrentTipsters[i].length - 1)).toFixed(2);

                            roiCalc = roiCalc / newCurrentTipsters[i].length;
                            roiCalc = roiCalc.toFixed(2);
                            var output = "";

                            if (newCurrentTipsters[i][0].tipster != undefined) {
                                var translateActive = $("#tipster-filter-page").attr("data-atribute-translate-active");
                                var translateInactive = $("#tipster-filter-page").attr("data-atribute-translate-active");
                                var translateButton = $("#tipster-filter-page").attr("data-atribute-translate-button");
                                var translatePicks = $("#tipster-filter-page").attr("data-atribute-translate-picks");
                                var translateAvarageStake = $("#tipster-filter-page").attr("data-translate-avarage-stake");
                                var translateRoi = $("#tipster-filter-page").attr("data-translate-all-time-roi");
                                output += "<div class = 'col grid__col-md-4'>";
                                output += "<div class = 'col-content'>";
                                if (newCurrentTipsters[i][0].tipsterActive == "True") {
                                    output += "<span class='tipster-status active'><i class='fa fa-circle ' aria-hidden=\"true\"><span class='tipster-status-text'>" + translateActive + "</span></i></span>";
                                } else {
                                    output += "<span class='tipster-status'><i class='fa fa-circle ' aria-hidden=\"true\"><span class='tipster-status-text'>" + translateInactive + "</span></i></span>";
                                }
                                output += "<span class = 'nationality-icon flag flag-icon-" + newCurrentTipsters[i][0].nationality + "'></span>";
                                output += "<div class = 'tipster-profile-image'><img src ='" + newCurrentTipsters[i][0].tipsterImage + "'></div>";
                                output += "<div class = 'tipster-profile-nationality'> </div>";
                                output += "<div class = 'tipster-profile-name'> <p>" + newCurrentTipsters[i][0].tipster + "</p> </div>";
                                output += " <a href = '/Default.aspx?ID=" + newCurrentTipsters[i][0].tipsterID + "' class='btn btn--primary btn--line-height dw-mod'>My picks</a>";
                                output += "<div class = 'grid'>";
                                output += "<div class = 'tipster-profile-picks grid__col-md-4'><p>" + newCurrentTipsters[i][0].tipsterPicks + "<span>" + translatePicks + "</span></p></div>";
                                output += "<div class = 'tipster-profile-stake grid__col-md-4'><p>" + averageStakeTipstersPageFinal + "<span>" + translateAvarageStake + "</span></p></div>";
                                output += "<div class = 'tipster-profile-ROI grid__col-md-4'><p>" + newCurrentTipsters[i][0].procentSum + "<span>" + translateRoi + "</span></p></div>";
                                output += "</div>";
                                output += "<div class = 'tipster-profile-description'><p>" + newCurrentTipsters[i][0].shortDescription + ":<a href = '" + newCurrentTipsters[i][0].tipsterBlog + "'>" + newCurrentTipsters[i][0].tipsterBlog + "</a></p></div>";
                                output += "</div>";
                                output += "</div>";
                            }
                            $(appendTarget).append(output);
                        }

                    }
                    if (txt == "Most ROI") {
                        newCurrentTipsters.sort(function (a, b) {
                            return a[0].procentSum - b[0].procentSum;
                        });
                        console.log("newCurrentTipsters", newCurrentTipsters)
                        $(appendTarget).empty();
                        newCurrentTipsters.reverse();
                        newCurrentTipsters.sort(function (a, b) {
                            return (a[0].tipsterActive === b[0].tipsterActive) ? 0 : (a[0].tipsterActive == "True") ? -1 : 1;
                        });
                        for (i = 0; i < newCurrentTipsters.length; i++) {
                            var averageStakeTipstersPage = 0;
                            var roiCalc = 0;
                            for (j = 0; j < newCurrentTipsters[i].length; j++) {
                                try {

                                    if (newCurrentTipsters[i][j].stakeClean != undefined) {
                                        averageStakeTipstersPage = parseFloat(averageStakeTipstersPage) + parseFloat(newCurrentTipsters[i][j].stakeClean);
                                    }

                                } catch (err) {

                                }

                                roiCalc = roiCalc + newCurrentTipsters[i][j].roi;

                            }

                            var averageStakeTipstersPageFinal = (averageStakeTipstersPage / (newCurrentTipsters[i].length - 1)).toFixed(2);

                            roiCalc = roiCalc / newCurrentTipsters[i].length;
                            roiCalc = roiCalc.toFixed(2);
                            var output = "";
                            if (newCurrentTipsters[i][0].tipster != undefined) {
                                var translateActive = $("#tipster-filter-page").attr("data-atribute-translate-active");
                                var translateInactive = $("#tipster-filter-page").attr("data-atribute-translate-active");
                                var translateButton = $("#tipster-filter-page").attr("data-atribute-translate-button");
                                var translatePicks = $("#tipster-filter-page").attr("data-atribute-translate-picks");
                                var translateAvarageStake = $("#tipster-filter-page").attr("data-translate-avarage-stake");
                                var translateRoi = $("#tipster-filter-page").attr("data-translate-all-time-roi");
                                output += "<div class = 'col grid__col-md-4'>";
                                output += "<div class = 'col-content'>";
                                if (newCurrentTipsters[i][0].tipsterActive == "True") {
                                    output += "<span class='tipster-status active'><i class='fa fa-circle ' aria-hidden=\"true\"><span class='tipster-status-text'>" + translateActive + "</span></i></span>";
                                } else {
                                    output += "<span class='tipster-status'><i class='fa fa-circle ' aria-hidden=\"true\"><span class='tipster-status-text'>" + translateInactive + "</span></i></span>";
                                }
                                output += "<span class = 'nationality-icon flag flag-icon-" + newCurrentTipsters[i][0].nationality + "'></span>";
                                output += "<div class = 'tipster-profile-image'><img src ='" + newCurrentTipsters[i][0].tipsterImage + "'></div>";
                                output += "<div class = 'tipster-profile-nationality'> </div>";
                                output += "<div class = 'tipster-profile-name'> <p>" + newCurrentTipsters[i][0].tipster + "</p> </div>";
                                output += " <a href = '/Default.aspx?ID=" + newCurrentTipsters[i][0].tipsterID + "' class='btn btn--primary btn--line-height dw-mod'>My picks</a>";
                                output += "<div class = 'grid'>";
                                output += "<div class = 'tipster-profile-picks grid__col-md-4'><p>" + newCurrentTipsters[i][0].tipsterPicks + "<span>" + translatePicks + "</span></p></div>";
                                output += "<div class = 'tipster-profile-stake grid__col-md-4'><p>" + averageStakeTipstersPageFinal + "<span>" + translateAvarageStake + "</span></p></div>";
                                output += "<div class = 'tipster-profile-ROI grid__col-md-4'><p>" + newCurrentTipsters[i][0].procentSum + "<span>" + translateRoi + "</span></p></div>";
                                output += "</div>";
                                output += "<div class = 'tipster-profile-description'><p>" + newCurrentTipsters[i][0].shortDescription + ":<a href = '" + newCurrentTipsters[i][0].tipsterBlog + "'>" + newCurrentTipsters[i][0].tipsterBlog + "</a></p></div>";
                                output += "</div>";
                                output += "</div>";
                            }
                            $(appendTarget).append(output);
                        }

                    }


                });
            });
        }
    }
    //Approve tip form

    $(document).ready(function () {
        

        if ($(".tipster-single-page").length != 0 ) {

            function getTipstersIndividual(api) {
                var deferred = $.Deferred();

                var tipstersApi = $(".tipster-single-page").attr("data-tipster-feed");

                $.ajax({
                    url: tipstersApi,
                    type: 'GET',
                    dataType: 'json'
                }).done(function (data) {
                    //console.log("success");
                    deferred.resolve(data);
                }).fail(function () {
                    console.log("Error accessing User Details Endpoint...");
                    deferred.reject("Error accessing User Details Endpoint...");
                });

                return deferred.promise();
            }

            $.when(getTipstersIndividual()).then(function (tips) {



                for (var i = 0; i <= tips.length; i++) {
                    var tipStatus = ((tips[i].won == "won") ? "#0FBB7D" : ((tips[i].won == "draw") ? "#0053cc" : ((tips[i].won == "half-won") ? "#0FBB7D" : "#E94F37")))
                    var tipStatusLetter = ((tips[i].won == "won") ? "W" : ((tips[i].won == "draw") ? "D" : ((tips[i].won == "half-won") ? "H W" : ((tips[i].won == "half-lost") ? "H L" : "L"))));
                    var output = "";
                    output += "<div class = 'grid tips-list'>"
                    output += "<div class='grid__col-md-12 grid__col-xs-12 tips_cell '>";
                    output += "<div class='grid__cell'>";
                    output += "<div class='center-container dw-mod'>";
                    output += '<div class="grid">';
                    output += '<div class="grid__col-md-8 grid__col-xs-12">';
                    output += '<h3 class="tip-status-tipster" style="background-color:' + tipStatus + '">' + tipStatusLetter + '</h3>';
                    output += '</div>';
                    if(tips[i].vipScreenshot != ""){
                    output += "<div class = 'grid__col-md-4 grid__col-xs-12 vip-screenshot-wrapper'>";
                    output += "<a href = '" + tips[i].vipScreenshot + "' data-lightbox='vipscreenshot' data-gallery='gallery' class = 'light-box-after'>";
                    output += "<img class = 'bookmaker-logo-col-vip-screenshot' src='/Admin/Public/GetImage.ashx?Image=" + tips[i].vipScreenshot + "&Crop=5&DoNotUpscale=1&width=200&height=250&Quality=99&Format=webP' width='200px' height='250px' alt='result-screenshot'>";
                    output += "</a>"
                    output += "</div>"
                      }
                    output += '</div>';
                    output += "<div class='grid'>";

                    output += "</div>";
                    output += "<div class='grid'>";
                    output += " <div class='grid__col-md-9 grid__col-xs-12'>";
                    output += "<h3>";
                    output += "<a href = '/Default.aspx?ID=" + tips[i].PageId + "'>" + tips[i].game + "</a>";
                    output += "</h3>";
                    output += "</div>";
                    output += "</div>";
                    output += "<div class='grid'>";
                    output += "<div class='grid__col-md-3 grid__col-xs-12'>";
                    output += "<p><strong>Prediction: </strong>" + tips[i].predictionNumber + " </p>";
                    output += "<p><strong>Tipster: </strong> <a href =/Default.aspx?ID=" + tips[i].TipsterPageId +" title='tipste-link'>" + tips[i].tipster + "</a></p>";
                    output += "<p><strong>Category: </strong> " + tips[i].tipCategory + " </p>";
                    output += "<p><strong>League: </strong> " + tips[i].league + " </p>";
                    output += "</div>";
                    output += " <div class='grid__col-md-3 grid__col-xs-12'>";

                    output += "<p><strong>Bookmaker</strong> <img class='bookmaker-logo' loading='lazy' src = '/Admin/Public/GetImage.ashx?Image=" + tips[i].bookmakerLogo + "&Crop=5&DoNotUpscale=1&width=90&height=30&Quality=99&Format=webP' width='90px' height='30px' alt='bookmaker-logo'> </p>";
                    output += "<p> </p>";
                    output += "<p><strong>Stake</strong> " + tips[i].stake + " </p>";
                    output += "<p><strong>Odds</strong> " + tips[i].odd + " </p>";

                    if (tips[i].won != "") {
                        if (tips[i].won == "won") {
                            output += "<p class = 'tip-final-status'><span class = 'won-tip'><i class = 'fa fa-long-arrow-up' aria-hidden='true'></i></span>" + tips[i].stakeClean + "<span class ='won-tip'><i class='fa fa-check' aria-hidden='true'></i></span>" + tips[i].finalScore + "</p>";
                        }
                        if (tips[i].won == "lost") {
                            output += "<p class = 'tip-final-status'><span class = 'lost-tip'><i class = 'fa fa-long-arrow-up' aria-hidden='true'></i></span>" + tips[i].stakeClean + "<i class='fa fa-times' aria-hidden='true'></i>" + tips[i].finalScore + "</p>";
                        }
                        if (tips[i].won == "draw") {
                            output += "<p class = 'tip-final-status'><span class = 'draw-tip'><i class = 'fa fa-minus' aria-hidden='true'></i></span>" + tips[i].stakeClean + "<span class ='draw-tip'><i class='fa fa-circle' aria-hidden='true'></i></span>" + tips[i].finalScore + "</p>";
                        }
                        if (tips[i].won == "half-lost") {
                            output += "<p class = 'tip-final-status'><span class = 'lost-tip'><i class = 'fa fa-arrow-circle-up' aria-hidden='true'></i></span>" + tips[i].stakeClean / 2 + "<i class='fa fa-times' aria-hidden='true'></i></span>" + tips[i].finalScore + "</p>";
                        }
                        if (tips[i].won == "half-win") {
                            output += "<p class = 'tip-final-status'><span class = 'won-tip'><i class = 'fa fa-arrow-circle-up' aria-hidden='true'></i></span>" + tips[i].stakeClean / 2 + "<span class ='won-tip'><i class='fa fa-check' aria-hidden='true'></i></span>" + tips[i].finalScore + "</p>";
                        }

                    }
                    output += "</div>";
          
               


                    output += "</div>";
                    output += "<div class='grid'>";
                    output += '<div class="grid__col-md-12 grid__col-xs-12 col-info-tips-event">'
                    output += "<p>Betting prediction: " + tips[i].betOn + "</p>";
                    output += "<p>Starting Time: " + tips[i].startGMT + "</p>";
                    output += "</div>";
    
                    output += "</div>";
                    output += '<div class="grid">';
                    output += '<div class="grid__col-md-12 grid__col-xs-12">';
                    output += '<div class="description">';
                    output += "<p><strong>The bet was made via <a href='" + tips[i].bookmakerUrl + "' title='bookmaker-call-to-action' rel='noreferrer'>" + tips[i].bookmakerName + " </a> at odds: " + tips[i].odd + "</strong></p>";
                    output += "" + tips[i].tipDescriptionClean + "";

                    output += "</div>";
                    output += "</div>";
                    output += "</div>";
                    output += '<div class="grid">';
                    output += '<div class="grid__col-md-4 grid__col-xs-12 prediction-date-tips-list">'
                    output += '<p><strong>Add Date: <span>' + tips[i].predictionDateRaw + '</span></strong></p>'
              
                    output += "</div>";
                    output += '<div class="grid__col-md-4 grid__col-xs-12">'
                    output += '<div id="dsSocialFontIconsShare">'
           
             
                    output += "</div>";
                    output += "</div>";
                    output += '<div class="grid__col-md-12 grid__col-xs-12 cta-tips-list">'
                    output += "<p class = 'center'><strong>Follow this bet and open an account at <a href='" + tips[i].bookmakerUrl + "' title='call-to-action' rel='noreferrer' >" + tips[i].bookmakerName + "</a> now</strong></p>";
                    output += '<a href="/english/open-account/vip" class="btn btn--primary btn--line-height dw-mod bookmaker-name-prediction-button" title="sign-up-vip" rel="noreferrer">SIGN UP at VIP Service</a>'
                    output += "</div>";
                    output += "</div>";
                    output += "</div>";
                    output += "</div>";
                    output += "</div>";
                    output += "</div>";
                    output += "</div>";
                    $("#tips-list").append(output);
                }

            });

        }
        if ($("#approve-new-tip-form").length > 0 || tipsterFormPage > 0){
            function getBookmakers(api) {
                var deferred = $.Deferred();

                var tipstersApi = $("body").attr("data-bookmakers-feed");

                $.ajax({
                    url: tipstersApi,
                    type: 'GET',
                    dataType: 'json'
                }).done(function (data) {
                    //console.log("success");
                    deferred.resolve(data);
                }).fail(function () {
                    console.log("Error accessing User Details Endpoint...");
                    deferred.reject("Error accessing User Details Endpoint...");
                });

                return deferred.promise();
            }

            $.when(getBookmakers()).then(function (bookmakers) {

                for (var i = 0; bookmakers.length >= i; i++) {

                    try {
                        $("#Bookmaker_Name").append("<option value='" + bookmakers[i].bookmakerName.replace(/\s/g, "+") + "'>" + bookmakers[i].bookmakerName + "</option>")
                    } catch (err) {

                    }

                }


                if ($("#approve-new-tip-form").length) {
                    $("#Bookmaker_Name option:contains('VIP')").val("VIP+Service");
                    var bookmakerName = $("#approve-new-tip-form").attr("data-attribute-bookmaker-name").replace(" ", "+");
                    if (bookmakerName == "VIP") {
                        $("#Bookmaker_Name option[value='VIP+Service']").attr("selected", "selected");
                    } else {
                        $("#Bookmaker_Name option[value='" + bookmakerName + "']").attr("selected", "selected");
                    }

                    $("#Bookmaker").val("/Files/Images/BetIBC/Agents/BookmakersLogo/" + bookmakerName.replace("+", "_") + ".png");

                    $("#Bookmaker_Name").change(function () {
                        var bookmakerName = $("#Bookmaker_Name").val().replace("+", " ");
                        var currentBookmaker = "";
                        console.log(bookmakerName);
                        for (var i = 0; bookmakers.length >= i; i++) {

                            try {
                                currentBookmaker = bookmakers[i].filter(function (object) {
                                    return object.bookmakerName == bookmakerName;
                                });
                            } catch (err) {

                            }
                        }

                        $("#Bookmaker").val("/Files/Images/BetIBC/Agents/BookmakersLogo/" + bookmakerName.replace(" ", "_") + ".png")
                    });
                }

            });
        }
    });


    $(document).ready(function () {
   
 
        
        if ($("#news-pagination").length) {
            var totalPagesNumber = $("#news-pagination").attr("data-total-pages-number");
            var urlRaw = window.location.href;
            var urlID = urlRaw.split("ID=");
            if(urlID[1] == undefined){
             var urlArray = urlRaw.split("?");
                var urlClear = urlArray[0] + "?" + "page=";
             }else{
                 var urlArray = urlRaw.split("&");
                 var urlClear = urlArray[0] + "&" + "page=";
             }
   
          
            var pageNumberArray = "";
            console.log(urlArray[1]);
            if (urlArray[1] != undefined) {
                pageNumberArray = urlArray[1].split("=");
  
            }
            console.log(pageNumberArray[0]);
            console.log(totalPagesNumber);
            while (totalPagesNumber >= 1) {
                console.log(totalPagesNumber);
                if (pageNumberArray == "") {
                    if (totalPagesNumber == 1) {
                        $("#news-pagination ").prepend("<div><a class='active' disable href ='" + urlClear + totalPagesNumber + "'>" + totalPagesNumber + "</div>");
                    } else {
                        $("#news-pagination ").prepend("<div><a href ='" + urlClear + totalPagesNumber + "'>" + totalPagesNumber + "</div>");

                    }
                } else {
                    if (pageNumberArray[1] == totalPagesNumber) {
                        $("#news-pagination ").prepend("<div><a class='active' href ='" + urlClear + totalPagesNumber + "'>" + totalPagesNumber + "</div>");
                    } else {
                        $("#news-pagination ").prepend("<div><a href ='" + urlClear + totalPagesNumber + "'>" + totalPagesNumber + "</div>");

                    }
                }

                totalPagesNumber--;
            }
            $('#news-pagination ').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
              prevArrow: '<button type="button" class="slick-prev " name="button-previous"><i class="fa fa-chevron-left"></i></button>',
              nextArrow: '<button type="button" class="slick-next " name="button-next"><i class="fa fa-chevron-right"></i></button>',
            });
        }

        if ($(".date-time-picker-wrapper").length) {
            $('.datetimepicker').datetimepicker({

                format: 'Y-m-d H:i',
                step: 5


            })

        }
    });
    //Mouse hover on date

    $("#date-time-tip").mouseleave(function () {
  
        var today = new Date();
        today.setHours(today.getHours() + 24);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var hh = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }
        if (hh < 10) {
            hh = '0' + hh
        }
        if (min < 10) {
            min = '0' + min
        }
        if (sec < 10) {
            sec = '0' + sec
        }

        today = yyyy + '-' + mm + '-' + dd + 'T' + hh + ':' + min + ":" + sec;
        var timeInputRaw = document.getElementById("date-time-tip").value;
        var timeInput = timeInputRaw.replace(" ", "T");
        $("#date-time-tip").attr("data-attr-time", timeInput);

        //var today = new Date();

        //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'T'+today.getHours() + ":" + today.getMinutes();


        var ctime = $("#date-time-tip").attr("data-attr-time");

        if (today < ctime) {
            console.log("True");
            $(".item-edit-submission .overlay-button").removeClass("active");

        } else {

            $(".item-edit-submission .overlay-button").addClass("active");
        }
        //document.getElementById("time-test").setAttribute("min", date);


    });
    $(".tipsters-form .overlay-button.active").click(function () {
        alert("The start of the event must be 24 hours higher than the current time.");

    });


    //Tipster Odd Mask input
    $(document).ready(function () {
        $('#odd-input').mask('0000.000', {
            reverse: true
        });

    });
    //Questions animation
  if($(".action-questions").length > 0){
    $(".action-questions").click(function () {
        if($(this).hasClass("active")){
          $(this).removeClass("active");
            $(this).next().toggle("slow")
           }else{
           $(this).addClass("active");
              $(this).next().toggle("slow")
           }

    });
    }
    //Tipster Stats Butons animations
    $("#week-roi").click(function () {
        $(".grid-tipster-value .roi-col p").removeClass("active-button");
        $(".grid-tipster-value #week-roi").addClass("active-button");
        $(".roi-values div").hide();
        $("#procent-sum-week").show();

    });
    $("#week-stake").click(function () {
        $(".grid-tipster-value .average-stake-col p").removeClass("active-button");
        $(".grid-tipster-value #week-stake").addClass("active-button");
        $(".average-stake-values div").hide();
        $("#stake-sum-week").show();
    });
    $("#all-time-stake").click(function () {
        $(".grid-tipster-value .average-stake-col p").removeClass("active-button");
        $(".grid-tipster-value #all-time-stake").addClass("active-button");
        $(".average-stake-values div").hide();
        $("#stake-sum-all-time").show();
    });
    $("#all-time-roi").click(function () {
        $(".grid-tipster-value .roi-col p").removeClass("active-button");
        $(".grid-tipster-value #all-time-roi").addClass("active-button");
        $(".roi-values div").hide();
        $("#procent-sum-all-time").show();
    });
    $("#month-roi").click(function () {
        $(".grid-tipster-value .roi-col p").removeClass("active-button");
        $(".grid-tipster-value #month-roi").addClass("active-button");
        $(".roi-values div").hide();
        $("#procent-sum-month").show();
    });
    $("#month-stake").click(function () {
        $(".grid-tipster-value .average-stake-col p").removeClass("active-button");
        $(".grid-tipster-value #month-stake").addClass("active-button");
        $(".average-stake-values div").hide();
        $("#stake-sum-month").show();
    });
    //Tipster Description
    $("#picks-button").click(function () {
        $(".tipster-dropdown-buttons .grid__col-md-4 h3").removeClass("active-button");
        $(".tipster-dropdown-buttons #picks-button").addClass("active-button");
        $(".tipster-dropdown-buttons .grid").removeClass("active");
        $(".tipster-dropdown-buttons .latest-ten-tips-value").addClass("active");

    });
    $("#description-button").click(function () {
        $(".tipster-dropdown-buttons .grid__col-md-4 h3").removeClass("active-button");
        $(".tipster-dropdown-buttons #description-button ").addClass("active-button");
        $(".tipster-dropdown-buttons .grid").removeClass("active");
        $(".tipster-dropdown-buttons .nav-description").addClass("active");

    });
    $("#tutorials-button").click(function () {
        $(".tipster-dropdown-buttons .grid__col-md-4 h3").removeClass("active-button");
        $(".tipster-dropdown-buttons #tutorials-button").addClass("active-button");
        $(".tipster-dropdown-buttons .grid").removeClass("active");
        $(".tipster-dropdown-buttons .tutorial-video").addClass("active");

    });


    //Lightbox animation
    lightbox.option({
        'resizeDuration': 100,
        'wrapAround': false,
        'albumLabel': "",
        'positionFromTop': 200,
        'showImageNumberLabel': false

    })

    if($("#user-bookmaker-account-info").length >= 1){


        function getAccounts(api) {
            var deferred = $.Deferred();

            var tipstersApi = $("body").attr("data-users-valid-acconts");

            $.ajax({
                url: tipstersApi,
                type: 'GET',
                dataType: 'json'
            }).done(function (data) {
                //console.log("success");
                deferred.resolve(data);
            }).fail(function () {
                console.log("Error accessing User Details Endpoint...");
                deferred.reject("Error accessing User Details Endpoint...");
            });

            return deferred.promise();
        }


        $.when(getAccounts()).then(function (accountDetails) {
            var accountID = $(".container").attr("data-type-accontid");
            var currentAccount = accountDetails.filter(function (object) {
                return object.userId == accountID;
            });
            if ($("#user-bookmaker-account-info").length) {
                var userID = $("#AccountsInfo").attr("data-attribute-userid");
                var currentAccountsProfile = accountDetails.filter(function (object) {
                    return object.userId == userID;
                });
                console.log("Pagina de My Profile", currentAccountsProfile);
                var output = "";
                for (var i = 0; i < currentAccountsProfile.length; i++) {

                    output += "<li class='list-title'><strong>" + currentAccountsProfile[i].AccountBookmaker + "</strong></li>";
                    output += "<li><strong>Username:</strong>" + currentAccountsProfile[i].AccountUserName + "</li>";
                    output += "<li><strong>ID:</strong>" + currentAccountsProfile[i].AccountID + "</li>";
                    output += "<li><strong>Currency</strong>" + currentAccountsProfile[i].AccountCurrency + "</li>";
                    if (currentAccountsProfile[i].AccountBookmaker == "Orbit Exchange") {
                        output += "<li><strong>Orbit commission:</strong>" + currentAccountsProfile[i].AccountUserName + "</li>";
                    }
                    if (currentAccountsProfile[i].AccountBookmaker == "VIP") {
                        output += "<li><strong>VIP-IBC commision:</strong>" + currentAccountsProfile[i].AccountUserName + "</li>";
                    }
                    output += "<li><strong>Status:</strong>" + currentAccountsProfile[i].AccountUserName + "</li>";
                    output += "<li><strong>Opened on:</strong>" + currentAccountsProfile[i].AccountOpenedDate + "</li>";

                }
                $("#user-bookmaker-account-info").append(output);


            }

            for (var i  in currentAccount) {
                if (currentAccount[i].isVerified == "True") {
                    $(".form-content").removeClass("hidden");

                } else {
                    $(".form-accont-message").removeClass("hidden");
                }
            }

       

        });
    }
 

 
    $("#reset-filter-button").click(function () {
        var currentURL = window.location.href;
        document.location = currentURL;
    });
  
    $("#reset-filter-button").click(function () {
        var currentURL = window.location.href;
        var currentURLSplit = currentURL.split("?");
        window.location.href = currentURLSplit[0];
    })

//All Valid Acconts json



//Get latest Tips table
    if(IsTipsterPage >= 1 || latestTipsPage >= 1) {
        function getLatestTips(api) {
            var deferred = $.Deferred();

            var tipstersApi = $("body").attr("data-tipsters-feed");

            $.ajax({
                url: tipstersApi,
                type: 'GET',
                dataType: 'json'
            }).done(function (data) {
                //console.log("success");
                deferred.resolve(data);
            }).fail(function () {
                console.log("Error accessing User Details Endpoint...");
                deferred.reject("Error accessing User Details Endpoint...");
            });

            return deferred.promise();
        }

        $.when(getLatestTips()).then(function (allTipsDetails) {
            if ($("#approve-new-tip-form").length) {
                var predictionTitleRaw = $("#approve-new-tip-form").attr("data-link");
                var predictionTitle = predictionTitleRaw.replace(/[^a-zA-Z 0-9]+/g, '');
                var predictionTitleClean = predictionTitle.replace(/\s{2,}/g, '-');
                var predictionTitleString = $("#Prediction_Title").attr("value");

                var predictionsFilteredByName = allTipsDetails.filter(function (object) {
                    return object.game == predictionTitleString;
                });
                console.log(latinize(predictionTitleRaw));
                var linkClean = predictionTitleRaw.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "-" + predictionsFilteredByName.length + "";

                if (predictionsFilteredByName.length == 0) {

                    $("#Link").val("" + origin + "/english/tipsters/latest-tips/" + predictionTitleRaw.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                } else {
                    $("#Link").val("" + origin + "/english/tipsters/latest-tips/" + linkClean);
                }
            }

        });
    }
    if(latestTipsPage >= 1) {
        function getLatestTipsByLanguage(api) {
            var deferred = $.Deferred();
            var tipstersApi = ""
            var tipstersApi = $("body").attr("data-tipster-feed-by-language");
            var urlRaw = window.location.href;
            var url = "";
            var urlSplit = "";

            if (urlRaw.indexOf("PageNum=") >= 0) {
                urlSplit = urlRaw.split("PageNum=");
                if ($("#youcanbet").length) {

                    var tipstersApiRaw = $("#youcanbet").attr("data-you-can-bet").split("PageNum=");
                    tipstersApi = tipstersApiRaw[0] + "&PageNum=" + urlSplit[1]

                } else {

                    var tipstersApiRaw = $("body").attr("data-tipster-feed-by-language").split("PageNum=");
                    tipstersApi = tipstersApiRaw[0] + "PageNum=" + urlSplit[1]
                }


            } else {
                if ($("#youcanbet").length) {
                    var tipstersApi = $("#youcanbet").attr("data-you-can-bet");

                } else {
                    var tipstersApi = $("body").attr("data-tipster-feed-by-language");
                }

            }
            $.ajax({
                url: tipstersApi,
                type: 'GET',
                dataType: 'json'
            }).done(function (data) {

                //console.log("success");
                deferred.resolve(data);
            }).fail(function () {
                console.log(tipstersApiRaw);
                console.log("Error accessing User Details Endpoint...");
                deferred.reject("Error accessing User Details Endpoint...");
            });

            return deferred.promise();
        }

        var todayTest, dateObject;
        $.when(getLatestTipsByLanguage()).then(function (latestTipsDetails) {
            var predictionID = $(".prediction-single").attr("data-prediction-ID");
            var currentPrediction = latestTipsDetails.filter(function (object) {
                return object.PageId == predictionID;
            });

            var lastPageLink = latestTipsDetails[0].TotalPages;
            var totalPagesRaw = lastPageLink.split("PageNum=");
            var totalPagesClean = totalPagesRaw[1];
            $("#pagination-latest-tips").attr("data-total-pages", totalPagesClean);
            var tipsterName = $("#tipster-name").attr("data-tipster-name");
            var resultsData = [];
     

            var currentTipsters = latestTipsDetails.filter(function (object) {
                return object.tipster == tipsterName;

            });

            var i = 0;


            var sortedArray = _.sortBy(latestTipsDetails, function (latestTipsDetails) {

                return latestTipsDetails.predictionDate;
            });

            latestTipsDetails = sortedArray;

            function sortfn(a, b) {
                var dateA = new Date(a.name);
                var dateB = new Date(b.name);
                return dateA - dateB;
            }


            var arrFiltered = latestTipsDetails.reduce(function (r, v, k) {


                var date = new Date(v.startGMTRaw).getTime();
                var temp = r.filter(function (o) {
                    return o.name == v.startGMTRaw;
                });
                if (temp.length > 0) {
                    var currentObject = temp[0];
                    currentObject.set.push(v);
                } else {
                    var obj = {};
                    obj.set = [];
                    obj.name = v.startGMTRaw;
                    obj.set.push(v);

                    r.push(obj);
                }

                return r;
            }, []);

            //  arrFiltered.sort(sortfn);
            function toDate(dateStr) {
                var parts = dateStr.split("/")
                return new Date(parts[2], parts[1] - 1, parts[0])
            }

            function toDateGMT(dateStr) {

                var match = dateStr.match(/^(\d+)\/(\d+)\/(\d+) (\d+)\:(\d+)\:(\d+)$/);
                try {
                    return date = new Date(match[3], match[2] - 1, match[1], match[4], match[5], match[6]);

                } catch (e) {


                }

            }

            arrFiltered = _.sortBy(arrFiltered, function (dateObj) {
                return toDate(dateObj.name);
            });
            arrFiltered.reverse();
            if($("#latest-tips").length > 0){
                var dateTranslate = $("#latest-tips").attr("data-date-translate")
                var leagueTranslate = $("#latest-tips").attr("data-league-translate")
                var matchTranslate = $("#latest-tips").attr("data-match-translate")
                var stakeTranslate = $("#latest-tips").attr("data-stake-translate")
                var oddTranslate = $("#latest-tips").attr("data-odd-translate")
                var bettingTranslate = $("#latest-tips").attr("data-betting-translate")
                var bookmakerTranslate = $("#latest-tips").attr("data-bookmaker-translate")
                var statusTranslate = $("#latest-tips").attr("data-status-translate")
                
            }

            var i;
            for (var item in arrFiltered) {
                var output = "";
                var st = latestTipsDetails[item].startGMTRaw;
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();
                var hh = today.getHours();
                var min = today.getMinutes();
                var sec = today.getSeconds();

                if (dd < 10) {
                    dd = '0' + dd
                }

                if (mm < 10) {
                    mm = '0' + mm
                }
                if (hh < 10) {
                    hh = '0' + hh
                }
                if (min < 10) {
                    min = '0' + min
                }
                if (sec < 10) {
                    sec = '0' + sec
                }

                today = yyyy + '/' + mm + '/' + dd + ' ' + hh + ':' + min + ":" + sec;
                todayTest = mm + '/' + dd + '/' + yyyy;
                todayTest = new Date(todayTest);
                var dateString = arrFiltered[item].name;
                var dateParts = dateString.split("/");
                dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
                var match1 = arrFiltered[item].set[arrFiltered[item].set.length - 1].startGMT.match(/^(\d+)\/(\d+)\/(\d+) (\d+)\:(\d+)\:(\d+)$/);
                try {
                    var dateObject2 = match1[2] + '/' + match1[1] + '/' + match1[3] + ' ' + match1[4] + ':' + match1[5] + ':' + match1[6];
                    dateObject2 = new Date(dateObject2);
                } catch (e) {
                    console.log("erorr");
                }
                // console.log(arrFiltered[item].set[arrFiltered[item].set.length-1]);
                if (todayTest < dateObject) {
                    $("#latest-tips .center-container").append("<p class = 'started'>" + arrFiltered[item].name + "</p>");

                } else if (todayTest < dateObject2) {
                    $("#latest-tips .center-container").append("<p class = 'started'>" + arrFiltered[item].name + "</p>");
                } else {
                    $("#latest-tips .center-container").append("<p class = 'ended'>" + arrFiltered[item].name + "</p>");
                }
         
                var latestTipsCount = 0;
                for (var item1 in arrFiltered[item].set) {
                    if (latestTipsCount <= 20) {

                        latestTipsCount = latestTipsCount + 1;
                        latestTipsDetails[item] = arrFiltered[item].set[item1];

                        var statusClass = "";
                        var tipsterLink = "/Default.aspx?ID=" + latestTipsDetails[item].tipsterPageID + "";
                        var statGMTCorrectDate = new Date(toDateGMT(latestTipsDetails[item].startGMT)).setHours(new Date(toDateGMT(latestTipsDetails[item].startGMT)).getHours() - 24);
                        var statGMTCorrectDateSeconds = new Date(toDateGMT(latestTipsDetails[item].startGMT)).setHours(new Date(toDateGMT(latestTipsDetails[item].startGMT)).getHours());
                        var todayDateSeconds = new Date(today).setHours(new Date(today).getHours())
                        
                        if (statGMTCorrectDate > todayDateSeconds) {
                            var statusClass = "active";

                        } else {
                            var statusClass = "started";

                        }

                        if (latestTipsDetails[item].odd == "") {
                            latestTipsDetails[item].odd = "N/A";
                        }
                        if (latestTipsDetails[item].league == "") {
                            latestTipsDetails[item].league = "N/A";
                        }
                        if (latestTipsDetails[item].stake == "") {
                            latestTipsDetails[item].stake = "N/A";
                        }
                        if (latestTipsDetails[item].game == "") {
                            latestTipsDetails[item].game = "N/A";
                        }
                        if (latestTipsDetails[item].betOn == "") {
                            latestTipsDetails[item].betOn = "N/A";
                        }
                        if (latestTipsDetails[item].bookmakerLogo == "") {
                            latestTipsDetails[item].bookmakerLogo = "N/A";
                            var bookmakerLogo = "N/A";
                        } else if (latestTipsDetails[item].bookmakerUrl == "") {
                            var bookmakerLogo = "<img src = '" + latestTipsDetails[item].bookmakerLogo + "' alt='bookmaker-logo'>";
                        } else {
                            var bookmakerLogo = "<a href = /" + latestTipsDetails[item].bookmakerUrl + "><img src = '" + latestTipsDetails[item].bookmakerLogo + "' alt='bookmaker-logo'></a>";
                        }
                        
                        output += "<div class = 'row " + statusClass + "'>";
                        output += "<div class = 'col-4-tips-mobile'>";
                        output += "<div class = 'bookmaker-mobile'>";
                        output += "<h1 class='tipster-title-mobile'> "+ dateTranslate + ": " + latestTipsDetails[item].startGMT  +" </h1>";
                        output += "<h1>"+ bookmakerTranslate + ": " + latestTipsDetails[item].bookmakerName +"</h1>"; 
                        output += "</div>";
                       
                        output += "<div class='col col-tipster-name col-tipster-name-mobile'><a href = '" + origin + "/Default.aspx?ID=" + latestTipsDetails[item].TipsterPageId + "'>" + latestTipsDetails[item].tipster + "</a></div>";
                        if (latestTipsDetails[item].finalScore == "N/A") {

                            //console.log(latestTipsDetails[item]);
                            if (statGMTCorrectDate > todayDateSeconds) {
                                output += "<div class='col col-status col-mobile-status active-event event-open'><span class='status-tip-mobile'></span>Open to bet</div>";

                            } else {
                                if (statGMTCorrectDateSeconds < todayDateSeconds) {
                                    output += "<div class='col col-status col-mobile-status'><span class='status-tip-mobile'></span>IN PLAY</div>";
                                } else {
                                    output += "<div class='col col-status col-mobile-status event-started'><span class='status-tip-mobile'></span>Started</div>";
                                }
                            }
                        } else {
                            output += "<div class='col col-status col-mobile-status event-ended'><span class='status-tip-mobile'></span>Ended</div>";
                        }
                        output += "</div>";
                        output += "<div class = 'col-8-tips-mobile'>";
                        output += "<div class='col col-tipster-name'><span class='mobile-odds'>" + dateTranslate + ":</span>" + latestTipsDetails[item].startGMT + "</div>";

                        output += " <div class='col col-league-name'><span class='mobile-odds'>" + leagueTranslate + ":</span>" + latestTipsDetails[item].league + "</div>";


                        output += "<div class='col col-game-name'><span class='mobile-odds'>" + matchTranslate + ":</span>" + latestTipsDetails[item].game + "</div>";


                        output += "<div class='col col-stake'><span class='mobile-odds'>" + stakeTranslate + ":</span> " + latestTipsDetails[item].stake + "</div>";
                        output += "<div class='col col-odd'><span class='mobile-odds'>"+ oddTranslate +":</span>" + latestTipsDetails[item].odd + "</div>";
                        output += " <div class='col col-league-name col-league-name-mobile'><span class='mobile-odds'>" + leagueTranslate + ":</span>" + latestTipsDetails[item].league + "</div>";
                        output += "<div class='col col-bet'><a href = '/Default.aspx?ID=" + latestTipsDetails[item].PageId + "' title='bet-link'><span class='mobile-odds'>" + bettingTranslate + ":</span>" + latestTipsDetails[item].betOn + "</a></div>";
                        output += "<div class='col col-bookmaker'>" + latestTipsDetails[item].bookmakerName + "</div>";


                        if (latestTipsDetails[item].finalScore == "N/A") {

                            //console.log(latestTipsDetails[item]);
                            if (statGMTCorrectDate > todayDateSeconds) {
                                output += "<div class='col col-status active-event event-open'><span class='status-tip-mobile'></span>Open to bet</div>";

                            } else {
                                if (statGMTCorrectDateSeconds < todayDateSeconds) {
                                    output += "<div class='col col-status'><span class='status-tip-mobile'></span>IN PLAY</div>";
                                } else {
                                    output += "<div class='col col-status event-started'><span class='status-tip-mobile'></span>Started</div>";
                                }
                            }
                        } else {
                            output += "<div class='col col-status event-ended'><span class='status-tip-mobile'></span>Ended</div>";
                        }
                        output += "</div>";
                        output += "</div>";
                    }
                }
                $("#latest-tips .center-container").append(output);
                $(".latest-tips-overlay").removeClass("active")

            }
//Pagination tips
            if ($("#pagination-latest-tips").length) {
                var totalPages = $("#pagination-latest-tips").attr("data-total-pages");
                var urlRaw = window.location.href;
                var url = "";
                var urlSplit = "";
                 var urlPaginationRaw = window.location.href;
                  var urlPagination =  urlPaginationRaw.split("=");
          var currentPage = urlPagination[1];
          if(currentPage == undefined){
                 currentPage = "1";
             }
                if (urlRaw.indexOf("PageNum=") >= 0) {
                    urlSplit = urlRaw.split("?PageNum=");
                    url = urlSplit[0];
                } else {
                    url = urlRaw;
                }
        
                for (var i = 1; i <= totalPages; i++) {
                  if(i == currentPage){
                    $("#pagination-latest-tips").append("<div class = 'page-number curent-page slick-active'><a href ='" + url + "?PageNum=" + i + "'>" + i + "</a></div>")
                    }else{
                       $("#pagination-latest-tips").append("<div class = 'page-number'><a href ='" + url + "?PageNum=" + i + "'>" + i + "</a></div>")
                    }
                }
                $('#pagination-latest-tips').slick({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    prevArrow: '<button type="button" class="slick-prev" name="button-previous-slider"><i class="fa fa-chevron-left"></i></button>',
                    nextArrow: '<button type="button" class="slick-next" name="button-next-slider"><i class="fa fa-chevron-right"></i></button>'
                });
              $("#pagination-latest-tips .page-number").removeClass("slick-active");
               $("#pagination-latest-tips .page-number.curent-page").addClass("slick-active");
              
              $("#pagination-latest-tips .page-number.curent-page").prev().addClass("slick-active");
              $("#pagination-latest-tips .page-number.curent-page").next().addClass("slick-active");
         
            }

        }); 
    }
    $("#active-tips-list").click(function () {
        $("#latest-tips .row").removeClass("started");
        $("#latest-tips p[class = ended]").hide();
        var elemetVisibility = $("#latest-tips .row");
        console.log(elemetVisibility);
        if (elemetVisibility.hasClass("active") != true) {
            $("#latest-tips .message-col").css("display", "block")
        }

        if ($("#latest-tips .row.active").length <= 20) {
            $("#pagination-latest-tips").css("opacity", "0");
            ;
        }

    });
    $("#all-tips-list").click(function () {
        $("#latest-tips .message-col").css("display", "none")
        $("#latest-tips .row").addClass("started");
        $("#latest-tips p[class=ended]").show();
        $("#pagination-latest-tips").css("opacity", "1");
        ;
    });

// New Predictions Table
    if ($("#new-tips").length){
        function getNewPredictionsByLanguge(api) {
            var deferred = $.Deferred();

            var tipstersApi = $("body").attr("data-user-new-predictions");

            $.ajax({
                url: tipstersApi,
                type: 'GET',
                dataType: 'json'
            }).done(function (data) {
                //console.log("success");
                deferred.resolve(data);
            }).fail(function () {
                console.log("Error accessing User Details Endpoint...");
                deferred.reject("Error accessing User Details Endpoint...");
            });

            return deferred.promise();
        }

        $.when(getNewPredictionsByLanguge()).then(function (newestTipsDetails) {
            if ($("#new-tips").length) {
                for (var i = 0; newestTipsDetails.length >= i; i++) {
                    var pageItemTypeId = newestTipsDetails[i].pageItemID;
                    var predictionTitle = newestTipsDetails[i].game;
                    var stake = newestTipsDetails[i].stakeClean;
                    var odds = newestTipsDetails[i].odd;
                    var startGMT = newestTipsDetails[i].startGMTRaw;
                    var league = newestTipsDetails[i].league;
                    var category = newestTipsDetails[i].category;
                    var bookmakerLogo = newestTipsDetails[i].bookmakerLogo;
                    var dateAdded = newestTipsDetails[i].predictionDate;
                    var bettingPrediction = newestTipsDetails[i].betOn;
                    var tipsterEmail = newestTipsDetails[i].tipsterEmail;
                    var bookmakerName = newestTipsDetails[i].bookmakerName;
                    var fallowOnVIP = newestTipsDetails[i].fallowVIP;
                    var userID = newestTipsDetails[i].userID;
                    var tableRow = "";
                    tableRow += "<tr>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + pageItemTypeId + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + predictionTitle + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + stake + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + odds + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + startGMT + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + league + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + category + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div><img src='" + bookmakerLogo + "' ></div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + dateAdded + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + bettingPrediction + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + tipsterEmail + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + bookmakerName + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + fallowOnVIP + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><div>" + userID + "</div></div></td>";
                    tableRow += "<td>" + "<div class='p-10'><a class='table-link' href='/english/tipsters/prediction-form/approve-tips-form?FORM_ROW_ID=Id%3d" + pageItemTypeId + "&VIEW_ID=76'> APPROVE </a></div></td>";
                    tableRow += "</tr>";
                    $("#new-tips tbody").prepend(tableRow);

                }
            }
        });
    }
// Prev/Next page for articles

    function newsFeeds(api) {
        var deferred = $.Deferred();

        $.ajax({
            url: api,
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            //console.log("success");
            deferred.resolve(data);
        }).fail(function () {
            console.log("Error accessing User Details Endpoint...");
            deferred.reject("Error accessing User Details Endpoint...");
        });

        return deferred.promise();
    }


    if ($(".center-container_buttons-wrapper").length) {

        var previousLink = $(".prev-article");
        var nextLink = $(".next-article");


        var projectfeeds = $("body").attr("data-articles-feeds");

        $.when(newsFeeds(projectfeeds)).then(function (payload) {
            //console.log("BEFORE");
            //	console.log(payload);


            var dataset = payload.filter(function (obj) {
                return obj.isPromotion == "False";
            });
            //console.log("AFTER");
            //console.log(dataset);

            var currentProjectId = $(".center-container_buttons-wrapper").attr("data-id");

            var currentProjectSortOrder = dataset.filter(function (obj) {
                if (obj.isPromotion == "False") {
                    return obj.Url == currentProjectId;
                }

            })[0].sortOrder;


            var previousProject = dataset.filter(function (o) {
                return parseFloat(o.sortOrder) == parseFloat(currentProjectSortOrder) - 1;
            });


            var nextProject = dataset.filter(function (o) {
                return parseFloat(o.sortOrder) == parseFloat(currentProjectSortOrder) + 1;
            });


            if (previousProject.length > 0) {
                previousLink.attr("href", "/Default.aspx?ID=" + previousProject[0].Url);
                previousLink.find("span.prev-article-title").html(previousProject[0].ArticleTitle);


            } else {
                previousLink.css("visibility", "hidden");
            }

            if (nextProject.length > 0) {
                nextLink.attr("href", "/Default.aspx?ID=" + nextProject[0].Url);
                nextLink.find("span.next-article-title").html(nextProject[0].ArticleTitle);
            } else {
                nextLink.css("visibility", "hidden");
            }


        });

    }


// STERGEM?

    var oddWeGiveToClient = parseFloat($("#skypeBets_OddWeGiveToClient").val());
    var oddWeBetInAsia = parseFloat($("#skypeBets_OddWeBetInAsia").val());
    var stake = parseFloat($("#skypeBets_BetStake").val()); // stake
    var commissionAmountRaw = parseFloat($("#skypeBets_ComissionToDisplay").val()); // commission raw
    var commissionAmount = (commissionAmountRaw * stake) / 100;
    var balanceAfter = parseFloat($("#skypeBets_SkypeClientBalanceAfter").val()); // current balance


    var $memberProfitInput = $("#skypeBets_MemberProfit");
    var $agentProfitInput = $("#skypeBets_AgentProfit");
    var $balanceAfterSettlement = $("#skypeBets_BalanceAfterSettlement");


    $("select[id='skypeBets_BetResult']").on("change", function (event) {

        var currentValue = $(this).val();

        var clientOutput;
        var agentOutput;
        var balanceAfterSettlement;

        switch (currentValue) {


            case "Won":
                clientOutput = stake * oddWeGiveToClient - stake - commissionAmount;
                agentOutput = (oddWeBetInAsia - oddWeGiveToClient) * stake + commissionAmount;
                balanceAfterSettlement = balanceAfter + clientOutput + stake + commissionAmount;
                break;


            case "Half Won":
                clientOutput = (stake / 2) * oddWeGiveToClient - (stake / 2) - commissionAmount;
                agentOutput = (oddWeBetInAsia - oddWeGiveToClient) * (stake / 2) + commissionAmount;
                balanceAfterSettlement = balanceAfter + stake + clientOutput + commissionAmount;
                break;


            case "Lost":
                clientOutput = 0 - (stake + commissionAmount);
                agentOutput = stake + commissionAmount;
                balanceAfterSettlement = balanceAfter;
                break;


            case "Half Lost":
                clientOutput = stake / 2 - stake - commissionAmount;
                agentOutput = 0 + commissionAmount;
                balanceAfterSettlement = balanceAfter + clientOutput + stake + commissionAmount;

                break;


            case "Draw":
                clientOutput = 0 - commissionAmount;
                agentOutput = 0 + commissionAmount;
                balanceAfterSettlement = balanceAfter + clientOutput + stake + commissionAmount;
                break;

        }


        $memberProfitInput.val(Math.floor(clientOutput));
        $agentProfitInput.val(Math.round(agentOutput));
        $balanceAfterSettlement.val(Math.floor(balanceAfterSettlement));


        // console.log("CLIENT OUTPUT", clientOutput);
        /// console.log("AGENT OUTPUT", agentOutput);
        // console.log("SELECT VALUE" , $(this).val());
        // console.log("STAKE" , stake);
        //  console.log("COMMISSION" , commissionAmount);
        // console.log("ODD WE GIVE" , oddWeGiveToClient);
        //  console.log("ODD WE BET IN ASIA" , oddWeBetInAsia);
        // console.log("BALANCE" , balanceAfter);
        //  console.log("BALANCE AFTER SETTLEMENT" , $balanceAfterSettlement.val());

    });

// add text if there is no bets in table
    var tbody = $("#all-bets");
    var tableUnconfirmed = $(".main_table.add-new-bet");
    var tableConfirmed = $(".main_table.confirmation-bet");
    var tableSettled = $(".main_table.settlement-bet");
    var tableCrosshecked = $(".main_table.crosscheck-bet");

    if (tbody.children().length == 0) {
        tableUnconfirmed.html("<h3>No unconfirmed bets yet.</h3>");
    }

    if (tbody.children().length == 0) {
        tableConfirmed.html("<h3>No confirmed bets yet.</h3>");
    }

    if (tbody.children().length == 0) {
        tableSettled.html("<h3>No settled bets yet.</h3>");
    }

    if (tbody.children().length == 0) {
        tableCrosshecked.html("<h3>No crosschecked bets yet.</h3>");
    }


// disable stake input
//$("#skypeBets_BetStake").prop('disabled', true);


// Adding text above End Time input
    $("#skypeBets_GameEndTime").before('<span style="font-size: 10px;">Date/Time/AM or PM<span>');


    function validate() {
        var inputs = $(".form--wrapper_item2 input[type=text], .form--wrapper_item2 input[type=number], .form--wrapper_item3 input[type=text], .form--wrapper_item3 input[type=number]");

        inputs.each(function (index) {
            if ($(this).val() == "") {
                $(this).css('border-color', 'red');
                return false;
            } else {
                return true;
            }
        });
    }


// SUBMIT ADD NEW PAGE


    $("#validateFieldsSectionOne input").not("#currency").focusout(function (event) {

        if (event.currentTarget.value != "") {
            $(event.currentTarget).css("border-color", "");
            $(event.currentTarget).siblings("span").remove();
        }
    });


    $("#validateFieldsSectionTwo input").not("#skypeBets_BetNotes").focusout(function (event) {

        if (event.currentTarget.value != "") {
            $(event.currentTarget).css("border-color", "");
            $(event.currentTarget).siblings("span").remove();
        }
    });


    $(".submit--wrapper input[type='submit']").on("click", function (event) {
        event.preventDefault();

        var counter = 0;

        var firstSectionInputFields = $("#validateFieldsSectionOne input").not("#currency");
        var secondSectionInputsFields = $("#validateFieldsSectionTwo input").not("#skypeBets_BetNotes");


        firstSectionInputFields.map(function (index, el) {
            if ($(el).val() == "") {
                counter++;
                $(el).css("border-color", "red");

                if (!$(el).siblings("span").length) {
                    $(el).before("<span style='color: #c20000'>Please fill this field</span>");
                }


            } else {
                $(el).css("border-color", "");

                // console.log($(el).siblings("span"))

                $(el).siblings("span").remove();
            }

        });


        secondSectionInputsFields.map(function (index, el) {
            if ($(el).val() == "") {
                counter++;
                $(el).css("border-color", "red");

                if (!$(el).siblings("span").length) {
                    $(el).before("<span style='color: #c20000'>Please fill this field</span>");
                }

            } else {
                $(el).css("border-color", "");
                $(el).siblings("span").remove();
            }

        });

        // everything is valid - make ajax call to update balance
        if (counter == 0) {
            var $that = $(this);

            var obj = {};

            obj.AddressId = $("#SkypeAccountID").val();
            obj.FieldName = "balance";
            obj.FieldValue = $("#skypeBets_SkypeClientBalanceAfter").val();

            var dataToSend = JSON.stringify(obj);


            $.when(sendDataToService(dataToSend)).then(function (result) {

                console.log("submitted info to the service");
                $that.closest("form").submit();
            });

        }


    });


// SUBMIT CROSSCHECK PAGE

    $(".submit--wrapper_crosschecked input[type='submit']").on("click", function (event) {
        event.preventDefault();

        var $that = $(this);


        var obj = {};


        obj.AddressId = $("#skypeBets_SkypeAccountID").val();
        obj.FieldName = "balance";
        obj.FieldValue = $("#skypeBets_BalanceAfterSettlement").val();
        //console.log(obj.FieldValue);

        var dataToSend = JSON.stringify(obj);


        // console.log(dataToSend);

        $.when(sendDataToService(dataToSend)).then(function (result) {
            console.log("result", result);
            console.log("submitted info to the service");
            $that.closest("form").submit();
        });

    });


    $(".button-submit").on("click", function (e) {
        e.preventDefault();

        var obj = {};


        obj.AddressId = $("#SkypeAccountID").val();
        obj.FieldName = "balance";
        obj.FieldValue = $("#skypeBets_SkypeUserBalance").val();

        var dataToSend = JSON.stringify(obj);


        $.when(sendDataToService(dataToSend)).then(function (result) {

        });


        /*
        $.ajax({
        url: '/Services/AddressUpdate.ashx',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(obj),
        async:false,
        success: function( data)
        {
         if( data != null)
           {
              if (data.success == false)
              {
                  alert( data.message)
              }
           }
         },
        error: function( data )
          {

          }
        }); */


        //{ "AddressId": 330, "FieldName": "balance" , "FieldValue": 100.00}

        /* $.ajax({
             url: "/Services/AddressUpdate.ashx",
             type: 'POST',
             contentType: 'application/json',
             data: JSON.stringify(obj)
         })
         .done(function(response) {
           console.log("success");

         })
         .fail(function(error) {
             console.log(error);
         }); */
    });


//Events

//Submit Event

// $(".submit--wrapper input").on("click", function(e){
//   e.preventDefault();
//    var obj1 = {};
//    var obj2 = {};

//     $(".form--wrapper_item2 input, .form--wrapper_item2 select, .form--wrapper_item3 input, .form--wrapper_item3 select").each(function(){
//    obj1[$(this).attr("name")] = $(this).val();
//     });
//    $("#skypeBets_SkypeClientBalanceAfter").each(function(){
//     obj2[$(this).attr("name")] = $(this).val();
//    });
//   console.log(obj1, obj2);
//    $.when(postInfo1(obj1), postInfo2(obj2)).then(function(){

//redirect
//      window.location.href = "/Default.aspx?ID=3299";
//     alert("ok");

//   });
//   });


// Users endpoint implementation
    if($("#NewBetCustomerPicker").length >= 1){
        $.when(getUsers()).then(function (users) {

            //console.log(users);

            // build options based on username and set value to userId
            var targetWrapper = $("#NewBetCustomerPicker");
            var wrapper = "";
            wrapper += "<option selected disabled>Please select a client...</option>";

            // map users and create options with userId as value , and user name as option name
            users.map(function (object, index) {
                wrapper += '<option value="' + object.userId + '">' + object.fullName + '</option>';
            });


            targetWrapper.append(wrapper);

            $("#NewBetCustomerPicker").on("change", function () {
                $(".select--client-msg").addClass("d-none");
                $(".alert-msg").remove();
                $("#skypeBets_BetStake").css({
                    'border-color': '#d1d1d1'
                });
                $("#iframeloading").show();
                $("#skypeBets_BetStake").prop('disabled', false);

                var selectValue = $(this).val();

                //console.log(selectValue);


                $.when(getUsersDetails()).then(function (userDetails) {
                    $("#iframeloading").hide();
                    $(".main_wrapper-inner").addClass("d-block");
                    var currentUserInfo = userDetails.filter(function (obj) {
                        return obj.userId == selectValue
                    })[0];

                    // calculating available to bet

                    var balance = parseInt(currentUserInfo.SkypeAccountStartingBalance);

                    var comission = (parseInt(currentUserInfo.SkypeAccountCommission) / 100) * balance;
                    var availableToBet = Math.round(balance - comission);
                    var comissionToDisplay = parseInt(currentUserInfo.SkypeAccountCommission);

                    $(".customerInfoTable #Name").html(currentUserInfo.SkypeAccountUserName);
                    $(".customerInfoTable #Commision").html(currentUserInfo.CommissionToBeDisplayed);
                    $(".customerInfoTable #Balance").html(currentUserInfo.SkypeAccountStartingBalance);
                    $(".customerInfoTable #AvailableToBet").html(availableToBet);
                    $(".customerInfoTable #Currency").html(currentUserInfo.SkypeAccountCurrency);


                    $("#skypeBets_SkypeUserName").val(currentUserInfo.SkypeAccountUserName);
                    $("#skypeBets_SkypeUserBalance").val(currentUserInfo.SkypeAccountStartingBalance);
                    $("#skypeBets_SkypeUserID").val(currentUserInfo.userId);
                    $("#skypeBets_BetCurrency").val(currentUserInfo.SkypeAccountCurrency);
                    $("#currency").val(currentUserInfo.SkypeAccountCurrency);
                    $("#SkypeAccountID").val(currentUserInfo.SkypeAccountID);
                    $("#skypeBets_SkypeAccountID").val(currentUserInfo.SkypeAccountID);


                    $("#skypeBets_SkypeUserComision").val(comission);
                    $("#skypeBets_SkypeUserAvailableToBet").val(availableToBet);
                    $("#skypeBets_ComissionToDisplay").val(comissionToDisplay);


                    // console.log("available to bet", availableToBet);
                    // console.log("comissionTodisplay", comissionToDisplay);
                })

            });

        });
    }

// Calculate final stake when user focuses out from stake input

    $("#skypeBets_BetStake").on("change", function () {

        var balanceUserAvailable = parseFloat($("#skypeBets_SkypeUserAvailableToBet").val());
        var stakeValue = parseFloat($(this).val());


        if (stakeValue <= balanceUserAvailable) {

            var out = stakeValue - ((stakeValue * 3) / 100);

            var comisionString = $("#Commision").text()
            var comissionNumber = comisionString.replace(/%/g, "");
            var balance = parseFloat($("#skypeBets_SkypeUserBalance").val());
            var comission = parseFloat($("#skypeBets_SkypeUserComision").val());
            var balanceAfter = balance - ((stakeValue - (stakeValue / comissionNumber)) + stakeValue);
            var comissionAmount = Math.round((comissionNumber / 100) * parseInt($("#skypeBets_BetStake").val()));


            $("#skypeBets_StakeFinal").val(Math.round(out));
            $("#skypeBets_SkypeClientBalanceAfter").val(Math.round(balanceAfter));

            $("#skypeBets_BetStake").css({
                'border-color': '#d1d1d1'
            });
            $("#skypeBets_ComissionAmount").val(comissionAmount);


            $("#skypeBets_BetStake").siblings(".alert-msg").remove();


        } else {


            $("#skypeBets_BetStake").val('');
            $("#skypeBets_BetStake").siblings(".alert-msg").remove();
            $("#skypeBets_BetStake").after('<p class="alert-msg" style="color: #c20000; text-transform: uppercase;">Insufficient funds !</p>').css({
                'border-color': 'red',
                'transition': 'all 0.2s ease-in'
            });
        }


    });


// END Users endpoint implementation

    $("#AccessUser_Instant_Messenger").change(function () {
        if ($("#AccessUser_Instant_Messenger").val() != "Select") {
            $("#Instant_Messenger_ID").removeClass("hidden");
        } else {
            $("#Instant_Messenger_ID").addClass("hidden");
        }

    });


    $("#open-first-step-button").click(function () {

        var currency = $("#UserManagement_Form_Currency");
        var age = $("#ageRequirement");
        var terms = $("#termsRequirement");

        if (currency.val() == "Select") {
            currency.addClass("red-border");
        }

        if (currency.val() != "Select" && age.prop('checked') && terms.prop('checked')) {

            $(".open-first-step").addClass("hidden");
            $(".open-second-step").removeClass("hidden");
        }


    });


    $("#open-second-step-button-back").click(function () {
        $(".open-second-step").addClass("hidden");
        $(".open-first-step").removeClass("hidden");
    });


    $("#open-second-step-button").click(function () {

        var email = $("#UserManagement_Form_Email");
        var confirmEmail = $("#UserManagement_Form_ConfirmEmail");
        var firstName = $("#UserManagement_Form_FirstName");
        var lastName = $("#UserManagement_Form_LastName");


        if (email.val() == confirmEmail.val() && firstName.val() && lastName.val()) {

            $(".open-second-step").addClass("hidden");
            $(".open-third-step").removeClass("hidden");

        }


    });


    $("#open-third-step-button-back").click(function () {
        $(".open-third-step").addClass("hidden");
        $(".open-second-step").removeClass("hidden");
    });


    $('#SingleMultipleaccount8 , #SingleMultipleaccount9').click(function () {

        if ($('#SingleMultipleaccount8').is(':checked')) {

            $(".single-account-container").removeClass('hidden');
            $(".multiple-account-container").addClass('hidden');
        }

        if ($('#SingleMultipleaccount9').is(':checked')) {
            $(".multiple-account-container").removeClass('hidden');
            $(".single-account-container").addClass('hidden');
        }


    });

    $(".is-submenu:after").click(function (e) {
        e.preventDefault();


    });


//announcement bar

    var width = $('.ticker-text').width(),
        containerwidth = $('.ticker-container').width(),
        left = containerwidth;
    $(document).ready(function (e) {
        function tick() {
            if (--left < -width) {
                left = containerwidth;
            }
            $(".ticker-text").css("margin-left", left + "px");
            setTimeout(tick, 8);
        }

        tick();

    });


// Users details that help to construct add new skype bet customer dropdown
    function getUsers() {
        var deferred = $.Deferred();

        var userDetails = $("body").attr("data-users-feed");
        // console.log("AJAXDATA",data);
        $.ajax({
            url: userDetails,
            type: 'GET',
        })
            .done(function (response) {
                // console.log("success");
                deferred.resolve(response);
            })
            .fail(function (error) {
                deferred.reject("Failed loading content from" + url);
                // console.log("error");
            });
        return deferred.promise();

    }

    function fakeDeferred() {
        var deferred = $.Deferred();
        var r = false;

        if ($('#id').length > 0) {
            r = true;
            deferred.resolve(r);
        } else {
            deferred.reject(r);
        }

        return deferred.promise();


    }

    function postInfo1(obj) {

        var deferred = $.Deferred();
        var currentLink = window.location.href;
        $.ajax({
            url: currentLink,
            type: 'POST',
            data: obj
        })
            .done(function (response) {
                // console.log("success");
                console.log("call1");
                deferred.resolve(response);
            })
            .fail(function (error) {
                deferred.reject("Failed loading content from" + url);
                // console.log("error");
            });
        return deferred.promise();
    }


    function postInfo2(obj) {

        var deferred = $.Deferred();
        var currentLink2 = window.location.href;
        $.ajax({
            url: currentLink2,
            type: 'POST',
            data: obj
        })
            .done(function (response) {
                // console.log("success");
                console.log("call2");
                deferred.resolve(response);
            })
            .fail(function (error) {
                deferred.reject("Failed loading content from" + url);
                // console.log("error");
            });
        return deferred.promise();

    }


    function sendDataToService(objToSend) {
        var deferred = $.Deferred();


        $.ajax({
            url: '/Services/AddressUpdate.ashx',
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: objToSend

        }).done(function (response) {
            deferred.resolve(response);
            // console.log(response);
        }).fail(function (error) {
            deferred.reject("error posting user data to service", error);
            // console.log(error);
        });

        return deferred.promise();

    }


    function getUsersDetails() {
        var deferred = $.Deferred();

        var userFeedDetails = $("body").attr("data-users-feed-details");
        // console.log("AJAXDATA",data);
        $.ajax({
            url: userFeedDetails,
            type: 'GET',
        })
            .done(function (response) {
                // console.log("success");
                deferred.resolve(response);
            })
            .fail(function (error) {
                deferred.reject("Failed loading content from" + url);
                // console.log("error");
            });
        return deferred.promise();

    }

// Accounts Lists Start

// Filter event
    $("#AccountFilter").click(function () {
        var bookmaker = $('#AccountBookmaker').val();
        var search = $('#AccountSearch').val();
        var requestId = $("#AccountContainer").attr('data-pageid');
        var pageSize = 50;
        var pageNumber = 1;
        var requestType;

        if (requestId == 1901) {
            requestType = "UnallocatedAccounts";
        } else if (requestId == 1881) {
            requestType = "AllocatedAccounts";
        } else if (requestId == 1876) {
            requestType = "FreeAccounts";
        } else {
            requestType = "AccountsReadyToBeRecycled"
        }


        var sendObj = {
            "RequestType": requestType,
            "Bookmaker": bookmaker,
            "Search": search,
            "PageNumber": pageNumber,
            "PageSize": pageSize
        };


        requestAPI(sendObj);
    });

//Reset event

    $("#AccountReset").click(function () {
        var bookmaker = "";
        var search = "";
        var requestId = $("#AccountContainer").attr('data-pageid');
        var pageSize = 50;
        var pageNumber = 1;
        var requestType;

        $('#AccountBookmaker').val("");
        $('#AccountSearch').val("");


        if (requestId == 1901) {
            requestType = "UnallocatedAccounts";
        } else if (requestId == 1881) {
            requestType = "AllocatedAccounts";
        } else if (requestId == 1876) {
            requestType = "FreeAccounts";
        } else {
            requestType = "AccountsReadyToBeRecycled"
        }


        var sendObj = {
            "RequestType": requestType,
            "Bookmaker": bookmaker,
            "Search": search,
            "PageNumber": pageNumber,
            "PageSize": pageSize
        };


        requestAPI(sendObj);
    });


//Edit event

    $("body").on("click", "#EditAccountButton", function () {

        var accountId = getParameterByName('AccountId');
        var password = $('#AccountPasswordValue').val();
        var freeAccount = $('#FreeAccountCheck');
        var freeAccountBool;

        if (freeAccount.is(':checked')) {
            freeAccountBool = true;
        } else {
            freeAccountBool = false;
        }

        var editObj = {
            "Id": accountId,
            "Password": password,
            "FreeAccount": freeAccountBool

        }


        requestAPIEdit(editObj);
        window.location.href = "http://bet.dotfusion.ro/Default.aspx?ID=1886&Purge=True";
    });

//Request API


    function requestAPI(sendObj) {


        $.ajax({
            url: '/Services/AccountInfo.ashx',
            type: 'POST',
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(sendObj)
        })
            .done(function (response) {

                console.log(response);
                renderRows(response.Results)
            })
            .fail(function (error) {
                console.log(error);
            });


    }


    function requestAPIDetail(sendObj) {


        $.ajax({
            url: '/Services/AccountDetail.ashx',
            type: 'POST',
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(sendObj)
        })
            .done(function (response) {
                console.log(response);
                renderDetail(response)
            })
            .fail(function (error) {
                console.log(error);
            });


    }


    function requestAPIEdit(sendObj) {


        $.ajax({
            url: '/Services/AccountUpdate.ashx',
            type: 'POST',
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(sendObj)
        })
            .done(function (response) {

                console.log(response);

            })
            .fail(function (error) {
                console.log(error);
            });


    }


//render functions
    function renderRows(arr) {

        var requestId = $("#AccountContainer").attr('data-pageid');


        var output = "";


        if (requestId == 1901) {


            arr.map(function (o) {

                output += '<div class="grid">';
                output += '<div class="grid__col-md-1 grid__col-sm-12 grid__col-xs-12"><strong>' + o.Bookmaker + '</strong></div>';
                output += '<div class="grid__col-md-1 grid__col-sm-12 grid__col-xs-12"><strong>' + o.Currency + '</strong></div>';
                output += '<div class="grid__col-md-2 grid__col-sm-12 grid__col-xs-12"><strong>' + o.AllocatedTo + '</strong></div>';


                if (o.ManualAllocation == true) {
                    output += '<div class="grid__col-md-2 grid__col-sm-12' +
                        ' grid__col-xs-12"><a' +
                        ' href="/Default.aspx?ID=30942&Purge=True&AccountId=' + o.AddressId + '"><strong>Allocate Account</strong></a></div>';
                    output += '</div>'
                }


            });
        } else if (requestId != 1886) {


            arr.map(function (o) {

                output += '<div class="grid">';
                output += '<div class="grid__col-md-1 grid__col-sm-12 grid__col-xs-12"><strong>' + o.Bookmaker + '</strong></div>';
                output += '<div class="grid__col-md-1 grid__col-sm-12 grid__col-xs-12"><strong>' + o.Currency + '</strong></div>';
                output += '<div class="grid__col-md-2 grid__col-sm-12 grid__col-xs-12"><strong>' + o.Username + '</strong></div>';
                output += '<div class="grid__col-md-2 grid__col-sm-12 grid__col-xs-12"><strong>' + o.Password + '</strong></div>';
                output += '<div class="grid__col-md-2 grid__col-sm-12 grid__col-xs-12"><strong>' + o.SecurityQuestion + '</strong></div>';
                output += '<div class="grid__col-md-2 grid__col-sm-12 grid__col-xs-12"><strong>' + o.SecurityQuestionAnswer + '</strong></div>';
                output += '<div class="grid__col-md-2 grid__col-sm-12 grid__col-xs-12"><strong>' + o.AllocatedTo + '</strong></div>';
                output += '</div>'

            });

        } else {


            arr.map(function (o) {

                output += '<div class="grid">';
                output += '<div class="grid__col-md-1 grid__col-sm-12 grid__col-xs-12"><strong>' + o.Bookmaker + '</strong></div>';
                output += '<div class="grid__col-md-1 grid__col-sm-12 grid__col-xs-12"><strong>' + o.Currency + '</strong></div>';
                output += '<div class="grid__col-md-2 grid__col-sm-12 grid__col-xs-12"><strong>' + o.Username + '</strong></div>';
                output += '<div class="grid__col-md-2 grid__col-sm-12 grid__col-xs-12"><strong>' + o.Password + '</strong></div>';
                output += '<div class="grid__col-md-2 grid__col-sm-12 grid__col-xs-12"><strong>' + o.SecurityQuestion + '</strong></div>';
                output += '<div class="grid__col-md-2 grid__col-sm-12 grid__col-xs-12"><strong>' + o.SecurityQuestionAnswer + '</strong></div>';
                output += '<div class="grid__col-md-2 grid__col-sm-12 grid__col-xs-12"><a href="/Default.aspx?ID=1936&Purge=True&AccountId=' + o.Id + '"><strong>Edit Account</strong></a></div>';
                output += '</div>'

            });


        }

        $("#AllocatedAccounts").empty();
        $("#AllocatedAccounts").html(output);

    }

    function renderDetail(obj) {

        var output = "";


        output += '<p>Bookmaker: ' + obj.Bookmaker + '</p>';
        output += '<p>Currency: ' + obj.Currency + '</p>';
        output += '<p>Username: ' + obj.Username + '</p>';
        output += '<div class="form__field-group" id="EditAccountPassword"> <label>Password:</label> <input type="text" id="AccountPasswordValue" value="' + obj.Password + '"> </div> ';
        output += '<p>Security Question: ' + obj.SecurityQuestion + '</p>';
        output += '<p>Security Answer: ' + obj.SecurityQuestionAnswer + '</p>';
        output += '<div class="form__field-group termsConditions"> <label>Free account</label> <input id="FreeAccountCheck" type="checkbox"> </div>';
        output += '<button type="button" class="btn btn--primary dw-mod btn-disabled" id="EditAccountButton" disabled>Save changes</button> ';

        $("#AccountEdit").empty();
        $("#AccountEdit").html(output);
    }


//render functions END

//Edit button disable


    $("body").on("click", "#FreeAccountCheck", function () {


        var freeAccount = $('#FreeAccountCheck');
        var saveButton = $('#EditAccountButton');


        if (freeAccount.is(':checked')) {
            saveButton.removeClass('btn-disabled');
            saveButton.removeAttr('disabled');
        } else {
            saveButton.addClass('btn-disabled');
            saveButton.prop('disabled', true);
        }

    });


//compose list view object
    var requestId = $("#AccountContainer").attr('data-pageid');
    var requestType;
    if (requestId == 1901) {
        requestType = "UnallocatedAccounts";
    } else if (requestId == 1881) {
        requestType = "AllocatedAccounts";
    } else if (requestId == 1876) {
        requestType = "FreeAccounts";
    } else {
        requestType = "AccountsReadyToBeRecycled"
    }
    var initialObj = {
        "RequestType": requestType,
        "Bookmaker": "",
        "Search": "",
        "PageNumber": 1,
        "PageSize": 50
    }
//compose detail view object
    var accountId = getParameterByName('AccountId');
    var detailObj = {
        "AccountId": accountId
    }
//initial Requests
    var accountContainer = $('#AccountContainer');
    var accountEdit = $('#AccountEdit');
    if (accountContainer.attr("data-pageid") == 30942) {


        var addressId = getParameterByName("AccountId");
        var redirectPage = "/Default.aspx?ID=" + $("#AccountContainer").attr("data-pageid-redirect");


        $(".cancel-allow-account").on("click", function (e) {
            window.location.href = redirectPage;
        });


        $(".continue-allow-account").on("click", function (e) {


            if ($("#Username").val() == "" || $("#Password").val() == "") {
                e.preventDefault();
                alert("Username or password cannot be empty.");
                return;
            }

            var objToSend = {
                AddressId: parseInt(addressId),
                Username: $("#Username").val(),
                Password: $("#Password").val(),
                SecurityQuestion: $("#SecretQuestion").val(),
                SecurityQuestionAnswer: $("#SecretQuestionAnswer").val()
            };


            // this service worker will return an error each time because the
            // return type of the data is not set to json
            $.ajax({
                url: "/Services/AccountCreate.ashx",
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(objToSend)
            }).done(function (response) {

            }).fail(function (error) {
                console.log(error)
                window.location.href = redirectPage;
            });


        });


    } else {
        if (accountContainer.length) {
            requestAPI(initialObj);
        }
        if (accountEdit.length) {
            requestAPIDetail(detailObj);
        }

    }
// Accounts Lists End
// GetParameter function
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    
    $(".overlay-master").removeClass("active");
});

function requestAPICreate(obj) {
    var deferred = $.Deferred();
    $.ajax({
        url: "/Services/AccountCreate.ashx",
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(obj)
    }).done(function (response) {
        deferred.resolve(response);

        alert("SOMETHING....")
    }).fail(function (error) {
        deferred.reject("error create account service...");
    });
    return deferred.promise();
}

//GO back function
function goBack() {
    window.history.back();
}


$(document).ready(function () {
    $(".menu__item--horizontal a:contains('Admin Area')").addClass("showNotifications");
    $(".showNotifications").append("<span class='admin-notifications'></span>")
    $(".showNotifications").append("<span class='admin-notifications-message'></span>")
    $( ".mobile-nav-trigger-button" ).click(function() {
        if($(this).hasClass('active')){

            $(this).removeClass("active")
        }else{
            $(this).addClass("active")
        }
      
    });
    
});


//calculate extra fee 1 value

//calculate extra fee 2 value

//Tabs Animation for user management
$(function () {
    $(".user-profile-page .header-tabs div").on("click", function (event) {
        var tabNumber = $(this).attr("data-index-tab");
        $(".content-tabs div").removeClass("active");
        $(".header-tabs div").removeClass("active");
        $(this).addClass("active");
        if (tabNumber == 1) {
            $(".profile-user-information").addClass("active")
        } else {
            if (tabNumber == 2) {
                $(".profile-payment-information").addClass("active")
            } else {
                if (tabNumber == 3) {
                    $(".profile-betting-accounts-information").addClass("active")
                } else {
                    $(".profile-charges-and-feed-information").addClass("active")
                }
            }
        }
    });


});
//Date and time on closing account
$(function () {
    $("#date_of_opening").change(function () {
        var dateRaw = $(this).val();
        var date = moment(dateRaw).format('D/MM/YYYY hh:mm:ss');
        $("#user_closed_accounts_Date_of_opening").val(date);
    });
    $("#date_of_closing").change(function () {
        var dateRaw = $(this).val();
        var date = moment(dateRaw).format('D/MM/YYYY hh:mm:ss');
        $("#user_closed_accounts_Date_of_closing").val(date);
    });
});
//Tabs Animation for user management
$(function () {
    $(".payment-type select").change(function () {
        $(".payment-methods-form-content .payment-method-type").addClass("hidden");
        var value = $(this).val();
        if (value == "Neteller") {

            $(".neteller-type").removeClass("hidden");
        }
        if (value == "Skrill") {

            $(".skrill-type").removeClass("hidden");
        }
        if (value == "Ecopayz") {

            $(".ecopayz-type").removeClass("hidden");
        }
        if (value == "Bank_account") {

            $(".bank-type").removeClass("hidden");
        }
        if (value == "Crypto") {

            $(".crypto-type").removeClass("hidden");
        }
    });
    $('#Admin_Payment_Methods_Crypto_currency').select2();
    $('.close-account-form #user_closed_accounts_Currency').select2();
});
$(function () {
    $("#select-exception-users-form").change(function () {
        var selectValue = $(this).val();

        function getSelectedException(api) {
            var deferred = $.Deferred();
            var globalAccountsApiRaw = $("body").attr("data-exceptions-for-user-feed");
            var globalAccountsApi = globalAccountsApiRaw + "&ExceptionID=" + selectValue;
            $.ajax({
                url: globalAccountsApi,
                type: 'GET',
                dataType: 'json'
            }).done(function (data) {
                //console.log("success");
                deferred.resolve(data);
            }).fail(function () {
                console.log("Error accessing User Details Endpoint...");
                deferred.reject("Error accessing User Details Endpoint...");
            });
            return deferred.promise();
        }

        $.when(getSelectedException()).then(function (exception) {
            $("#Exception_Form_for_Users_Name").val(exception[0].Name)
            $("#Exception_Form_for_Users_Value").val(exception[0].Value)
            $("#Exception_Form_for_Users_Value_for_less_then_min").val(exception[0].ValueMin);
            if (exception[0].IsPercent == "True") {
                $("#Exception_Form_for_Users_Is_Procent").attr("value", "True");
                $("#Exception_Form_for_Users_Is_Procent").attr("checked", "checked");
            } else {
                $("#Exception_Form_for_Users_Is_Procent").attr("value", "False");
                $("#Exception_Form_for_Users_Is_Procent").removeAttr("checked");
            }
            if (exception[0].ValueMinIsPercent == "True") {
                $("#Exception_Form_for_Users_Value_for_less_then_min_Is_Procent").attr("value", "True");
                $("#Exception_Form_for_Users_Value_for_less_then_min_Is_Procent").attr("checked", "checked");
            } else {
                $("#Exception_Form_for_Users_Value_for_less_then_min_Is_Procent").attr("value", "False");
                $("#Exception_Form_for_Users_Value_for_less_then_min_Is_Procent").removeAttr("checked");
            }
            $("#Exception_Form_for_Users_Notes").val(exception[0].Notes);

        });
    })
})
$(document).ready(function () {
  
    if ($(".details-errors-wrapper").length) {
        var errorsNumber = $(".details-errors-wrapper .grid__col-sm-12 p").length;
        if (errorsNumber == 0) {
            $(".details-errors-wrapper").addClass("hidden");
        }
        $(".details-errors-wrapper h3").append("<span>: " + errorsNumber + "</span>");
        $(".details-errors-wrapper h3").click(function () {
            $(".details-errors-wrapper .details-errors").toggle(300, function () {
            });
        });
    }

});
$(function () {
  
    //Articles section homepage 2 to 3 columns
    if ($(".sidebar-section-wrapper-homepage").length) {

        if ($(".tips-sidebar-homepage").length == 0) {
            $(".sidebar-section-wrapper-homepage .grid__col-md-8 .grid__col-sm-6").addClass("grid__col-sm-4");
            $(".sidebar-section-wrapper-homepage .grid__col-md-8 .grid__col-sm-6").addClass("grid__col-md-4");
            $(".sidebar-section-wrapper-homepage .grid__col-md-8 .grid__col-sm-6").addClass("grid__col-md-6");
            $(".sidebar-section-wrapper-homepage .grid__col-md-8 .grid__col-sm-6").addClass("grid__col-sm-6");
            $(".sidebar-section-wrapper-homepage .grid__col-md-8").addClass("grid__col-md-12");

            $(".sidebar-section-wrapper-homepage .grid__col-md-8").removeClass("grid__col-md-8");

        }
    }
});
//Tabs on tipster page on mobile
//show hide deposit notes area of details
$(function () {
    $("#mobile-tipster-tabs .nav-tabs a").on("click", function (event) {

        var dataId = $(this).attr("aria-controls");
        console.log("#" + dataId + "")
        $("#mobile-tipster-tabs .tab-pane").removeClass("active");
        $("#mobile-tipster-tabs .nav-item").removeClass("active");
        $("#mobile-tipster-tabs #" + dataId + "").addClass("active");


    });
});

function getNewPredictionsByMatch(api) {
    var deferred = $.Deferred();

    var predictionApi = $("#predictionsListResults").attr("data-json-feed");

    $.ajax({
        url: predictionApi,
        type: 'GET',
        dataType: 'json'
    }).done(function (data) {
        //console.log("success");
        deferred.resolve(data);
    }).fail(function () {
        console.log("Error accessing User Details Endpoint...");
        deferred.reject("Error accessing User Details Endpoint...");
    });

    return deferred.promise();
}
$( document ).ready(function() {
  //footer animation 
  if($("#footernavigation").length){
    $('#footernavigation .is-dropdown').append('<i class="fa fa-chevron-down"></i>');
    $( "#footernavigation .is-dropdown i" ).click(function() {
       $(this).prev().toggle();
      if(!$(this).hasClass("rotate")){
          $(this).addClass("rotate");
         }else{
           $(this).removeClass("rotate");
         }
    
   });
    
  }
 
  
});
jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.wheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("wheel", handle, { passive: true });
    }
};
jQuery.event.special.mousewheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("mousewheel", handle, { passive: true });
    }
};