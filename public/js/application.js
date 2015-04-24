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
    dropDown.done(function(ajaxResults){
    console.log(ajaxResults)

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
                              .data(d3.entries(ajaxResults))
                              .each(transform) // update existing markers
                              .enter().append("svg:svg")
                              .each(transform)
                              .attr("class", "marker")
                              .each(transform)

            // var type = function(data) { return data.value[0][2]; }

            // marker.each(function(x){
              var firstObject = Object.keys(ajaxResults)[0];
              var drugType = ajaxResults[firstObject][2]
              console.log(drugType);
              // var drugType = x.value[2];
              // d = new google.maps.LatLng(d.value[1], d.value[0]);
              // d = projection.fromLatLngToDivPixel(d);
              if (drugType === "MARUJANA"){
                d3.select(this)
                  .append("svg:circle")
                  .attr("r", 4.5)
                  .attr("cx", padding)
                  .attr("cy", padding);
              // }else{
              //   return d3.select(this)
              //     .append("svg:rect")
              //     .attr("rx", 4.5)
              //     .attr("ry", 4.5)
              //     .attr("x", padding)
              //     .attr("y", padding);
              }
            // })
            // console.log(formData)
            // if ( formData === "drugs=MARIJUANA"){
            //   marker.append("svg:circle")
            //         .attr("r", 4.5)
            //         .attr("cx", padding)
            //         .attr("cy", padding);
            // } else if (marker.text(function(d) { return d.value[2]; }) === "COCAINE") {
            //   marker.append("svg:rect")
            //         .attr("rx", 4.5)
            //         .attr("ry", 4.5)
            //         .attr("x", padding)
            //         .attr("y", padding)
            // }
              // Add a circle.






            // Add a label.
            $("circle").on("click", function(){
              marker.append("svg:text")
                  .attr("x", padding + 7)
                  .attr("y", padding)
                  .attr("dy", ".31em")
                  .text(function(d) { return d.value[2]; });
            })




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
