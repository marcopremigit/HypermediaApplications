function loadNews(){
    //TODO: this has to be replaced with database query information extraction
    return [
        {id: 'ICSA', title: 'COVID-19', description: 'Ciao, sono COVID-19', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
        {id: 'csaicas', title: 'COVID-20', description: 'Ciao, sono COVID-20', img: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"]},
        {id: 'csaiodsa', title: 'COVID-21', description: 'Ciao, sono COVID-21', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
        {id: 'sadlsasdk', title: 'COVID Blu', description: 'Ciao, sono COVID Blu', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
        {id: 'snakjoca', title: 'COVID Verde', description: 'Ciao, sono COVID Verde', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
        {id: 'fksaod', title: 'COVID Gialla', description: 'Ciao, sono COVID Gialla', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
        {id: 'kofgdap', title: 'COVID Rosa', description: 'Ciao, sono COVID Rosa', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
    ];
}

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
  
    let news = loadNews();
    //Query to database
    //Cards and filters handling
    loadCardsAndFilters(news, true,'lenostrenews-detail.html', 'card-space');
    let newsJSON = {};
    news.map(e => {
        newsJSON[e.id] = e;
    })
    saveInStorage('news', newsJSON, true);
    saveInStorage('newsElementsOrder', news.map(v => v.id));
    
    //Shuffler handling
    window.demo = new Shuffler(document.querySelector('#card-space'), news.map(e => e.category));
    
    //Spinner handling
    Spinner.letThemComeBack();
});