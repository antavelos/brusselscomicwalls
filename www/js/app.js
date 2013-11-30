
var map;
var currentPositionMarker;
var stripeMarkers = new Array();

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        google.maps.event.addDomListener(window, 'load', this.initializeMap());

        $('#close-button').click(function(){
            $('#map-canvas').css('opacity', '1.0');
            $('#stripe-area').css('visibility', 'hidden');            
        });
    },
    onDeviceReady: function() {
        // this.initializeMap('deviceready');
    },
    initializeMap: function() {
        var mapObject = new Map("map-canvas");
        mapObject.center(50.8500, 4.3500);
        mapObject.zoom(13);
        map = mapObject.render(); // renders the google map centered to Brussels
     
        setCurrentPosition(map); // set the current position of the device
        placeStripeMarkers(); // place the markers for each comic stripe
    }
};
 
function setCurrentPosition(map) {
    var onSuccess = function(position) {
        var markerObject = new Marker(map);
        markerObject.position(position.coords.latitude, position.coords.longitude);
        markerObject.icon('img/current_position.png');
        markerObject.title('Current position');

        currentPositionMarker = markerObject.create();
    };

    var onError = function(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function placeStripeMarkers() {

    var i;
    for (i = 0; i < stripesList.length; i++) {
        var markerObject = new Marker(this.map);
        markerObject.position(stripesList[i].coord[0], stripesList[i].coord[1]);
        markerObject.icon('img/stripe_wall.png');
        markerObject.title(stripesList[i].name);

        var marker = markerObject.create();
        stripeMarkers.push(marker);
    }
    var i;
    for (i = 0; i < stripeMarkers.length; i++) {
        markerClickEvent(stripeMarkers[i], stripesList[i]);
        // google.maps.event.addListener(stripeMarkers[i], 'click', stripeClickEvent(stripesList[i]))
    }

}

function markerClickEvent(marker, stripe) {         
    google.maps.event.addListener(marker, 'click', function() {
        $('#map-canvas').css('opacity', '0.1');
        $('#stripe-area').css('visibility', 'visible');

        var stripeContent = '<img src="' + stripe.src + '">';
        stripeContent += '<span id="stripe-name">"' + stripe.name + '" by ' + stripe.artist + '</span><br />';
        stripeContent += '<span id="stripe-address">@ ' + stripe.address + '</span>';

        $('#stripe').html(stripeContent);    
    }); 
}