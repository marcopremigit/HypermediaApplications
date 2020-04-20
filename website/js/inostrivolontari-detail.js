

window.onload = () => {
    let data = loadData();
    if(data === null || data === undefined){
        //TODO: something went wrong
    }
}

function loadData(){
    let id = window.location.href.split('id=')[1];
    let dataToReturn = JSON.parse(localStorage.getItem(id));
    localStorage.clear(); // Clear the localStorage
    return dataToReturn;
}