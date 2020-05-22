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
            title: "I nostri volontari" 
        }
    ]);

    //Query to database
    loadVolunteers()
    .then(volunteers => {
        //Cards and filters handling
        loadCardsAndFilters(volunteers, true,'inostrivolontari-detail.html', '#volunteers-card-space');
        let volunteersJSON = {};
        volunteers.map(e => {
            volunteersJSON[e.id] = e;
         })
         saveInStorage('volunteers', volunteersJSON);
         saveInStorage('volunteersElementsOrder', volunteers.map(v => v.id));
        
        //Shuffler handling
        new Shuffler('#volunteers-card-space', true);
        
        //Spinner handling
        Spinner.letThemComeBack();
    });


}); 

async function loadVolunteers(){
    return await $.getJSON(DB_URL + "/volunteers", (data, status) => {
        if(status === "success"){
            return data;
        }
        else
            console.error(status);
    });
}

