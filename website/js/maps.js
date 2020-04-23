let map = null;
let markers = [];
let GMaps = {
    initMap: locations => {
        
        //TODO: zoom might need to be fixed or dinamically calculated
        map = new google.maps.Map(document.getElementById('map'));
        _calcCenter(locations);
        _calcBounds(locations);
    
        //create markers
        markers = locations.map(c => {
            //TODO: rewrite infowindow.content
            let infoWindow = new google.maps.InfoWindow({
                content: c.name
            });
            let marker = new google.maps.Marker({
                position: c,
                animation: google.maps.Animation.DROP,
                map: map,
                category: c.cat,
                text: c.text
            });
            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            })
    
            return marker;
        });
    },

    //TODO: could be improved, not perfect but it does the trick
    // ? Maybe eliminate clustering ?
    filterMarkers: (activeCards) => {
        let actives = {
            titles: [...new Set(Array.from(activeCards).map(e => e.getAttribute('data-title')))],
            groups: [...new Set(Array.from(activeCards).map(e => e.getAttribute('data-groups')))],
        };

        // ! this does not work with multiple categories !
        // ! change activeCards.includes(m.category[0]) !
        let visibileMarkers = [];
        markers.map(m => {
            let visible = actives.titles.includes(m.text) || actives.groups.includes(m.category);
            m.setVisible(visible);
            if(visible) visibileMarkers.push({lat: m.getPosition().lat(), lng: m.getPosition().lng()});
        });

        _calcCenter(visibileMarkers);
        _calcBounds(visibileMarkers);
    }
};

//calculate the mean between all lats and lngs of given locations
function _calcCenter(markers){
    map.setCenter({
        lat: markers.reduce((acc, pilot) => {
            return acc + pilot.lat; 
        },0) / markers.length,
        lng: markers.reduce((acc, pilot) => {
            return acc + pilot.lng; 
        },0) / markers.length 
    }); 
}

//calculate bounds of the visible map
function _calcBounds(markers){
    let latlngBounds = new google.maps.LatLngBounds();
    markers.map(m => {
        latlngBounds.extend({lat: m.lat, lng: m.lng});
    });
    map.fitBounds(latlngBounds);
}