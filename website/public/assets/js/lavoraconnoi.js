const DB_URL = "https://ripe4u.herokuapp.com";

$(document).ready(() => {
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "lavoraconnoi.html",
            title: "Lavora con noi"
        }
    ]);
    
    //Query to database
    loadOpenPositions()
    .then(jobs => {
        //Cards and filters handling
        loadCardsAndFiltersJobs(jobs, false,"", '#jobs-card-space');
        let jobsJSON = {};
        jobs.map(e => {
            jobsJSON[e.id] = e;
         })
         saveInStorage('jobs', jobsJSON);
         saveInStorage('jobsElementsOrder', jobs.map(v => v.id));
        
        //Spinner handling
        Spinner.letThemComeBack();
    });
});

async function loadOpenPositions(){
    return await $.getJSON(DB_URL + "/jobs", (data, status) => {
        if(status === "success"){
            console.log(data);
            return data;
        }
        else
            console.error(status);
    });
}

