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
            //here calls function to send email
            //if email sent correctly spawns different messages
            document.getElementById("contact-form").style.display="none";
            document.getElementById("alert-success").style.display="block";
        }
        form.classList.add('was-validated');
    }, false); 
    
}


function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<sender’s email address>",
	Password : "<email password>",
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}

function writeAnotherEmail(){
    document.getElementById("subject").value='';
    document.getElementById("message").value='';
    document.getElementById("alert-success").style.display="none";
    document.getElementById("contact-form").style.display="block";

}



