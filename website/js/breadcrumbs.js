let Breadcrumbs = {
    loadCrumbs : function(crumbs){
        let crumbsDiv = $("#breadcrumbs");
        if(crumbsDiv === undefined || crumbsDiv === null) return;
        crumbsDiv.empty();
        crumbs.map( (c,i) => crumbsDiv.append(createCrumb(c, i === crumbs.length - 1)));
        // crumbsDiv.html(crumbs.map((e, i) => createCrumb(e, i === crumbs.length-1)).join(''));
    }
};

function createCrumb(e, isLast){
    let li = document.createElement('li');
    li.className = `breadcrumb-item ${isLast ? 'active': ''}`;
    if(isLast){
        li.setAttribute('aria-current', 'page');
        li.innerText = `${e.title}`;
    }
    else{
        let a = document.createElement('a');
        a.href = `${e.page}`;
        a.innerText = `${e.title}`;
        li.appendChild(a);
    }
    return li;
}