//Google Map

var map;
function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(37.804, -122.270)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

  // Try HTML5 geolocation
//   if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = new google.maps.LatLng(position.coords.latitude,
//                                        position.coords.longitude);

//       var infowindow = new google.maps.InfoWindow({
//         map: map,
//         position: pos,
//         content: 'Location found using HTML5.'
//       });

//       map.setCenter(pos);
//     }, function() {
//       handleNoGeolocation(true);
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleNoGeolocation(false);
//   }
// }

// function handleNoGeolocation(errorFlag) {
//   if (errorFlag) {
//     var content = 'Error: The Geolocation service failed.';
//   } else {
//     var content = 'Error: Your browser doesn\'t support geolocation.';
//   }

//   var options = {
//     map: map,
//     position: new google.maps.LatLng(60, 105),
//     content: content
//   };

//   var infowindow = new google.maps.InfoWindow(options);
//   map.setCenter(options.position);
// }

google.maps.event.addDomListener(window, 'load', initialize);

// End Google Map

// $(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()


  // var test = $.ajax({
  // 	url: '/',
  // 	type: 'GET',
  // })
  // test.done(function(response) {
  // 	console.log("response");
  // })
  // .fail(function() {
  // 	console.log("error");
  // })
  // .always(function() {
  // 	console.log("complete");
  // });
  

// });
