function loadEvents(){
    //TODO: this has to be replaced with database query information extraction
    return [
        {id: 'dksnao', spots: 30, title: 'Vacanza studio Londra', img: 'https://source.unsplash.com/random/1920x1080', description: 'Un evento noioso', starts: '24-4-2020', ends: '24-4-2020', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.468868, lng: 9.206720},
        {id: 'dksnae', spots: 40, title: 'Cena di Natale', img: 'https://source.unsplash.com/random/1920x1080', description: 'Un evento noioso', starts: '24-4-2020', ends: '24-4-2020', link: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"], lat: 45.185242, lng: 9.156010},
        {id: 'dksnar', spots: 50, title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', description: 'Un evento noioso', starts: '24-4-2020', ends: '24-4-2020', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.4513128, lng: 9.1734067},
        {id: 'dksnat', spots: 60, title: 'Vacanza studio Catania', img: 'https://source.unsplash.com/random/1920x1080', description: 'Un evento noioso', starts: '24-4-2020', ends: '24-4-2020', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.4502473, lng: 9.1752055},
        {id: 'dksnay', spots: 70, title: 'Colletta alimentare', img: 'https://source.unsplash.com/random/1920x1080', description: 'Un evento noioso', starts: '24-4-2020', ends: '24-4-2020', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.453261, lng: 9.179347},
        {id: 'dksnau', spots: 80, title: 'Colletta pasquale', img: 'https://source.unsplash.com/random/1920x1080', description: 'Un evento noioso', starts: '24-4-2020', ends: '24-4-2020', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.486604, lng: 9.186649},
        {id: 'dksnai', spots: 90, title: 'Vacanza studio Trapani', img: 'https://source.unsplash.com/random/1920x1080', description: 'Un evento noioso', starts: '24-4-2020', ends: '24-4-2020', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.483227, lng: 9.188763},
    ];
}

$(document).ready(() => { 
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
    loadCardsAndFilters(events, true, 'inostrieventi-detail.html', '#events-card-space');
    let eventsJSON = {};
    events.map(e => {
        eventsJSON[e.id] = e;
    });
    saveInStorage('events', eventsJSON, true);
    saveInStorage('eventsElementsOrder', events.map(v => v.id));
    GMaps.initMap(events.map(e => {
        return {text: e.title, cat: e.category, lat: e.lat, lng: e.lng};
    }));

    //Shuffler handling
    new Shuffler('#events-card-space', events.map(e => e.category));
    
    //Spinner handling
    Spinner.letThemComeBack();
});
