let service = null;
let services = null;
const DB_URL = "https://ripe4u.herokuapp.com";


$(document).ready(() => {
    services = JSON.parse(localStorage.getItem('services'));
    loadService(window.location.href.split('id=')[1]);
});

function loadNextElement(goRight){
    let elementsOrder = localStorage.getItem('servicesElementsOrder').split(',');
    let indexOfservice = elementsOrder.indexOf(service.id.toString());
    let length = elementsOrder.length;
    let nextId = elementsOrder[((indexOfservice + 1*(goRight ? 1 : -1)) % length + length) % length];
    loadService(nextId);
}

function fillElements(){
    document.getElementById('serviceName').innerText = service.name;
    document.getElementById('serviceDescription').innerHTML = service.description;
    document.getElementById('detail-img').src = service.image;
}

function loadService(id){
    service = services[id];
    if(service === null || service === undefined){
        //TODO: something went wrong
    }
    
    //Breadcrumbs handling
    Breadcrumbs.showCrumbs(service.name);

    fillElements();

    //Query to database
    removeAllCards('events-card-space');
    removeAllCards('volunteers-card-space');

    loadEventsService(id)
    .then(events => {
        if(events.length==0){
            Array.from(document.getElementsByClassName("disappear")).map(e => e.classList.add("d-none"));
        }else{
            Array.from(document.getElementsByClassName("disappear")).map(e => e.classList.remove("d-none"));
        }
        loadCardsAndFilters(events, false,"inostrieventi-detail.html", '#events-card-space');
        let eventsJSON = {};
        events.map(e=>{
            eventsJSON[e.id] = e;
        })
        saveInStorage('events',eventsJSON);
        saveInStorage('eventsElementsOrder', events.map(v => v.id));
            
        //Spinner handling
        Spinner.letThemComeBack();

    })
   


    loadVolunteerServices(id)
    .then(volunteers => {
        loadCardsAndFilters(volunteers, false, "inostrivolontari-detail.html", '#volunteers-card-space');
        let volunteersJSON = {};
        volunteers.map(e=>{
            volunteersJSON[e.id] = e;
        })
        saveInStorage('volunteers',volunteersJSON);
        saveInStorage('volunteersElementsOrder', volunteers.map(v => v.id));
    
        //Spinner handling
        Spinner.letThemComeBack();
    })
   
}

async function loadVolunteerServices(id_service){
    return await $.getJSON(DB_URL + "/volunteer_service",
    {
        id_service: id_service
    },
    (data, status) => {
        if(status === "success"){
            return data;
        }
        else
            console.error(status);
    });
}

async function loadEventsService(id_service){
    return await $.getJSON(DB_URL + "/event_service",
    {
        id_service: id_service
    },
    (data, status) => {
        if(status === "success"){
            return data;
        }
        else
            console.error(status);
    });
}