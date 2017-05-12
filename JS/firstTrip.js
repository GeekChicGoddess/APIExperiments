/**
 * Created by melodytempleton on 5/12/17.
 */
$(document).ready(function () {



var map;
var markers=[];
var database = [
    {
        dateMonth: 9,
        dateYear: 1970,
        latitude: 42.8922259,
        longitude: -83.4137237,
        zoom: 5,
        title: "<h3>I was born in Flint, MI</h3>",
        displayDate: "May 15, 1970",
        verbage: "<p>I was supposed to be named Colleen, but when my mom saw me, she didn't think I looked like a Colleen.</p>",
        image: "<img src=''>"
    },
    {
        dateMonth: 9,
        dateYear: 1975,
        latitude: 43.1545049,
        longitude: -83.6444737,
        zoom: 5,
        title: "<h3>I went to elementary school in a tiny town called Columbiaville.</h3>",
        displayDate: "1975-1981",
        verbage: "<p>I was supposed to be named Colleen, but when my mom saw me, she didn't think I looked like a Colleen.</p>",
        image: "<img src=''>"
    },
    {
        dateMonth: 9,
        dateYear: 1982,
        latitude: 43.0541748,
        longitude: -83.4500596,
        zoom: 5,
        title: "<h3>Iaaaaaumbiaville.</h3>",
        displayDate: "1982",
        verbage: "<p>I was supposed to be named Colleen, but when my mom saw me, she didn't think I looked like a Colleen.</p>",
        image: "<img src=''>"
    },
    {
        dateMonth: 9,
        dateYear: 1988,
        latitude: 43.0498234,
        longitude: -83.3410808,
        zoom: 5,
        title: "<h3>I bbbbbbbbbbbe.</h3>",
        displayDate: "1988",
        verbage: "<p>I was supposed to be named Colleen, but when my mom saw me, she didn't think I looked like a Colleen.</p>",
        image: "<img src=''>"
    },
    {
        dateMonth: 9,
        latitide: 42.2837375,
        longitude: -85.6124394,
        zoom: 5,
        title: "<h3>I cccccccccccolumbiaville.</h3>",
        displayDate: "1988-1992",
        verbage: "<p>I was supposed to be named Colleen, but when my mom saw me, she didn't think I looked like a Colleen.</p>",
        image: "<img src=''>"
    },
    {
        dateMonth: 9,
        dateYear: 1993,
        latitude: 42.4798059,
        longitude: -83.2952279,
        zoom: 5,
        title: "<h3>I weddddddddlumbiaville.</h3>",
        displayDate: "1993-2005",
        verbage: "<p>I was supposed to be named Colleen, but when my mom saw me, she didn't think I looked like a Colleen.</p>",
        image: "<img src=''>"
    }
    ];



var upperYearRange = 1980;
var lowerYearRange = 1070;


function addMarker(location, map) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
    console.log(markers);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        console.log(markers[i]);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 42.7087864, lng: -84.629072}
    });
        for (var i =0; i< database.length; i++){
        if (database[i].dateYear>=lowerYearRange && database[i].dateYear<=upperYearRange) {
            console.log(database[i].longitude);
            addMarker({lat: database[i].latitude, lng: database[i].longitude}, map);
        }
    }
    setMapOnAll(map);

    }



    initMap();

});