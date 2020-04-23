function loadVolunteers(){
    //TODO: this has to be replaced with database query information extraction
    return [
        {id: 'ICSA', title: 'Giancarla Rossa', description: 'Ciao, sono Giancarla Rossa', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
        {id: 'csaicas', title: 'Giancarla Bianca', description: 'Ciao, sono Giancarla Bianca', img: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"]},
        {id: 'csaiodsa', title: 'Giancarla Nera', description: 'Ciao, sono Giancarla Nera', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
        {id: 'sadlsasdk', title: 'Giancarla Blu', description: 'Ciao, sono Giancarla Blu', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
        {id: 'snakjoca', title: 'Giancarla Verde', description: 'Ciao, sono Giancarla Verde', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
        {id: 'fksaod', title: 'Giancarla Gialla', description: 'Ciao, sono Giancarla Gialla', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
        {id: 'kofgdap', title: 'Giancarla Rosa', description: 'Ciao, sono Giancarla Rosa', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
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
    let volunteersJSON = {};
    volunteers.map(e => {
        volunteersJSON[e.id] = e;
    })
    saveInStorage('volunteers', volunteersJSON);
    saveInStorage('elementsOrder', volunteers.map(v => v.id));
    
    //Shuffler handling
    window.demo = new Shuffler(document.querySelector('#card-space'), volunteers.map(e => e.category));
    
    //Spinner handling
    Spinner.letThemComeBack();
}   


