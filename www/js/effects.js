
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
    
    // -- Add events --
    
    document.getElementById("map-button").addEventListener('touchstart', function(e){
        document.getElementById("gallery").style.webkitTransform = "translate(-100%, 0)";
        flag = 0;
    }, false);

    document.getElementById("gallery-button").addEventListener('touchstart', function(e){
        document.getElementById("gallery").style.webkitTransform = "translate(0, 0)";
        flag = 1;
    }, false);

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
    // ----------------

}, false);

function setNextImage(index) {
	var newImage = stripesList[index].src;
    document.getElementById("gallery-image-area").getElementsByTagName('img')[0].src = newImage;
    document.getElementById("gallery-image-info").innerHTML = '"' + stripesList[index].name + '" by ' + stripesList[index].artist + '<br />@ ' + stripesList[index].address;
}

// $( document ).ready(function() {


//     $("#map-button").find("img").click(function(){
//         $("#gallery").css('left', "-100%");
//     });
    
//     $("#gallery-button").find("img").click(function(){
//         $("#gallery").css('left', "0");
//     });

//     $("#right-arrow").click(function(){
//         //$("#image-area").fadeOut(50, function(){
//          stripeArrayIndexes.rotate(-1);
//          setNextImage(stripeArrayIndexes[0]);
//         //}).fadeIn(50);
//     });

//     $("#left-arrow").click(function(){
//     //    $("#image-area").fadeOut(50, function(){
//          stripeArrayIndexes.rotate(1);
//          setNextImage(stripeArrayIndexes[0]);
//       //  }).fadeIn(50);
//     });

//     $("#gallery-image-area").find("img").click(function() {
//      if ($("#left-arrow").css("opacity") == 0) {
//          $("#left-arrow").css("opacity", "0.7");
//          $("#right-arrow").css("opacity", "0.7");
//          $("#gallery-image-info").css("opacity", "0.7");
//      }
//      else {
//          $("#left-arrow").css("opacity", "0");
//          $("#right-arrow").css("opacity", "0");
//          $("#gallery-image-info").css("opacity", "0");
//      }
//     });

//     $("#close-marker-image-button").click(function() {
//      $("#marker-image").css("left", "-100%");
//     });

// });
