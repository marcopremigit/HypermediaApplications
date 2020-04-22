let news = null;
let news_ = null;
window.onload = () => {
    news_ = JSON.parse(sessionStorage.getItem('news'));
    loadNews(window.location.href.split('id=')[1]);
}

function loadNextElement(goRight){
    let elementsOrder = sessionStorage.getItem('elementsOrder').split(',');
    let indexOfNews = elementsOrder.indexOf(news.id);
    let nextId = elementsOrder[(indexOfNews + 1*(goRight ? 1 : -1)) % elementsOrder.length];
    loadNews(nextId);
}

function fillElements(){
    document.getElementById('newsName').innerText = news.title;
    document.getElementById('news_Name').innerText = news.title;
    document.getElementById('newsDescription').innerHTML = news.description;
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
            //TODO: mettere in title il nome del volontario
            page: "lenostrenews-detail.html",
            title: news.title
        }
    ]);

    fillElements();

    //Spinner handling
    Spinner.letThemComeBack();
}