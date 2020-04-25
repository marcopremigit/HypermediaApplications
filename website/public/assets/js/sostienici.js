$(document).ready(() =>  {
    Breadcrumbs.loadCrumbs([
    {
        page: "../index.html",
        title: "Home"
    },
    {
        page: "sostienici.html",
        title: "Sostienici"
    }
]);
});


$(window).resize(function() {
    var width = $(window).width();
    if (width < 320){
      alert('Your screen is too small');
    }
});