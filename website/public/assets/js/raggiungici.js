$(document).ready(() => {
    let coordinates = {lat: 45.468868, lng: 9.206720};
    let map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 18
    });
    new google.maps.Marker({position: coordinates, map: map});
});