

function App() {
    var map = null;
    var currentPositionMarker = new Marker();
    var stripeMarkers = new Array();

    this.initialize = function() {
        document.addEventListener('deviceready', onDeviceReady, false);
        google.maps.event.addDomListener(window, 'load', initializeMap);
    }

    var onDeviceReady = function() {
        // this.initializeMap('deviceready');
    }

    var initializeMap = function() {
        var mapObject = new Map("map-canvas");
        mapObject.center(50.855870159325484, 4.351516307238628);
        mapObject.zoom(13);
        map = mapObject.render(); // renders the google map centered to Brussels
     
        setCurrentPosition(); // set the current position of the device
        placeStripeMarkers(); // place the markers for each comic stripe


        $('#close-button').click(function(){
            $('#map-canvas').css('opacity', '1.0');
            $('#stripe-area').css('visibility', 'hidden');            
        });
        
        (function refreshCurrentPosition() {
            setCurrentPosition();
            setTimeout(refreshCurrentPosition, 10000);
        })();
    }

    var setCurrentPosition = function() {
        var onSuccess = function(position) {
            if (currentPositionMarker.marker === null) {
                currentPositionMarker.map(map);
                currentPositionMarker.position(position.coords.latitude, position.coords.longitude);
                currentPositionMarker.icon('img/current_position.png', 32, 32);
                currentPositionMarker.title('Current position');
                currentPositionMarker.create();
            }
            else {
                currentPositionMarker.marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));            // currentPositionMarker.marker.setMap(map);
            }
        };

        var onError = function(error) {
            alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    var placeStripeMarkers = function() 
    {
        var markerClickEvent = function(marker, stripe) {         
            google.maps.event.addListener(marker, 'click', function() {
                $('#map-canvas').css('opacity', '0.1');
                $('#stripe-area').css('visibility', 'visible');

                var stripeContent = '<img src="' + stripe.src + '">';
                stripeContent += '<div id="stripe-info"><span id="stripe-name">"' + stripe.name + '" by ' + stripe.artist + '</span><br />';
                stripeContent += '<span id="stripe-address">@ ' + stripe.address + '</span></div>';

                $('#stripe-image').html(stripeContent);    
            }); 
        }

        var i;
        for (i = 0; i < stripesList.length; i++) {
            var markerObject = new Marker();
            markerObject.map(map);
            markerObject.position(stripesList[i].coord[0], stripesList[i].coord[1]);
            markerObject.icon('img/stripe_wall.png', 48, 48);
            markerObject.title(stripesList[i].name);

            var marker = markerObject.create();
            markerClickEvent(marker.marker, stripesList[i])
            stripeMarkers.push(marker);
        }
        // for (i = 0; i < stripeMarkers.length; i++) {
        //     markerClickEvent(stripeMarkers[i], stripesList[i]);
        // }

    }
};
 

