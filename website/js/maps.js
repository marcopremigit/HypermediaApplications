let GMaps = {
    initMap: locations => {
        //calculate the mean between all lats and lngs of given locations
        let center = {
            lat: locations.reduce((acc, pilot) => {
                return acc + pilot.lat; 
            },0) / locations.length,
            lng: locations.reduce((acc, pilot) => {
                return acc + pilot.lng; 
            },0) / locations.length
        };
    
        //TODO: zoom might need to be fixed or dinamically calculated
        let map = new google.maps.Map(document.getElementById('map'),{
            zoom: 12,
            center: center
        });
    
        //create markers
        let markers = locations.map(c => {
            //TODO: rewrite infowindow.content
            let infoWindow = new google.maps.InfoWindow({
                content: c.name
            });
            let marker = new google.maps.Marker({
                position: c,
                animation: google.maps.Animation.DROP,
                map: map
            });
            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            })
    
            return marker;
        });
    
        //create clusters
        let markerCluster = new MarkerClusterer(
            map, 
            markers, 
            {imagePath: '../resources/images/google_markers/m'}
        );
    }
};