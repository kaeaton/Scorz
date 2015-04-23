$(document).ready(function() {

  var test = $.ajax({
   url: '/',
   type: 'GET',
  })
  test.done(function(response) {
    console.log(response.reports);
    // for(var i = 0 ; i < response.reports.length ; i++){
    //   console.log(response.reports[i])
    // }
  })

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



google.maps.event.addDomListener(window, 'load', initialize);

// End Google Map

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


});
