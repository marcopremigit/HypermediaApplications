window.onload = () => {
    Breadcrumbs.loadCrumbs([
        {
            page: "homepage.html",
            title: "Home"
        },
        {
            page: "inostrieventi.html",
            title: "I nostri eventi"
        }
    ]);
}   

const CardSpace = document.getElementById('card-space');
let myCard = new Card( CardSpace );
myCard.add('Vacanza studio Londra','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Vacanza studio Roma','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Vacanza studio Bangkok','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Vacanza studio Stoccolma','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Vacanza studio La fessa di mammt','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Vacanza studio La fessa di mammt','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Vacanza studio La fessa di mammt','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Vacanza studio La fessa di mammt','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Vacanza studio La fessa di mammt','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Vacanza studio La fessa di mammt','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );

function initMap(){
    //TODO: this has to be replaced with database query information extraction
    let locations = [
        {name: 'test', lat: 45.468868, lng: 9.206720},
        {name: 'test', lat: 45.4507775, lng: 9.1709264},
        {name: 'test', lat: 45.4513128, lng: 9.1734067},
        {name: 'test', lat: 45.4502473, lng: 9.1752055},
        {name: 'test', lat: 45.453261, lng: 9.179347},
        {name: 'test', lat: 45.486604, lng: 9.186649},
        {name: 'test', lat: 45.483227, lng: 9.188763}
    ];
    
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