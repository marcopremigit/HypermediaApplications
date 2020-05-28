let nId = null;

const DB_URL = "https://ripe4u.herokuapp.com";

$(document).ready(() =>  {
    loadNews(window.location.href.split('id=')[1]);
});

function loadNextElement(goRight){
    let newsElementsOrder = localStorage.getItem('newsElementsOrder').split(',');
    let indexOfNews = newsElementsOrder.indexOf(nId);
    indexOfNews? indexOfNews= (indexOfNews + 1*(goRight ? 1 : -1)) % newsElementsOrder.length : indexOfNews=(indexOfNews + 1*(goRight ? 1 : (newsElementsOrder.length)-1));
    let nextId = newsElementsOrder[indexOfNews];
    loadNews(nextId);
}

function fillElements(news){
    document.getElementById('newsName').innerText = news.name;
    document.getElementById('news_Name').innerText = news.name;
    document.getElementById('newsDescription').innerHTML = news.long_description;
    document.getElementById('detail-img').src = news.image;
}

function loadNews(id){
    loadNewsFromDb(id)
    .then(n => {
        news = n[0];
        //Breadcrumbs handling
        Breadcrumbs.showCrumbs(news.name);
        fillElements(news);
    
        //Spinner handling
        Spinner.letThemComeBack();
        nId = id;
    })
    .catch(err => {
        //TODO: something went wrong
        console.error(err);
    })
}

async function loadNewsFromDb(id){
    return await $.getJSON(DB_URL + `/news/${id}`,
    (data, status) => {
        if(status === 'success') return data;
        else console.error(status);
        return null;
    })
}