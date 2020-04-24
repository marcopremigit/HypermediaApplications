$(document).ready(() => {
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "lavoraconnoi.html",
            title: "Lavora con noi"
        }
    ]);
    
    //Query to database
    let positions = loadOpenPositions();

    //Cards and filters handling
    loadCardsAndFilters(positions, false,"", '#jobs-card-space', 'col-3');

    //Spinner handling
    Spinner.letThemComeBack();
});

function loadOpenPositions(){
    //TODO: this has to be replaced with database query information extraction
    return [
        {id: 'dksnao', title: 'Vacanza studio Londra', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"], lat: 45.468868, lng: 9.206720},
        {id: 'dksnae', title: 'Cena di Natale', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"], lat: 45.185242, lng: 9.156010},
        {id: 'dksnar', title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.4513128, lng: 9.1734067},
        {id: 'dksnar', title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.4513128, lng: 9.1734067},
        {id: 'dksnar', title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.4513128, lng: 9.1734067},
        {id: 'dksnar', title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', link: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"], lat: 45.4513128, lng: 9.1734067},
    ];
}

