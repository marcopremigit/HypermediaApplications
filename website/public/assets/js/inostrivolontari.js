$(document).ready(() => {
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
    loadCardsAndFilters(volunteers, true,'inostrivolontari-detail.html', '#volunteers-card-space', 'col-3');
    let volunteersJSON = {};
    volunteers.map(e => {
        volunteersJSON[e.id] = e;
    })
    saveInStorage('volunteers', volunteersJSON);
    saveInStorage('volunteersElementsOrder', volunteers.map(v => v.id));
    
    //Shuffler handling
    new Shuffler('#volunteers-card-space', volunteers.map(v => v.category));
    
    //Spinner handling
    Spinner.letThemComeBack();
}); 

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