const DB_URL = "https://ripe4u.herokuapp.com";

$(document).ready(() => { 
    //Breadcrumbs handling
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "inostrieventi.html",
            title: "I nostri eventi"
        }
    ]);

    //Query to database
    loadEvents()
    .then(events => {
        //Cards and filters handling
        loadCardsAndFilters(events, true, 'inostrieventi-detail.html', '#events-card-space');
        let eventsJSON = {};
        events.map(e => {
            eventsJSON[e.id] = e;
        });
        saveInStorage('events', eventsJSON, true);
        saveInStorage('eventsElementsOrder', events.map(v => v.id));
        GMaps.initMap(events.map(e => {
            let place = JSON.parse(e.place);
            return {text: e.name, cat: e.category, lat: place.lat, lng: place.lng};
        }));
    
        //Shuffler handling
        new Shuffler('#events-card-space', events.map(e => e.category));
        
        //Spinner handling
        Spinner.letThemComeBack();
    })
    .catch(err => console.error(err));

});

async function loadEvents(){
    return await $.getJSON(DB_URL + "/events", (data, status) => {
        console.log(data);
        if(status === "success") return data;
        else console.error(status);
    })
}