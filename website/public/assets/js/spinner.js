let Spinner = {
    letThemComeBack(){
        let elements = $(".invisible");
        if(elements === null || elements === undefined) return; 
        Array.from(elements).map(e => {
            e.classList.remove("invisible");
        });
        Array.from($(".spinner-border")).map(s => {
            s.classList.add("invisible");
        });  
    }
};