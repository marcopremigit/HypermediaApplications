let Spinner = {
    letThemComeBack(){
        Array.from(document.getElementsByClassName("invisible")).map(e => {
            e.classList.remove("invisible");
        });
        document.getElementsByClassName("spinner-border")[0].classList.add("invisible");  
    }
};