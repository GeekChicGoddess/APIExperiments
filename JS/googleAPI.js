/**
 * Created by melodytempleton on 5/11/17.
 */
$(document).ready(function () {



var latitude = (42.763479-42.679488) + 42;
var longitude = (-84.524313 + 84.338918) - 84;
var map;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center:  {lat: latitude, lng: longitude}
    });


    var infowindow = new google.maps.InfoWindow({
        content: "hi"
    });

    var marker = new google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map: map,
        title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

initMap();

    var sw = new google.maps.LatLng(42.763479, -84.338918);
    var ne = new google.maps.LatLng(42.679488, -84.524313);
    var GLOBE_WIDTH = 256; // a constant in Google's map projection
    var west = sw.lng();
    var east = ne.lng();
    var angle = east - west;
    if (angle < 0) {
        angle += 360;
    }
    var pixelWidth = screen.width;
    var zoom = Math.round(Math.log(pixelWidth * 360 / angle / GLOBE_WIDTH) / Math.LN2);
    console.log(zoom);


// if (map.addEventListener) {
//     // IE9, Chrome, Safari, Opera
//     map.addEventListener("mousewheel", MouseWheelHandler, false);
//     // Firefox
//     map.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
// }
// // IE 6/7/8
// else map.attachEvent("onmousewheel", MouseWheelHandler);
//
//     function MouseWheelHandler(e) {
//
//         // cross-browser wheel delta
//         var e = window.event || e; // old IE support
//         var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//
//         myimage.style.width = Math.max(50, Math.min(800, myimage.width + (30 * delta))) + "px";
//
//         return false;
//     }


});