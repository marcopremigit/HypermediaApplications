let vId = null;

const DB_URL = "https://ripe4u.herokuapp.com";


$(document).ready(() => {
    loadVolunteer(window.location.href.split('id=')[1]);
});

function loadNextElement(goRight){
    let elementsOrder = localStorage.getItem('volunteersElementsOrder').split(',');
    let indexOfVolunteer = elementsOrder.indexOf(vId);
    let length = elementsOrder.length;
    let nextId = elementsOrder[((indexOfVolunteer + 1*(goRight ? 1 : -1)) % length + length) % length];

    document.getElementById('detail-img').classList.add("invisible");
    document.getElementById("spinner").classList.remove("invisible")
    loadVolunteer(nextId);
}

function fillElements(volunteer){
    document.getElementById('volunteerName').innerText = volunteer.name;
    document.getElementById('whoami').innerHTML = volunteer.description;
    document.getElementById('mycareer').innerHTML = volunteer.career;
    document.getElementById('phone').innerHTML = volunteer.phone;
    document.getElementById('email').innerHTML = volunteer.email;
    document.getElementById('detail-img').src = volunteer.image;
    
    document.getElementById('servicesTitle').innerHTML = `I servizi di ${volunteer.name}`;
    document.getElementById('eventsTitle').innerHTML = `I prossimi eventi di ${volunteer.name}`;
}

function loadedDetailImg(){
    Spinner.letThemComeBack();
}

function loadVolunteer(id){
    getVolunteerFromDatabase(id)
    .then(v =>  {
        let volunteer = v[0];
        //Breadcrumbs handling
        Breadcrumbs.showCrumbs(volunteer.name);
    
        fillElements(volunteer);
    
        loadVolunteerServices(id)
        .then(services => {
            removeAllCards('services-card-space');
            loadCardsAndFilters(services, false, "inostriservizi-detail.html", '#services-card-space');
            saveInStorage('servicesElementsOrder', services.map(v => v.id));
        })
        .catch(err => {
            //TODO
            console.error('No services found');
        });
        
        
        loadVolunteerEvents(id)
        .then(events =>{
            if(events.length==0){
                Array.from(document.getElementsByClassName("disappear")).map(e => e.classList.add("d-none"));
            }else{
                Array.from(document.getElementsByClassName("disappear")).map(e => e.classList.remove("d-none"));
            }
            removeAllCards('events-card-space');
            loadCardsAndFilters(events, false, "inostrieventi-detail.html", '#events-card-space');
            saveInStorage('eventsElementsOrder', events.map(v => v.id));
        })
        .catch(err => {
            Array.from(document.getElementsByClassName("disappear")).map(e => e.classList.add("d-none"));
        }); 
        vId = id;
    })
    .catch(err => {
        //TODO: something went wrong
        console.error(err);
    });
    
}

let getVolunteerFromDatabase = async id => await callToDb(`/volunteers/${id}`);
let loadVolunteerServices = async id_volunteer => await callToDb("/volunteer_service",  {id_volunteer: id_volunteer});
let loadVolunteerEvents = async id_volunteer => await callToDb("/volunteer_event", {id_volunteer: id_volunteer});

function callToDb(api, params){
    return $.getJSON(DB_URL + api, params, 
        (data, status) => {
        if(status === 'success') return data;
        else console.error(status);
        return null;
    });
}