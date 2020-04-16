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

function foo(){
    let value = document.getElementById('contact-form');
    
    console.log(value.querySelector("#email").value);
}

function validateForm() {
    let value = document.getElementById('contact-form');
    var email =  value.querySelector("#email").value;
    var subject = value.querySelector("#subject").value;
    var message = value.querySelector("#message").value;
    if (email == "") {
        alert("Il campo email non può essere vuoto!")
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            alert("Il formato della mail è invalido!")
            return false;
        }
    }
    if(subject == ""){
        alert("Il campo oggeto non può essere vuoto!")
        return false;
    }
    if(message ==""){
        alert("Il campo messaggio non può essere vuoto!")
        return false;
    }

    //call sendEmail if all fields are correct
   
  }