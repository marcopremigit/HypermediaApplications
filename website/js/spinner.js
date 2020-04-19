let Spinner = {
    letThemComeBack(){
        let elements = document.getElementsByClassName("invisible");
        if(elements === null || elements === undefined) return; 
        Array.from(elements).map(e => {
            e.classList.remove("invisible");
        });
        document.getElementsByClassName("spinner-border")[0].classList.add("invisible");  
    }
};