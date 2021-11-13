﻿var Wireframe = function () { }

var _wireframeMode = false;
var timer;
var toolsPanelOpen = false;

var markingEnabled = false;
var markedElement;
var markableElements = ["grid__col-md-12", "grid__col-md-6", "grid__col-md-4", "grid__col-md-3", "grid__col-md-2",
                        "expand-box", "logo", "typeahead", "mini-cart", "tools-navigation", "menu", "menu__item",
                        "widget", "grid__cell", "paragraph-container", "buttons-collection", "wire-image", "btn",
                        "cart-table__price"];


Wireframe.prototype.Init = function (wireframeMode, containerId, currenUser) {
    if (wireframeMode == true) {
        //Render as Wireframe
        document.addEventListener("DOMContentLoaded", function (event) {
            Wireframe.WireImages();

            document.getElementById("rapidoCss").setAttribute("href", "");
            document.getElementById("igniteCss").setAttribute("href", "");

            document.body.classList.remove("u-hidden");
        });

        document.body.classList.add("u-hidden");
        
        var ajaxContainer = document.getElementsByClassName("js-ajax-container");
        for (var i = 0; i < ajaxContainer.length; i++) {
            ajaxContainer[i].addEventListener('contentLoaded', function (e) {
                Wireframe.WireImages();
            }, false);
        }

        //Show the tools
        if (currenUser == true) {
            Wireframe.ToolsOverlay();

            if (document.getElementById("productList")) {
                document.getElementById("productList").addEventListener('contentLoaded', function (e) {
                    Wireframe.WireImages();
                    Wireframe.createMarkableElements();
                }, false);
            }
        }
    }

    _wireframeMode = wireframeMode;
}

//Render all images as 'abstract' symbolized images
Wireframe.prototype.WireImages = function () {
    if (_wireframeMode == true) {
        var imgElements = document.getElementsByTagName("IMG");

        for (var i = 0; i < imgElements.length; i++) {
            var imageElement = imgElements[i];

            if (!imageElement.classList.contains("u-hidden") && !imageElement.classList.contains("lightbox__image")) {
                var imageWireframe = document.createElement("DIV");
                imageWireframe.classList.add("wire-image");
                imageElement.parentElement.insertBefore(imageWireframe, imageElement.parentNode.firstChild);
            }

            if (imageElement.classList.contains("lightbox__image")) {
                imageElement.classList.add("u-visually-hidden");
            }

            imageElement.classList.add("u-hidden");
        }

        var imgMultiBgElements = document.getElementsByClassName("multiple-paragraphs-container");

        for (var i = 0; i < imgMultiBgElements.length; i++) {
            var imgBgElement = imgMultiBgElements[i];

            if (imgBgElement.getAttribute("style") != "") {
                imgBgElement.setAttribute("style", "");
                imgBgElement.classList.add("wire-image-lines");
            }
        }

        var imgBgElements = document.getElementsByClassName("paragraph-container");

        for (var i = 0; i < imgBgElements.length; i++) {
            var imgBgElement = imgBgElements[i];

            if (imgBgElement.getAttribute("style") != "") {
                imgBgElement.setAttribute("style", "");
                imgBgElement.classList.add("wire-image-lines");
            }
        }

        var warningColor = document.getElementsByClassName("u-color-warning--bg");

        for (var i = 0; i < warningColor.length; i++) {
            var warningElement = warningColor[i];

            warningElement.classList.remove("u-color-warning--bg");
            warningElement.classList.add("u-color-light-gray--bg");
        }
    }
}

//Make an overlay that temporaily disables page interaction
Wireframe.prototype.ToolsOverlay = function () {
    var toolsOverlay = document.createElement("DIV");
    toolsOverlay.id = "ToolsOverlay";
    toolsOverlay.classList.add("wireframe-tools-overlay");
    toolsOverlay.classList.add("u-hidden");
    document.body.insertBefore(toolsOverlay, document.body.firstChild);

    window.onscroll = function () { Wireframe.resizeOverlay() };
    Wireframe.resizeOverlay();

    //Wireframe.createMarkableElements();
}

document.addEventListener("DOMContentLoaded", function (event) {
    if (document.getElementById("WireframeToolsTrigger")) {
        if (document.getElementById("WireframeToolsTrigger").checked) {
            toolsPanelOpen = false;
            Wireframe.toggleTools();
        }
    } 
});

//Resize the overlay so that it goes to the bottom while scrolling
Wireframe.prototype.resizeOverlay = function (e) {
    if (timer) {
        window.clearTimeout(timer);
    }

    timer = window.setTimeout(function () {
        if ((document.body.scrollHeight - window.innerHeight) != window.pageYOffset) {
            var overlay = document.getElementById("ToolsOverlay");
            overlay.style.height = Math.round(document.body.scrollTop + window.innerHeight) + "px";
        }
    }, 100);
}

//Go through the page and tag elements that we want to make 'markable'
Wireframe.prototype.createMarkableElements = function () {
    var count = 0;

    for (var item = 0; item < markableElements.length; item++) {
        var selectableElements = document.getElementsByClassName(markableElements[item]);

        for (var elm = 0; elm < selectableElements.length; elm++) {
            var element = selectableElements[elm];
            element.setAttribute("data-mark-id", "Mark_" + count);
            element.classList.add("js-markable");

            count++;
        }
    }

    document.getElementById("comments").addEventListener('itemCreated', Wireframe.createMarksFromData, false);
}

