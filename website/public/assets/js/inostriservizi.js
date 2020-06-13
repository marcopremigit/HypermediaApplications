const DB_URL = "https://ripe4u.herokuapp.com";

$(document).ready(() => {
    loadServices()
    .then(services => {
        //Cards and filters handling
        loadCardsAndFilters(services, true,'inostriservizi-detail.html', '#services-card-space');
        saveInStorage('servicesElementsOrder', services.map(v => v.id));
        
        //Shuffler handling
        new Shuffler('#services-card-space', true);
        
        //Spinner handling
        Spinner.letThemComeBack();
    });

});



async function loadServices(){
    return await $.getJSON(DB_URL + "/services", (data, status) => {
        if(status === "success") return data;
        else console.error(status);
        return null;
    });
}