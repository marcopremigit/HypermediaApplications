const DB_URL = "https://ripe4u.herokuapp.com";

let event = null;
let events = null;
$(document).ready(() => {
    events = JSON.parse(localStorage.getItem('events'));
    loadEvent(window.location.href.split('id=')[1]);
});

function loadEvent(id){
    event = events[id];
    if(event === null || event === undefined){
        //TODO: something went wrong
    }
    
    //Breadcrumbs handling
    Breadcrumbs.showCrumbs(event.name);

    fillElements();
    loadEventsService(id)
    .then(services =>{
        if(services.length==0){
            Array.from(document.getElementsByClassName("disappear")).map(e => e.classList.add("d-none"));
        }else{
            Array.from(document.getElementsByClassName("disappear")).map(e => e.classList.remove("d-none"));
        }
        removeAllCards('services-card-space');
        loadCardsAndFilters(services, false, "inostriservizi-detail.html", '#services-card-space');
        let servicesJSON = {};
        services.map(e=>{
            servicesJSON[e.id] = e;
        });
        saveInStorage('services',servicesJSON);
        saveInStorage('servicesElementsOrder', services.map(v => v.id));
        //Spinner handling
        Spinner.letThemComeBack();
    })

    loadEventsVolunteer(id)
    .then(volunteer =>{
        removeAllCards('volunteer-card-space');
        loadCardsAndFilters(volunteer, false, "inostrivolontari-detail.html", '#volunteer-card-space');
        let volunteerJSON = {};
            volunteer.map(e=>{
            volunteerJSON[e.id] = e;
        });
        saveInStorage('volunteer',volunteerJSON);
        saveInStorage('volunteerElementsOrder', volunteer.map(v => v.id));
        //Spinner handling
        Spinner.letThemComeBack();
    })

    let place = JSON.parse(event.place);
    GMaps.initMap([{
        text: event.name,
        lat: place.lat,
        lng: place.lng
    }]);
}

function loadNextElement(goRight){
    let elementsOrder = localStorage.getItem('eventsElementsOrder').split(',');
    let indexOfEvent = elementsOrder.indexOf(event.id.toString());
    let length = elementsOrder.length;
    let nextId = elementsOrder[((indexOfEvent + 1*(goRight ? 1 : -1)) % length + length) % length];
    loadEvent(nextId);
}

function fillElements(){
    document.getElementById('eventName').innerText = event.name;
    document.getElementById('eventDescription').innerHTML = event.description;
    document.getElementById('eventStarts').innerHTML = formatDate(new Date(event.date_start));
    document.getElementById('eventEnds').innerHTML = formatDate(new Date(event.date_end));
    document.getElementById('availableSpots').innerText = event.available_places;
    document.getElementById('detail-img').src = event.image;
}

let formatDate = date => `${date.getDate()}-${date.getMonth() + 1}-${date.getUTCFullYear()}`;

async function loadEventsService(id_event){
    return await $.getJSON(DB_URL + "/event_service",
    {
        id_event: id_event
    },
    (data, status) => {
        if(status === "success"){
            return data;
        }
        else
            console.error(status);
    });
}

async function loadEventsVolunteer(id_event){
    return await $.getJSON(DB_URL + "/volunteer_event",
    {
        id_event: id_event
    },
    (data, status) => {
        if(status === "success"){
            return data;
        }
        else
            console.error(status);
    });
}