const DB_URL = "https://ripe4u.herokuapp.com";

$(document).ready(() => {
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "inostriservizi.html",
            title: "I nostri servizi"
        }
    ]);
  

    loadServices()
    .then(services => {
        //Cards and filters handling
        loadCardsAndFilters(services, true,'inostriservizi-detail.html', '#services-card-space');
        let servicesJSON = {};
        services.map(e => {
            servicesJSON[e.id] = e;
         })
         saveInStorage('services', servicesJSON);
         saveInStorage('servicesElementsOrder', services.map(v => v.id));
        
        //Shuffler handling
        new Shuffler('#services-card-space', services.map(v => v.category));
        
        //Spinner handling
        Spinner.letThemComeBack();
    });

});



async function loadServices(){
    //TODO: this has to be replaced with database query information extraction
    return await $.getJSON(DB_URL + "/services", (data, status) => {
        if(status === "success"){
            console.log(data);
            return data;
        }
        else
            console.error(status);
    });
}