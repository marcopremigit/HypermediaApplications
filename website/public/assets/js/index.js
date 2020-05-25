const DB_URL = "https://ripe4u.herokuapp.com";

$(document).ready(() =>  {
    loadNews()
    .then(news => {
        //Cards and filters handling
        loadCardsAndFilters(news, false,'pages/lenostrenews-detail.html', '#news-card-space');
        let newsJSON = {};
        news.map(e => {
            newsJSON[e.id] = e;
         })
         saveInStorage('news', newsJSON);
         saveInStorage('newsElementsOrder', news.map(v => v.id));
        //Shuffler handling
        new Shuffler('#news-card-space', false);
        
        //Spinner handling
        Spinner.letThemComeBack();
    });

});



async function loadNews(){
    return await $.getJSON(DB_URL + "/news",
        {
            limit:3
        },
        (data, status) => {
        if(status === "success"){
            return data;
        }
        else
            console.error(status);
    });
}