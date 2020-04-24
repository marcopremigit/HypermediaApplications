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
});

function sendEmail() {
    let value = document.getElementById('contact-form'); 
    var email =  value.querySelector("#email").value; 
    var subject = value.querySelector("#subject").value; 
    var message = value.querySelector("#message").value; 
	Email.send({
	Host: "smtp.gmail.com",
	Username : "ripe4u4@gmail.com",
	Password : "ripe4hypermedia",
	To : 'ripe4u4@gmail.com',
	From : email,
	Subject : subject,
	Body : message,
    }).then(m => {
        if(m==="OK"){
            document.getElementById("contact-form").style.display="none";
            document.getElementById("alert-success").style.display="block";   
        }else{
            document.getElementById("contact-form").style.display="none";
            document.getElementById("alert-danger").style.display="block";
        }
        
       
    }		
	);
}

function writeAnotherEmail(){
    document.getElementById("subject").value='';
    document.getElementById("message").value='';
    document.getElementById("alert-success").style.display="none";
    document.getElementById("contact-form").style.display="block";
}