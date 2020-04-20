function loadEvents(){
    //TODO: this has to be replaced with database query information extraction
    return [
        {id: 'dksnao', title: 'Vacanza studio Londra', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.468868, lng: 9.206720},
        {id: 'dksnae', title: 'Cena di Natale', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"], lat: 45.185242, lng: 9.156010},
        {id: 'dksnar', title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.4513128, lng: 9.1734067},
        {id: 'dksnat', title: 'Vacanza studio Catania', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.4502473, lng: 9.1752055},
        {id: 'dksnay', title: 'Colletta alimentare', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.453261, lng: 9.179347},
        {id: 'dksnau', title: 'Colletta pasquale', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.486604, lng: 9.186649},
        {id: 'dksnai', title: 'Vacanza studio Trapani', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.483227, lng: 9.188763},
    ];
}

window.onload = () => {
    //Breadcrumbs handling
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

    //Query to database
    let events = loadEvents();

    //Cards and filters handling
    loadCardsAndFilters(events, true);

    //Google Maps API handling
    GMaps.initMap(events.map(e => {
        return {text: e.title, cat: e.category, lat: e.lat, lng: e.lng};
    }));

    //Shuffler handling
    window.demo = new Shuffler(document.querySelector('#card-space'), events.map(e => e.category));
    
    //Spinner handling
    Spinner.letThemComeBack();
}   
