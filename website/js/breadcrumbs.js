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
        let crumbsDiv = $("#breadcrumbs");
        if(crumbsDiv === undefined || crumbsDiv === null) return;
        crumbsDiv.empty();
        crumbsDiv.html(crumbs.map((e, i) => createCrumb(e, i === crumbs.length-1)).join(''));
    }
};

function createCrumb(e, isLast){
    return `
    <li class="breadcrumb-item ${isLast ? 'active': ''}" ${isLast ? 'aria-current="page"' : ''}>
        ${isLast ? '' : `<a href="${e.page}">`}
            ${e.title}
        ${isLast ? '' : '</a>'}
    </li>
    `;
}