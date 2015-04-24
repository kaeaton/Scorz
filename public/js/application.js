$(document).ready(function() {

  //Google Map

  var map;
  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(37.75, -122.445)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  // End Google Map
  $("#dropdown").change(function(event){
    // event.preventDefault
    var formData = $(event.target).serialize()
    console.log(formData)
    $(".scores").empty()
    //Get data from dropdown

    var dropDown = $.ajax({
      url: "/drugs",
      type: "GET",
      data: formData,
      datatype: 'json'
    })
    dropDown.done(function(data){

  // Load the scores data. When the data comes back, create an overlay.

      // d3.json("/drugs", function(data){
        var overlay = new google.maps.OverlayView();
        // Add the container when the overlay is added to the map.
        overlay.onAdd = function(){
          var layer = d3.select(this.getPanes().overlayLayer)
                        .append("div")
                        .attr("class", "scores");
          // Draw each marker as a separate SVG element.
          // We could use a single SVG, but what size would it have?
          overlay.draw = function() {
            var projection = this.getProjection(),
                padding = 10;

            var marker = layer.selectAll("svg")
                              .data(d3.entries(data))
                              .each(transform) // update existing markers
                              .enter().append("svg:svg")
                              .each(transform)
                              .attr("class", "marker");

            // Add a circle.
            marker.append("svg:circle")
                  .attr("r", 4.5)
                  .attr("cx", padding)
                  .attr("cy", padding);
            function transform(d) {
              d = new google.maps.LatLng(d.value[1], d.value[0]);
              d = projection.fromLatLngToDivPixel(d);
              return d3.select(this)
                  .style("left", (d.x - padding) + "px")
                  .style("top", (d.y - padding) + "px");
            }
          }
        }
        overlay.setMap(map);
      // })


    })
  })








});
