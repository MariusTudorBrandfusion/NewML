﻿
var Facets = function () { }

Facets.prototype.UpdateFacets = function (facet, catalogPageId) {
    var url = window.location.search;
    var path = window.location.pathname;
    var catalogPage = "/Default.aspx?ID=" + catalogPageId;

    url = url.replace(/\bPageNum=[^&#]+/g, "PageNum=1");
    url = url.replace(/\bpagesize=[^&#]+/g, "pagesize=30");
    url = url.replace(/\bScrollPos=[^&#]+/g, "ScrollPos=0");

    if (facet.tagName == 'SELECT') {
        facet = facet.options[facet.selectedIndex];
    }

    var name = facet.getAttribute("name");
    var value = facet.getAttribute("value");

    if (facet.checked || facet.getAttribute("data-check") == "") {
        url = Facets.AddFacetToUrl(url, name, value);

        facet.setAttribute("data-check", "checked");
        facet.classList.add("checked");
    } else {
        url = Facets.RemoveFacetFromUrl(url, name, value);

        facet.setAttribute("data-check", "");
        facet.classList.remove("checked");
    }

    url = url.replace(/#/g, "%23");

    var browserUrl = path + url;
    history.pushState(null, null, browserUrl);

    var jsonUrl = catalogPage + url.replace("?", "&") + "&feedType=productCatalog";
    jsonUrl = Facets.UrlParametersParse(jsonUrl);

    Dynamo.UpdateContent('productList', jsonUrl);
}

Facets.prototype.AddFacetToUrl = function (url, name, value) {
    var selectedCommand = "";
    var seperator = "?";

    if (url.indexOf("?") != -1) {
        seperator = "&";
    }

    name = encodeURIComponent(name);
    value = encodeURIComponent(value);

    //If the parameter already exists, add value to comma seperated array. Else add parameter and value to url
    if (url.indexOf(name) != -1) {
        selectedCommand = Facets.GetParameterByName(name) + "," + value;
        selectedCommand = selectedCommand.replace(/ /g, "+");
        url = Facets.ReplaceUrlParam(url, name, selectedCommand);
    } else {
        selectedCommand = name + "=" + value;
        selectedCommand = selectedCommand.replace(/ /g, "+");
        url += seperator + selectedCommand;
    }

    return url;
}

Facets.prototype.RemoveFacetFromUrl = function (url, name, value) {
    name = encodeURIComponent(name);

    var valuesArray = Facets.GetParameterByName(name);
    valuesArray = valuesArray.split(',');

    //If the existing values is an array, remove the selected value from the array. Else remove both the parameter name and value from the url.
    if (Facets.GetParameterByName(name).indexOf(",") != -1) {
        var index = valuesArray.indexOf(value);
        valuesArray.splice(index, 1);
        valuesArray = valuesArray.toString();
        url = Facets.ReplaceUrlParam(url, name, valuesArray);
    } else {
        var selectedCommand = name + "=" + encodeURIComponent(value);

        url = url.replace("?" + selectedCommand, "");
        url = url.replace("&" + selectedCommand, "");
    }

    url = Facets.UrlParametersParse(url);

    return url;
}

Facets.prototype.ResetFacets = function (facet, catalogPageId) {
    var url = window.location.search;
    var path = window.location.pathname;
    var catalogPage = "/Default.aspx?ID=" + catalogPageId;
    var groupID = url.split('GroupID=')[1] ? "&" + url.match(/(GroupID=)[0-9A-Za-z-]+/ig)[0] : '';
    url = url.split('?')[0];

    url += "?PageNum=1";
    url += "&pagesize=30";
    url += groupID;

    var browserUrl = path + url;
    history.pushState(null, null, browserUrl);

    var jsonUrl = catalogPage + url.replace("?", "&") + "&feedType=productCatalog";
    jsonUrl = Facets.UrlParametersParse(jsonUrl);

    Dynamo.UpdateContent('productList', jsonUrl);
}

Facets.prototype.GetParameterByName = function (name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

Facets.prototype.ReplaceUrlParam = function(url, name, newValue){
    if (newValue == null)
        newValue = '';
    var pattern = new RegExp('\\b(' + name + '=).*?(&|$)');
    if (url.search(pattern) >= 0) {
        return url.replace(pattern, '$1' + newValue + '$2');
    }

    return url + (url.indexOf('?') > 0 ? '&' : '?') + name + '=' + newValue
}

Facets.prototype.UrlParametersParse = function (url) {
    if (url.indexOf("?") == -1 && url.indexOf("&") != -1) {
        var index = url.indexOf("&");
        url = url.substr(0, index) + '?' + url.substr(index + 1);
    }

    return url;
}

var Facets = new Facets();