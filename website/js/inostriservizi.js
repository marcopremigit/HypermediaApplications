function loadServices(){
    //TODO: this has to be replaced with database query information extraction
    return [
        {id: "xdxd", title: 'Vacanza studio Londra', description: "Vacanza studio Londa", img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.468868, lng: 9.206720},
        {id: "trpòpò", title: 'Cena di Natale', description: "Cena di Natale", img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"], lat: 45.4507775, lng: 9.1709264},
        {id: "ciaoo", title: 'Colletta Natalizia', description: "Colletta Natalizia", img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.4513128, lng: 9.1734067},
        {id: "asfssada", title: 'Vacanza studio Catania', description: "Vacanza studio Caatania", img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.4502473, lng: 9.1752055},
        {id: "sassadas", title: 'Colletta alimentare', description: "Colletta alimentare", img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.453261, lng: 9.179347},
        {id: "dsdass", title: 'Colletta pasquale', description: "Colletta pasquale", img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.486604, lng: 9.186649},
        {id: "csdsad", title: 'Vacanza studio Trapani', description: "Vacanza studio Trapani", img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.483227, lng: 9.188763},
    ];
}

window.onload = () => {
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "inostriservizi.html",
            title: "I nostri servizi"
        }
    ]);
  
    //Query to database
    let services = loadServices();
    
    //Cards and filters handling
    loadCardsAndFilters(services, true, "inostriservizi-detail.html", 'card-space');
    let servicesJSON = {};
    services.map(e => {
        servicesJSON[e.id] = e;
    })
    saveInStorage('services', servicesJSON, true);
    saveInStorage('elementsOrder', services.map(v => v.id));

    //Shuffler handling
    window.demo = new Shuffler(document.querySelector('#card-space'), services.map(e => e.category));
    
    //Spinner handling
    Spinner.letThemComeBack();
}