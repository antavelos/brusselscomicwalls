
var stripeArrayIndexes = new Array();

$( document ).ready(function() {
	setNextImage(0);
	for (var i = 0; i < stripesList.length; i++) {
		stripeArrayIndexes.push(i);
	}


    $("#map-button").find("img").click(function(){
        $("#gallery").css('left', "-100%");
    });
    
    $("#gallery-button").find("img").click(function(){
        $("#gallery").css('left', "0");
    });

    $("#right-arrow").click(function(){
        //$("#image-area").fadeOut(50, function(){
        	stripeArrayIndexes.rotate(-1);
        	setNextImage(stripeArrayIndexes[0]);
        //}).fadeIn(50);
    });

    $("#left-arrow").click(function(){
    //    $("#image-area").fadeOut(50, function(){
        	stripeArrayIndexes.rotate(1);
        	setNextImage(stripeArrayIndexes[0]);
      //  }).fadeIn(50);
    });

    $("#gallery-image-area").find("img").click(function() {
    	if ($("#left-arrow").css("opacity") == 0) {
    		$("#left-arrow").css("opacity", "0.7");
    		$("#right-arrow").css("opacity", "0.7");
    		$("#gallery-image-info").css("opacity", "0.7");
    	}
    	else {
    		$("#left-arrow").css("opacity", "0");
    		$("#right-arrow").css("opacity", "0");
    		$("#gallery-image-info").css("opacity", "0");
    	}
    });

    $("#close-marker-image-button").click(function() {
    	$("#marker-image").css("left", "-100%");
    });

});

function setNextImage(index) {
	var newImage = stripesList[index].src;
    $("#gallery-image-area").find("img").attr('src', newImage);
    $("#gallery-image-info").html('"' + stripesList[index].name + '" by ' + stripesList[index].artist + '<br />@ ' + stripesList[index].address);
}