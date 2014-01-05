
var currentMarker;

var app = {
    map: null,
    currentPositionMarker: new Marker(),
    stripeMarkers: new Array(),

    initialize: function() {
        document.addEventListener('deviceready', app.onDeviceReady, false);
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
        // google.maps.event.addDomListener(window, 'load', app.initializeMap);

        var content = "<li><label></label></li>";
        for (var i = 0; i < stripesList.length; i++) {
            content += '<li><a href="#mural-' + i + '" id="mural-'+ i +'">' + stripesList[i].name +'</a></li>'
        }
        $(".main-section").find('ul').html(content);
        
        // for (var i = 0; i < stripesList.length; i++) {
        //     $("#mural-" + i).click(function(){
        //         alert($(this).html());
        //     });
        // }
        
    },

    onDeviceReady: function() {
        document.addEventListener("backbutton", app.yourCallbackFunction, false);
        // this.initializeMap('deviceready');
    },
    yourCallbackFunction: function() {
        if (flag == 1) {
            document.getElementById("gallery").style.webkitTransform = "translate(-100%, 0)";
            flag = 0;
        }
        else {
            navigator.app.exitApp();
        }
    },
    help: function() {
        if (document.getElementById("gallery").style.webkitTransform == "translate(0, 0)") {
            document.getElementById("gallery").style.webkitTransform = "translate(-100%, 0)";
        }
        else {
            navigator.app.exitApp();
        }
    },
    initializeMap: function() {

        var mapOptions = {            
            disableDefaultUI: true,
            center: new google.maps.LatLng(50.855870159325484, 4.351516307238628),
            zoom: 13 
        }
        app.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        app.setCurrentPosition(); // set the current position of the device
        app.placeStripeMarkers(); // place the markers for each comic stripe
        
        (function refreshCurrentPosition() {
            app.setCurrentPosition();
            setTimeout(refreshCurrentPosition, 10000);
        })();
    },

    setCurrentPosition: function() {
        var onSuccess = function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            if (app.currentPositionMarker.marker === null) {
                app.currentPositionMarker.map(app.map);
                app.currentPositionMarker.position(lat, lng);
                app.currentPositionMarker.icon('img/current_position.png', 32, 32);
                app.currentPositionMarker.title('Current position');
                app.currentPositionMarker.create();
            }
            else {
                app.currentPositionMarker.marker.setPosition(new google.maps.LatLng(lat, lng));
            }
        };

        var onError = function(error) {
            //alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },

    placeStripeMarkers: function() 
    {
        var markerClickEvent = function(marker, index) {         
            google.maps.event.addListener(marker, 'click', function() {

                app.map.setCenter(marker.getPosition());
                changeCurrentMarker(marker);

                document.getElementById("image-preview").getElementsByTagName('img')[0].src = stripesList[index].src;
                document.getElementById("image-preview").style.display = "block";
                document.getElementById("image-preview").style.zIndex = "20";
            }); 
        }

        var i;
        for (i = 0; i < stripesList.length; i++) {
            var markerObject = new Marker();
            markerObject.map(app.map);
            markerObject.position(stripesList[i].coord[0], stripesList[i].coord[1]);
            markerObject.icon('img/stripe_wall.png', 48, 48);
            markerObject.title(stripesList[i].name);

            var marker = markerObject.create();
            markerClickEvent(marker.marker, i);
            app.stripeMarkers.push(marker);
        }
        // for (i = 0; i < stripeMarkers.length; i++) {
        //     markerClickEvent(stripeMarkers[i], stripesList[i]);
        // }

    }
}
 
function changeCurrentMarker(marker) {
    
    if (marker != currentMarker) {
        marker.setIcon(
            {
                url: 'img/stripe_wall1.png'
            }
        );
        if (currentMarker) {
            currentMarker.setIcon(
                {
                    url: 'img/stripe_wall.png'
                }
            );
        }
        currentMarker = marker;
    }
}

