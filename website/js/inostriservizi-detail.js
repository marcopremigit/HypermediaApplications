let service = null;
let services = null;
window.onload = () => {
    services = JSON.parse(sessionStorage.getItem('services'));
    loadService(window.location.href.split('id=')[1]);
}


function loadEvents(){
    //TODO: this has to be replaced with database query information extraction
    return [
        {id: 'ICSA', title: 'Vacanza studio Londra', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
        {id: 'csaicas', title: 'Cena di Natale', img: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"]},
        {id: 'csaiodsa', title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
    ];
}

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

function loadNextElement(goRight){
    let elementsOrder = sessionStorage.getItem('elementsOrder').split(',');
    let indexOfservice = elementsOrder.indexOf(service.id);
    let nextId = elementsOrder[(indexOfservice + 1*(goRight ? 1 : -1)) % elementsOrder.length];
    loadService(nextId);
}

function fillElements(){
    document.getElementById('serviceName').innerText = service.title;
    document.getElementById('serviceDescription').innerHTML = service.description;
    document.getElementById('eventsTitle').innerHTML = `Eventi collegati`;
}

function loadService(id){
    service = services[id];
    
    if(service === null || service === undefined){

        //TODO: something went wrong
    }
    
    //Breadcrumbs handling
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "inostriservizi.html",
            title: "I nostri servizi"
        },
        {
            //TODO: mettere in title il nome del volontario
            page: "inostrivolontari-detail.html",
            title: service.title
        }
    ]);

    fillElements();

    //Query to database
    removeAllCards('card-space-events');
    removeAllCards('card-space-volunteers');
    let events = loadEvents();
    loadCardsAndFilters(events, false,"", 'card-space-events');
    let volunteers = loadVolunteers();
    loadCardsAndFilters(volunteers,false,"inostrivolontari-detail.html",'card-space-volunteers')

    //Spinner handling
    Spinner.letThemComeBack();
}