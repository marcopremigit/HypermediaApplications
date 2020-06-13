let sId = null;

const DB_URL = "https://ripe4u.herokuapp.com";

$(document).ready(() => {
    loadService(window.location.href.split('id=')[1]);
});

function loadNextElement(goRight){
    let elementsOrder = localStorage.getItem('servicesElementsOrder').split(',');
    let indexOfservice = elementsOrder.indexOf(sId);
    let length = elementsOrder.length;
    let nextId = elementsOrder[((indexOfservice + 1*(goRight ? 1 : -1)) % length + length) % length];
    loadService(nextId);
}

function fillElements(service){
    document.getElementById('serviceName').innerText = service.name;
    document.getElementById('serviceDescription').innerHTML = service.description;
    document.getElementById('detail-img').src = service.image;
}

function loadedDetailImg(){
    Spinner.letThemComeBack();
}

function loadService(id){

    loadServiceFromDb(id)
    .then(s => {
        let service = s[0];
        //Breadcrumbs handling
        Breadcrumbs.showCrumbs(service.name);

        fillElements(service);

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
            saveInStorage('eventsElementsOrder', events.map(v => v.id));
        })
        .catch(err => {
            Array.from(document.getElementsByClassName("disappear")).map(e => e.classList.add("d-none"));
        });
    
        loadVolunteerServices(id)
        .then(volunteers => {
            loadCardsAndFilters(volunteers, false, "inostrivolontari-detail.html", '#volunteers-card-space');
            saveInStorage('volunteersElementsOrder', volunteers.map(v => v.id));
        })
        .catch(err => {
            //TODO
            console.error('No services found');
        });

        sId = id;
    })
    .catch(err => {
        //TODO: something went wrong
        console.error(err);
    });
}

let loadServiceFromDb = async id => await callToDb(`/services/${id}`);
let loadVolunteerServices = async id_service => await callToDb("/volunteer_service", {id_service: id_service});
let loadEventsService = async id_service => await callToDb("/event_service", {id_service: id_service});

function callToDb(api, params){
    return $.getJSON(DB_URL + api, params, 
        (data, status) => {
        if(status === 'success') return data;
        else console.error(status);
        return null;
    });
}