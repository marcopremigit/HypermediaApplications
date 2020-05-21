let volunteer = null;
let volunteers = null;

const DB_URL = "https://ripe4u.herokuapp.com";


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
    let indexOfVolunteer = elementsOrder.indexOf(volunteer.id.toString());
    let length = elementsOrder.length;
    let nextId = elementsOrder[((indexOfVolunteer + 1*(goRight ? 1 : -1)) % length + length) % length];
    loadVolunteer(nextId);
}

function fillElements(){
    document.getElementById('volunteerName').innerText = volunteer.name;
    document.getElementById('whoami').innerHTML = volunteer.description;
    document.getElementById('mycareer').innerHTML = volunteer.career;
    document.getElementById('phone').innerHTML = volunteer.phone;
    document.getElementById('email').innerHTML = volunteer.email;
    document.getElementById('detail-img').setAttribute("src",volunteer.image );


    
    document.getElementById('servicesTitle').innerHTML = `I servizi di ${volunteer.name}`;
    document.getElementById('eventsTitle').innerHTML = `I prossimi eventi di ${volunteer.name}`;
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
            title: volunteer.name
        }
    ]);

    fillElements();

    //Query to database
    let services = loadServices();
    removeAllCards('services-card-space');
    loadCardsAndFilters(services, false, "inostriservizi-detail.html", '#services-card-space');
    let servicesJSON = {};
    services.map(e=>{
        servicesJSON[e.id] = e;
    });
    saveInStorage('services',servicesJSON);
    saveInStorage('servicesElementsOrder', services.map(v => v.id));
    
    let events = loadEvents();
    removeAllCards('events-card-space');
    loadCardsAndFilters(events, false, "inostrieventi-detail.html", '#events-card-space');
    let eventsJSON = {};
    events.map(e=>{
        eventsJSON[e.id] = e;
    });
    saveInStorage('events',eventsJSON);
    saveInStorage('eventsElementsOrder', events.map(v => v.id));

    //Spinner handling
    Spinner.letThemComeBack();

    loadVolunteerServices(id);
}


async function loadVolunteerServices(id_volunteer){
    return await $.getJSON(DB_URL + "/volunteer_service",
    {
        id_volunteer: id_volunteer
    },
    (data, status) => {
        if(status === "success"){
            console.log(data);
            return data;
        }
        else
            console.error(status);
    });
}