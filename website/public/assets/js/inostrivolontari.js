const DB_URL = "https://ripe4u.herokuapp.com";

$(document).ready(() => {
    //Query to database
    loadVolunteers()
    .then(volunteers => {
        //Cards and filters handling
        loadCardsAndFilters(volunteers, true,'inostrivolontari-detail.html', '#volunteers-card-space');
        saveInStorage('volunteersElementsOrder', volunteers.map(v => v.id));
        
        //Shuffler handling
        new Shuffler('#volunteers-card-space', true);
        
        //Spinner handling
        Spinner.letThemComeBack();
    });


}); 

async function loadVolunteers(){
    return await $.getJSON(DB_URL + "/volunteers",{
        fields: ['id', 'name', 'image', 'category']
    }, (data, status) => {
        if(status === "success") return data;
        else console.error(status);
        return null;
    });
}

