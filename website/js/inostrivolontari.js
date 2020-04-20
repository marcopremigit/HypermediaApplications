function loadVolunteers(){
    //TODO: this has to be replaced with database query information extraction
    return [
        {id: 'ICSA', title: 'Vacanza studio Londra', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
        {id: 'csaicas', title: 'Cena di Natale', img: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"]},
        {id: 'csaiodsa', title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
        {id: 'sadlsasdk', title: 'Vacanza studio Catania', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
        {id: 'snakjoca', title: 'Colletta alimentare', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
        {id: 'fksaod', title: 'Colletta pasquale', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
        {id: 'kofgdap', title: 'Vacanza studio Trapani', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
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
            title: "I nostri volontari"
        }
    ]);

    //Query to database
    let volunteers = loadVolunteers();

    //Cards and filters handling
    loadCardsAndFilters(volunteers, true,'inostrivolontari-detail.html', 'card-space');
    
    //Shuffler handling
    window.demo = new Shuffler(document.querySelector('#card-space'), volunteers.map(e => e.category));
    
    //Spinner handling
    Spinner.letThemComeBack();
}   


