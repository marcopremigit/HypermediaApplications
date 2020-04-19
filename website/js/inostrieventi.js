//TODO: this has to be replaced with database query information extraction
let myCard = new Card( document.getElementById('card-space') );
let events = [
    {title: 'Vacanza studio Londra', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: "Vacanza studio"},
    {title: 'Cena di Natale', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: "Vacanza studio"},
    {title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: "Vacanza studio"},
    {title: 'Vacanza studio Catania', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: "Vacanze studio"},
    {title: 'Colletta alimentare', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: "Vacanza studio"},
    {title: 'Colletta pasquale', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: "Vacanza studio"},
    {title: 'Vacanza studio Trapani', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: "Vacanza studio"},
]
events.map(e => myCard.add(e.title, e.img, e.link, e.category));

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

function search(){
    let searchVal = document.getElementById("searchBox").value;
    let res = events.filter(e => {
        return e.title.toLowerCase().includes(searchVal.toLowerCase());
    }, []);
    console.log(res);
    // let shuffleInstance = new window.Shuffle(document.getElementById('card-space'), {
    //     itemSelector: '.card',
    //     sizer: '.card'
    // });

    // shuffleInstance.filter(searchVal);
}


class Shuffler {
    constructor(element) {
        // ! something is wrong here !
        this.shuffle = new window.Shuffle(element, {
            itemSelector: '.card',
            sizer: element.querySelector('.sizer'),
            filterMode: Shuffle.FilterMode.ANY
        }); 
        document.getElementById('searchBox').addEventListener('keyup', this._handleSearchKeyup.bind(this));
    }
  
    // /**
    //  * Filter the shuffle instance by items with a title that matches the search input.
    //  * @param {Event} evt Event object.
    //  */
    _handleSearchKeyup(evt) {
        const searchText = evt.target.value.toLowerCase();
        this.shuffle.filter(element => {
            return element.querySelector('.card-title').textContent.toLowerCase().trim().indexOf(searchText) !== -1;
        });
    }
}

window.onload = () => {
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "inostrieventi.html",
            title: "I nostri eventi"
        }
    ]);
    setTimeout(() => {
        window.demo = new Shuffler(document.querySelector('#card-space'));
    }, 1000);
}   