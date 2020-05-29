window.onload = () => {
    Breadcrumbs.loadCrumbs([
        {
            page: "homepage.html",
            title: "Home"
        },
        {
            page: "contattaci.html",
            title: "Contattaci"
        }
    ]);
    let form = document.getElementById("contact-form");

    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            sendEmail()
        }
        form.classList.add('was-validated');
    }, false); 
    
}


function sendEmail() {
    document.getElementById("contact-form").style.display="none";
    document.getElementById("alert-success").style.display="block";  

}

function writeAnotherEmail(){
    document.getElementById("subject").value='';
    document.getElementById("message").value='';
    document.getElementById("alert-success").style.display="none";
    document.getElementById("contact-form").style.display="block";

}



