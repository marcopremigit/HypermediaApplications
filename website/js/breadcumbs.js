/**
 * How to use: 
    1. add this script to your html
    2. add the breadcrumbs.css to your html
    3. add the following to your html
        <nav aria-label="breadcrumb">
            <ol id="breadcrumbs" class="breadcrumb"></ol>
        </nav>
    4. add this to the js of your page:
        window.onload = () => {
            Breadcrumbs.loadCrumbs([{
                page: pageToNavigateTo,
                title: titleToShowInCrumb

            }]);
        }
    NB: If something doesn't work, call your friendly neighborhood Fabs
 */

let Breadcrumbs = {
    loadCrumbs : function(crumbs){
        let crumbsDiv = document.getElementById("breadcrumbs");
        if(crumbsDiv === undefined || crumbsDiv === null) return;
        crumbs.map((e, i) => crumbsDiv.appendChild(createCrumb(e, i === crumbs.length-1)));
    }
};

function createCrumb(element, last){
    let li = document.createElement("li");
    if(!last){
        let a = document.createElement("a");
        a.setAttribute("href", element.page);
        a.textContent = element.title;
        li.appendChild(a);
    }
    else{
        li.classList.add("active");
        li.setAttribute("aria-current", "page");
        li.textContent = element.title;
    }
    li.classList.add("breadcrumb-item");
    return li;
}