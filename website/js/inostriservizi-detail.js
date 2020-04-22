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

function loadNextElement(goRight){
    let elementsOrder = sessionStorage.getItem('elementsOrder').split(',');
    let indexOfservice = elementsOrder.indexOf(service.id);
    let nextId = elementsOrder[(indexOfservice + 1*(goRight ? 1 : -1)) % elementsOrder.length];
    loadService(nextId);
}

function fillElements(){
    document.getElementById('volunteerName').innerText = service.title;
    document.getElementById('whoami').innerHTML = service.description;
    document.getElementById('mycareer').innerHTML = service.description;
    document.getElementById('mycontacts').innerHTML = service.description;
    
    document.getElementById('servicesTitle').innerHTML = `I servizi di ${service.title}`;
    document.getElementById('eventsTitle').innerHTML = `I prossimi eventi di ${service.title}`;
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
            page: "inostrivolontari.html",
            title: "I nostri volontari"
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
    let events = loadEvents();
    loadCardsAndFilters(events, false,"", 'card-space-events');

    //Spinner handling
    Spinner.letThemComeBack();
}