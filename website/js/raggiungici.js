window.onload =() =>{
    Breadcrumbs.loadCrumbs([
        {
        page: "../index.html",
        title: "Home"
        },
        {
        page: "raggiungici.html",
        title: "Raggiungici"
        }
    ]) 
}

function initMap() {
    let coordinates = {lat: 45.468868, lng: 9.206720}
    let map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 18
    });
    let marker = new google.maps.Marker({position: coordinates, map: map});
}