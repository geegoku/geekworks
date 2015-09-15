//Wow
new WOW().init();

//Google Maps
google.maps.event.addDomListener(window, 'load', function() {
  var mapdiv = document.getElementById('map_canvas');
  var latlng = new google.maps.LatLng(35.702019, 139.797428);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true,
    scrollwheel: false,
  };
  var map = new google.maps.Map(mapdiv, myOptions);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
  });
});

smoothScroll.init();