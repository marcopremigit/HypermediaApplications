$(document).ready(() => {
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "contattaci.html",
            title: "Contattaci"
        }
    ]);
    let form = $("#contact-form");

    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            sendEmail()
        }
        form.classList.add('was-validated');
    }, false); 
});

function writeAnotherEmail(){
    $("#subject").value='';
    $("#message").value='';
    $("#alert-success").style.display="none";
    $("#contact-form").style.display="block";
}