let news = null;
let news_ = null;
$(document).ready(() =>  {
    news_ = JSON.parse(localStorage.getItem('news'));
    console.log("NEWS: "+news_)
    loadNews(window.location.href.split('id=')[1]);
});

function loadNextElement(goRight){
    let newsElementsOrder = localStorage.getItem('newsElementsOrder').split(',');
    let indexOfNews = newsElementsOrder.indexOf(news.id.toString());
    indexOfNews? indexOfNews= (indexOfNews + 1*(goRight ? 1 : -1)) % newsElementsOrder.length : indexOfNews=(indexOfNews + 1*(goRight ? 1 : (newsElementsOrder.length)-1));
    let nextId = newsElementsOrder[indexOfNews];
    loadNews(nextId);
}

function fillElements(){
    $('#newsName').innerText = news.name;
    $('#news_Name').innerText = news.name;
    $('#newsDescription').innerHTML = news.long_description;
    $('#detail-img').src = news.image;
}

function loadNews(id){
    news = news_[id];
    
    if(news === null || news === undefined){
        //TODO: something went wrong
    }
    
    //Breadcrumbs handling
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "lenostrenews.html",
            title: "Le nostre news"
        },
        {
         
            page: "lenostrenews-detail.html",
            title: news.name
        }
    ]);

    fillElements();

    //Spinner handling
    Spinner.letThemComeBack();
}