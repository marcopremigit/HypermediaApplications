let event = null;
let events = null;
$(document).ready(() => {
    events = JSON.parse(sessionStorage.getItem('events'));
    loadEvent(window.location.href.split('id=')[1]);
});

function loadEvent(id){
    event = events[id];
    if(event === null || event === undefined){
        //TODO: something went wrong
    }
    
    //Breadcrumbs handling
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "inostrieventi.html",
            title: "I nostri eventi"
        },
        {
            //TODO: mettere in title il nome dell'evento
            page: "inostrieventi-detail.html",
            title: event.title
        }
    ]);

    fillElements();

    let services = loadServices();
    removeAllCards('services-card-space');
    loadCardsAndFilters(services, false,'inostriservizi-detail.html', '#services-card-space', 'col-3');
    let servicesJSON = {};
    services.map(s=>{
        servicesJSON[s.id] = s;
    });
    GMaps.initMap([{
        text: event.title,
        lat: event.lat,
        lng: event.lng
    }]);
    saveInStorage('services',servicesJSON);
    saveInStorage('servicesElementsOrder', services.map(s => s.id));


    //Spinner handling
    Spinner.letThemComeBack();
}

function loadNextElement(goRight){
    let elementsOrder = sessionStorage.getItem('eventsElementsOrder').split(',');
    let indexOfEvent = elementsOrder.indexOf(event.id);
    let length = elementsOrder.length;
    let nextId = elementsOrder[((indexOfEvent + 1*(goRight ? 1 : -1)) % length + length) % length];
    loadEvent(nextId);
}

function loadResponsible(){
    return {id: 'ICSA', title: 'Giancarla Rossa', description: 'Ciao, sono Giancarla Rossa', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]}; 
}

function loadServices(){
    return [
        {id: 'ICSA', title: 'Vacanza studio Londra', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
        {id: 'csaicas', title: 'Cena di Natale', img: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"]},
        {id: 'csaiodsa', title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
        {id: 'sdasda', title: 'Vacanza studio Londra', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
        {id: 'csfgdsfdsaicas', title: 'Cena di Natale', img: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"]},
        {id: 'csagsdfsiodsa', title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
    ]; 
}

function fillElements(){
    document.getElementById('eventName').innerText = event.title;
    document.getElementById('eventDescription').innerHTML = event.description;
    document.getElementById('eventStarts').innerHTML = event.starts;
    document.getElementById('eventEnds').innerHTML = event.ends;
    document.getElementById('availableSpots').innerText = event.spots;

    let responsible = loadResponsible();
    document.getElementById('responsibleLink').href = `inostrivolontari-detail.html?id=${responsible.id}`;
    document.getElementById('responsibleImg').src = responsible.img;
    document.getElementById('responsibleName').innerText = responsible.title;
}