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
            page: "inostrieventi-detail.html",
            title: event.name
        }
    ]);

    fillElements();
    loadEventsService(id)
    .then(services =>{
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
    $('#eventName').innerText = event.name;
    $('#eventDescription').innerHTML = event.description;
    $('#eventStarts').innerHTML = formatDate(new Date(event.date_start));
    $('#eventEnds').innerHTML = formatDate(new Date(event.date_end));
    $('#availableSpots').innerText = event.available_places;
    $('#detail-img').setAttribute("src", event.image);
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