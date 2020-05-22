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
        let dropdowns = $('.months');
        [...new Set(events.map(e => `${(new Date(e.date_start)).getUTCFullYear()}/${(new Date(e.date_start)).getMonth() + 1}`).flat())]
        .map(c => { 
            Array.from(dropdowns).map( d =>{
                let b = document.createElement('button');
                b.className = 'dropdown-item';
                b.setAttribute('type', 'button');
                b.setAttribute('data-month', c);
                b.innerText = c;
                d.append(b);
            });
        });
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
        new Shuffler('#events-card-space',true, true);
        
        //Spinner handling
        Spinner.letThemComeBack();
    })
    .catch(err => console.error(err));

});

async function loadEvents(){
    return await $.getJSON(DB_URL + "/events", (data, status) => {
        if(status === "success") return data;
        else console.error(status);
    })
}