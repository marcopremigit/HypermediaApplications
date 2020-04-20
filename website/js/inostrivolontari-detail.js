window.onload = () => {
    let data = loadData();
    if(data === null || data === undefined){
        //TODO: something went wrong
    }
    //Breadcrumbs handling
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "inostrivolontari.html",
            title: "I nostri volontari"
        },
        {
            //TODO: mettere in title il nome del volontario
            page: "inostrivolontari-detail.html",
            title: "Volontario"
        }
    ]);

   //Query to database
   let services = loadServices();
   loadCardsAndFilters(services, false);
   //Spinner handling
   Spinner.letThemComeBack();
}

function loadServices(){
    //TODO: this has to be replaced with database query information extraction
    return [
        {id: 'ICSA', title: 'Vacanza studio Londra', img: 'https://source.unsplash.com/random/1920x1080', category: ["Vacanza studio"]},
        {id: 'csaicas', title: 'Cena di Natale', img: 'https://source.unsplash.com/random/1920x1080', category: ["Cena", "Vattelapesca"]},
        {id: 'csaiodsa', title: 'Colletta Natalizia', img: 'https://source.unsplash.com/random/1920x1080', category: ["Colletta"]},
    ];
}

function loadData(){
    let id = window.location.href.split('id=')[1];
    let dataToReturn = JSON.parse(localStorage.getItem(id));
    localStorage.clear(); // Clear the localStorage
    return dataToReturn;
}