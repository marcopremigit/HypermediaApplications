function loadCardsAndFilters(elements, categoryFilter){
    let myCard = new Card(document.getElementById('card-space') );
    
    // add element cards
    elements.map(e => myCard.add(e.title, e.img, e.link, e.category));
    
    // add category filter only if needed
    if(categoryFilter){
        let dropdown = document.getElementById("categoryDropdown");
        //create a new set of unique values from an array of the categories
        [...new Set(elements.map(e => e.category).flat())]
        .map(e => {
            let b = document.createElement("button");
            b.className = "dropdown-item";
            b.type = "button";
            b.setAttribute("data-group", e);
            b.innerText = e;
            dropdown.appendChild(b);
        });
    }
}

function loadEvents(){
    //TODO: this has to be replaced with database query information extraction
    return [
        {title: 'Vacanza studio Londra', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.468868, lng: 9.206720},
        {title: 'Cena di Natale', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"], lat: 45.4507775, lng: 9.1709264},
        {title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.4513128, lng: 9.1734067},
        {title: 'Vacanza studio Catania', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.4502473, lng: 9.1752055},
        {title: 'Colletta alimentare', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.453261, lng: 9.179347},
        {title: 'Colletta pasquale', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.486604, lng: 9.186649},
        {title: 'Vacanza studio Trapani', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.483227, lng: 9.188763},
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
        return {lat: e.lat, lng: e.lng};
    }));

    //Shuffler handling
    window.demo = new Shuffler(document.querySelector('#card-space'), events.map(e => e.category));
    
    //Spinner handling
    Spinner.letThemComeBack();
}   
