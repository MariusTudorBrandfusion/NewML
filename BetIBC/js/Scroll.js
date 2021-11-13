var Scroll = function () { }

document.addEventListener("DOMContentLoaded", function (event) {
    var ajaxContainer = document.getElementsByClassName("js-ajax-container");

    if (ajaxContainer.length > 0) {
        for (var i = 0; i < ajaxContainer.length; i++) {
            ajaxContainer[i].addEventListener('contentLoaded', function (e) {
                Scroll.SetPosition();
                Scroll.SetPagePosition();
            }, false);
        }
    }

    Scroll.SetPagePosition();
});

Scroll.prototype.SavePosition = function (e) { 
    e.preventDefault();

    var url = window.location.href;

    var seperator = "?";
    if (url.indexOf("?") != -1) {
        seperator = "&";
    }

    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    if (Scroll.getURLParameter("ScrollPos")) {
        url = url.replace(/\bScrollPos=[^&#]+/g, "ScrollPos=" + Math.round(scrollPos));
    } else {
        url = window.location + seperator + "ScrollPos=" + Math.round(scrollPos);
    }
    
    history.replaceState(null, null, url);

    window.location.href = e.currentTarget.getAttribute("href");
}

Scroll.prototype.SetPosition = function () {
    var scrollPos = Scroll.getURLParameter("ScrollPos");

    if (scrollPos != null) {
        window.scroll(0, scrollPos);
    }
}

Scroll.prototype.SetPagePosition = function () {
    if (document.getElementById("page").classList.contains("js-page-pos")) {
        var topHeight = document.getElementById("top").clientHeight;
        document.getElementById("page").style.marginTop = topHeight + "px";
    }
}

Scroll.prototype.getURLParameter = function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}


var Scroll = new Scroll();