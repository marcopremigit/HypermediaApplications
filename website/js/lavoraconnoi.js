window.onload = () => {
    Breadcrumbs.loadCrumbs([{
        page: "../index.html",
        title: "Home"
    },
    {
        page: "lavoraconnoi.html",
        title: "Lavora con noi"
    }
]);
}

const CardSpace = document.getElementById('card-space');
let myCard = new Card( CardSpace );
myCard.add('Ripetizioni','https://source.unsplash.com/random/1920x1080','../html/contattaci.html' );
myCard.add('Orientamento','https://source.unsplash.com/random/1920x1080','../html/contattaci.html' );
myCard.add('Responsabile Eventi','https://source.unsplash.com/random/1920x1080','../html/contattaci.html' );

