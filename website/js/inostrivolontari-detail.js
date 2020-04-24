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
    let elementsOrder = sessionStorage.getItem('elementsOrder').split(',');
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
    removeAllCards('card-space-services');
    removeAllCards('card-space-events');
    loadCardsAndFilters(services, false,"", 'card-space-services');
    let events = loadEvents();
    loadCardsAndFilters(events, false,"", 'card-space-events');

    //Spinner handling
    Spinner.letThemComeBack();
}