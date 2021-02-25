function initMap() {
	// add your code here
	L.mapquest.key='9GVpSVWPKB8LqmAyYQcGlcWgGeacgkbO';

	//'map' refers to a <div> eleemnt with the ID map
	var map = L.mapquest.map('map',{
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom:20,
		zoomControl: false
	});

	//add a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}