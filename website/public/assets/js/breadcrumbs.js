const PAGES = {
    "chisiamo.html": "Chi siamo",
    "contattaci.html": "Contattaci",
    "lenostrenews.html": "Le nostre news",
    "raggiungici.html": "Raggiungici",
    "sostienici.html": "Sostienici",
    "inostrieventi.html": "I nostri eventi",
    "inostriservizi.html": "I nostri servizi",
    "inostrivolontari.html": "I nostri volontari",
    "lavoraconnoi.html": "Lavora con noi",
    "inostrieventi-detail.html": {page: "inostrieventi.html", title: "I nostri eventi"},
    "inostriservizi-detail.html": {page: "inostriservizi.html", title: "I nostri servizi"},
    "inostrivolontari-detail.html": {page: "inostrivolontari.html", title: "I nostri volontari"},
    "lenostrenews-detail.html": {page: "lenostrenews.html", title: "Le nostre news"},
};

$(document).ready(() => {
    Breadcrumbs.showCrumbs();
});

let Breadcrumbs = {
    loadCrumbs : function(crumbs){
        let crumbsDiv = $("#breadcrumbs");
        if(crumbsDiv === undefined || crumbsDiv === null) return;
        crumbsDiv.empty();
        crumbs.map( (c,i) => crumbsDiv.append(createCrumb(c, i === crumbs.length - 1)));
    },

    showCrumbs(name = null){
        let url = window.location.href;
        let page = url.substring(url.lastIndexOf('/')+1);
        let detail = page.includes('detail'); 
        if(detail && !name) return;
        if(detail) page = page.slice(0, page.lastIndexOf('?'));

        let cs = [
            {
                page: "../index.html",
                title: "Home"
            },
            {
                page: PAGES[page].page || page,
                title: PAGES[page].title || PAGES[page]
            }
        ];

        this.loadCrumbs(name ? cs.concat({title: name}) : cs);
    }
};

function createCrumb(e, isLast){
    let li = document.createElement('li');
    li.className = `breadcrumb-item ${isLast ? 'active': ''}`;
    if(isLast){
        li.setAttribute('aria-current', 'page');
        li.innerText = `${e.title}`;
    }
    else{
        let a = document.createElement('a');
        a.href = `${e.page}`;
        a.innerText = `${e.title}`;
        li.appendChild(a);
    }
    return li;
}