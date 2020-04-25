let volunteer = null;
let volunteers = null;
$(document).ready(() => {
    volunteers = JSON.parse(sessionStorage.getItem('volunteers'));
    loadVolunteer(window.location.href.split('id=')[1]);
});

function loadServices(){
    //TODO: this has to be replaced with database query information extraction
    return [
        {id: 'ICSA', title: 'Vacanza studio Londra', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
        {id: 'csaicas', title: 'Cena di Natale', img: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"]},
        {id: 'csaiodsa', title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
    ];
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
    let elementsOrder = sessionStorage.getItem('volunteersElementsOrder').split(',');
    let indexOfVolunteer = elementsOrder.indexOf(volunteer.id);
    let length = elementsOrder.length;
    let nextId = elementsOrder[((indexOfVolunteer + 1*(goRight ? 1 : -1)) % length + length) % length];
    loadVolunteer(nextId);
}

function fillElements(){
    document.getElementById('volunteerName').innerText = volunteer.title;
    document.getElementById('whoami').innerHTML = volunteer.description;
    document.getElementById('mycareer').innerHTML = volunteer.description;
    document.getElementById('mycontacts').innerHTML = volunteer.description;
    
    document.getElementById('servicesTitle').innerHTML = `I servizi di ${volunteer.title}`;
    document.getElementById('eventsTitle').innerHTML = `I prossimi eventi di ${volunteer.title}`;
}

function loadVolunteer(id){
    volunteer = volunteers[id];
    
    if(volunteer === null || volunteer === undefined){
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
            title: volunteer.title
        }
    ]);

    fillElements();

    //Query to database
    let services = loadServices();
    removeAllCards('services-card-space');
    loadCardsAndFilters(services, false, "inostriservizi-detail.html", '#services-card-space', 'col-3');
    let servicesJSON = {};
    services.map(e=>{
        servicesJSON[e.id] = e;
    });
    saveInStorage('services',servicesJSON);
    saveInStorage('servicesElementsOrder', services.map(v => v.id));
    
    let events = loadEvents();
    removeAllCards('events-card-space');
    loadCardsAndFilters(events, false, "inostrieventi-detail.html", '#events-card-space', 'col-3');
    let eventsJSON = {};
    events.map(e=>{
        eventsJSON[e.id] = e;
    });
    saveInStorage('events',eventsJSON);
    saveInStorage('eventsElementsOrder', events.map(v => v.id));

    //Spinner handling
    Spinner.letThemComeBack();
}