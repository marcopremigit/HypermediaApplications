const DB_URL = "https://ripe4u.herokuapp.com";

$(document).ready(() =>  {
    loadNews()
    .then(news => {
        //Cards and filters handling
        loadCardsAndFilters(news.slice(0, 3), false,'pages/lenostrenews-detail.html', '#news-card-space');
        saveInStorage('newsElementsOrder', news.map(v => v.id));
        //Shuffler handling
        new Shuffler('#news-card-space', false);
        
        //Spinner handling
        Spinner.letThemComeBack();
    });

});



async function loadNews(){
    return await $.getJSON(DB_URL + "/news",
        (data, status) => {
        if(status === "success") return data;
        else console.error(status);
        return null;
    });
}