
var stripeArrayIndexes = new Array();
 
var $mapCanvas = document.getElementById("map-canvas");
var $gallery = document.getElementById("gallery");
var $mapButton = document.getElementById("map-button");
var $galleryButton = document.getElementById("gallery-button");
var $rightArrow = document.getElementById("right-arrow");
var $leftArrow = document.getElementById("left-arrow");
var $galleryImageArea = document.getElementById("gallery-image-area");
var $galleryImageInfo = document.getElementById("gallery-image-info");
var flag = 0;
window.addEventListener('load', function(){ // on page load

    // initialise the index array
    setNextImage(0);
    for (var i = 0; i < stripesList.length; i++) {
        stripeArrayIndexes.push(i);
    }
    
    // -- Add events -

    document.getElementById("right-arrow").addEventListener('touchstart', function(e) {
        stripeArrayIndexes.rotate(-1);
        setNextImage(stripeArrayIndexes[0]);
    }, false);

    document.getElementById("left-arrow").addEventListener('touchstart', function(e) {
        stripeArrayIndexes.rotate(1);
        setNextImage(stripeArrayIndexes[0]);
    }, false);

    document.getElementById("gallery-image-area").getElementsByTagName('img')[0].addEventListener('touchstart', function(e) {
        if ($leftArrow.style.opacity == "0") {
            document.getElementById("left-arrow").style.opacity = "0.7";
            document.getElementById("right-arrow").style.opacity = "0.7";
            document.getElementById("gallery-image-info").style.opacity = "0.7";
        }
        else {
            document.getElementById("left-arrow").style.opacity = "0";
            document.getElementById("right-arrow").style.opacity = "0";
            document.getElementById("gallery-image-info").style.opacity = "0";
        }

    }, false);


    document.getElementById("image-preview").getElementsByTagName('img')[0].addEventListener('touchstart', function(e) {

    }, false);

    document.getElementById("menu-button").addEventListener('touchstart', function(e) {
        
        if (document.getElementById("menu-options").style.zIndex == "0") {
            document.getElementById("menu-options").style.visibility = "visible";
            document.getElementById("menu-options").style.zIndex = "15";
            document.getElementById("menu-button").style.background = "-webkit-linear-gradient(top, #2A2B33 0%,#17181C 100%)";
        }
        else {
            document.getElementById("menu-options").style.visibility = "hidden";
            document.getElementById("menu-options").style.zIndex = "0";
            document.getElementById("menu-button").style.background = "-webkit-linear-gradient(top, #4c4e5a 0%,#2c2d33 100%)";
        }
    }, false);


    var menuOptionsList = document.getElementById("menu-options").getElementsByTagName('ul')[0].getElementsByTagName('li');
    for (var i = 0; i < menuOptionsList.length; i++) {
        menuOptionsEffect(menuOptionsList[i]);
    }    

    // document.getElementById("gallery-option").addEventListener('touchstart', function(e) {
    //     document.getElementById("gallery").style.webkitTransform = "translate(0, 0)";
    //     flag = 1;        
    //     document.getElementById("menu-options").style.visibility = "hidden";
    //     document.getElementById("menu-options").style.zIndex = "0";
    // }, false);

    // document.getElementById("map-option").addEventListener('touchstart', function(e) {
    //     document.getElementById("gallery").style.webkitTransform = "translate(-100%, 0)";
    //     flag = 0;        
    //     document.getElementById("menu-options").style.visibility = "hidden";
    //     document.getElementById("menu-options").style.zIndex = "0";
    // }, false);



}, false);

function menuOptionsEffect(item) {
    item.addEventListener('touchstart', function(e) {
        item.style.backgroundColor = "#4c4e5a";
    }, false);

    item.addEventListener('touchend', function(e) {
        item.style.backgroundColor = "#000";
    }, false);

    if (item.innerHTML == "Gallery") {
        item.addEventListener('touchstart', function(e) {
            document.getElementById("gallery").style.webkitTransform = "translate(0, 0)";
            flag = 1;        
            document.getElementById("menu-options").style.visibility = "hidden";
            document.getElementById("menu-options").style.zIndex = "0";
            item.style.backgroundColor = "#000";
            document.getElementById("menu-button").style.background = "-webkit-linear-gradient(top, #4c4e5a 0%,#2c2d33 100%)";
        }, false);
    } else if (item.innerHTML == "Map") {
        item.addEventListener('touchstart', function(e) {
            document.getElementById("gallery").style.webkitTransform = "translate(-100%, 0)";
            flag = 0;        
            document.getElementById("menu-options").style.visibility = "hidden";
            document.getElementById("menu-options").style.zIndex = "0";
            item.style.backgroundColor = "#000";
            document.getElementById("menu-button").style.background = "-webkit-linear-gradient(top, #4c4e5a 0%,#2c2d33 100%)";
        }, false);

    }else if (item.innerHTML == "About") {

    }else {

    }
}

function setNextImage(index) {
	var newImage = stripesList[index].src;
    document.getElementById("gallery-image-area").getElementsByTagName('img')[0].src = newImage;
    document.getElementById("gallery-image-info").innerHTML = '"' + stripesList[index].name + '" by ' + stripesList[index].artist + '<br />@ ' + stripesList[index].address;
}

