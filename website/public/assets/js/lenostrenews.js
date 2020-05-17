const DB_URL = "https://ripe4u.herokuapp.com";

$(document).ready(() =>  {
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "lenostrenews.html",
            title: "Le nostre news"
        }
    ]);


    loadNews()
    .then(news => {
        //Cards and filters handling
        loadCardsAndFilters(news, false,'lenostrenews-detail.html', '#news-card-space');
        let newsJSON = {};
        news.map(e => {
            newsJSON[e.id] = e;
         })
         saveInStorage('news', newsJSON);
         saveInStorage('newsElementsOrder', news.map(v => v.id));
        
        //Spinner handling
        Spinner.letThemComeBack();
    });

});



async function loadNews(){
    //TODO: this has to be replaced with database query information extraction
    return await $.getJSON(DB_URL + "/news", (data, status) => {
        if(status === "success"){
            console.log(data);
            return data;
        }
        else
            console.error(status);
    });
}