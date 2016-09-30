function initMap() {
	var mapCanvas = document.getElementById("map");
	var mapCenter = new google.maps.LatLng(25.421371,-101.000343);	
	var mapTypeId = google.maps.MapTypeId.TERRAIN;
	var map = new google.maps.Map(mapCanvas, {center:mapCenter, zoom:18}, mapTypeId);
	var marker = new google.maps.Marker({position:mapCenter, icon:"images/kala.png"});
	var marker2 = new google.maps.Marker({position:mapCenter, animation:google.maps.Animation.BOUNCE});
	marker.setMap(map);
	marker2.setMap(map);
	var infoWindow = new google.maps.InfoWindow({content:"Entrada por la calle de Hidalgo, justo en frente del Casino de Saltillo"});
	infoWindow.open(map,marker);
}