//Toggle the tools panel and load/unload tools content
Wireframe.prototype.toggleTools = function () {
    var wireframeTools = document.getElementById("wireframeTools");
    var overlay = document.getElementById("ToolsOverlay");

    if (toolsPanelOpen) {
        overlay.classList.add("u-hidden");

        Wireframe.removeAllMarks();
        document.removeEventListener('mousemove', function (e) { Wireframe.markElement(e); }, false);
        markingEnabled = false;

        Wireframe.cleanUp();

        toolsPanelOpen = false;
    } else {
        overlay.classList.remove("u-hidden");

        Dynamo.UpdateContent('comments');

        toolsPanelOpen = true;
    }
}

//Make an element
Wireframe.prototype.markElement = function (e) {
    if (markingEnabled) {
        var x = e.clientX;
        var y = e.clientY;
        var lastMarkedElement;

        var selectableElements = document.getElementsByClassName("js-markable");

        for (var i = 0; i < selectableElements.length; i++) {
            var element = selectableElements[i];
            var divCoords = element.getBoundingClientRect();

            if (x >= divCoords.left && x <= divCoords.right && y >= divCoords.top && y <= divCoords.bottom) {
                markedElement = element;

                if (lastMarkedElement) {
                    lastMarkedElement.classList.remove('comment-mark--hover');
                }

                if (markedElement != lastMarkedElement) {
                    markedElement.classList.add('comment-mark--hover');
                }

                lastMarkedElement = markedElement;

                //Set special focus on the related comment text
                if (document.getElementById("Comment")) {
                    var commentElements = document.getElementsByClassName("js-comment");
                    for (var j = 0; j < commentElements.length; j++) {
                        if (commentElements[j].id == "Comment_" + markedElement.id.slice(-1)) {
                            commentElements[j].classList.add("comment--active");
                        } else {
                            commentElements[j].classList.remove("comment--active");
                        }
                    }
                }
            } else {
                element.classList.remove('comment-mark--hover');
            }
        }
    }
}

//Set selection (Used for selecting the element that we want to comment on)
Wireframe.prototype.setMarkOnClick = function (e) {
    if (markedElement) {
        Wireframe.cleanUp();

        document.getElementById("WireframeToolsHelpText").classList.add("u-hidden");
        document.getElementById("CreateCommentForm").classList.remove("u-visually-hidden");

        markedElement.classList.add("js-wireframe-mark");
        document.getElementById("TargetElement").value = markedElement.getAttribute("data-mark-id");

        Wireframe.renderSingleMark(markedElement, "");
        markedElement.classList.add("comment-mark--active");
    }    
}

//Deselect previous selected elements (We one want one select element at the time)
Wireframe.prototype.cleanUp = function () {
    var markedElements = document.getElementsByClassName("js-wireframe-mark");

    for (var i = 0; i < markedElements.length; i++) {
        var element = markedElements[i];
        element.classList.remove('js-wireframe-mark');
        element.classList.remove('comment-mark');
        element.classList.remove('comment-mark--active');
        if (element.getElementsByClassName('comment-mark__tag')[0]) {
            element.getElementsByClassName('comment-mark__tag')[0].parentNode.removeChild(element.getElementsByClassName('comment-mark__tag')[0]);
        }
    }
}

//Render the visuals of a selected element
Wireframe.prototype.renderSingleMark = function (markedElement, count) {
    markedElement.classList.add("comment-mark");

    var mark = document.createElement("DIV");
    mark.classList.add("comment-mark__tag");
    mark.innerText = count;
    markedElement.insertBefore(mark, markedElement.firstChild);
}

//When data is received, make the rendition
Wireframe.prototype.createMarksFromData = function (e) {
    var items = e.detail.Comment;

    for (var item = 0; item < items.length; item++) {
        var target;
        var selectableElements = document.getElementsByClassName("js-markable");

        for (var i = 0; i < selectableElements.length; i++) {
            var element = selectableElements[i];
            if (element.getAttribute("data-mark-id") == items[item].targetElement) {
                target = element;
            }
        }

        target.id = "SelectedMark_" + items[item].count;
        Wireframe.renderSingleMark(target, items[item].count);
    }

    markingEnabled = true;
    document.addEventListener('mousemove', function (e) { Wireframe.markElement(e); }, false);
    document.getElementById("ToolsOverlay").addEventListener('click', function (e) { Wireframe.setMarkOnClick(e); }, false);
}

//Remove all markings of any type
Wireframe.prototype.removeAllMarks = function () {
    var selectableElements = document.getElementsByClassName("js-markable");

    for (var i = 0; i < selectableElements.length; i++) {
        var element = selectableElements[i];
        element.classList.remove('comment-mark');
        element.classList.remove('comment-mark--hover');
        element.classList.remove('comment-mark--active');
        if (element.getElementsByClassName('comment-mark__tag')[0]) {
            element.getElementsByClassName('comment-mark__tag')[0].parentNode.removeChild(element.getElementsByClassName('comment-mark__tag')[0]);
        }
    }
}

var Wireframe = new Wireframe();