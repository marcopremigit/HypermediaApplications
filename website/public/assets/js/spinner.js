let Spinner = {
    letThemComeBack(){
        let elements = document.getElementsByClassName("invisible");
        if(elements === null || elements === undefined) return; 
        Array.from(elements).map(e => {
            e.classList.remove("invisible");
        });
        Array.from(document.getElementsByClassName("spinner-border")).map(s => {
            s.classList.add("invisible");
        });  
    }
};