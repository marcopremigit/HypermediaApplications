function loadCardsAndFilters(elements, addFilters, link, querySelector, colWidth, emptyPosition = false){
    let cardSpace = $(querySelector);
    if(emptyPosition) cardSpace.empty();
    cardSpace.html(elements.map(e => `
        <div class="card mb-3 ${colWidth} invisible" data-groups='["${e.category.join('","')}"]' data-title="${e.title}" data-id="${e.id}">
            <a href="${link}?id=${e.id}">
                <img src="${e.img}" class="card-img-top w-100" alt="${e.title}">
            </a>
            <h4 class="card-title text-center align-middle">${e.title}</h4>
        </div>
        `).join('')
    );

    if(addFilters){
        $('#categoryDropdown').html(
            [...new Set(elements.map(e => e.category).flat())]
            .map(c => `
                <button class="dropdown-item" type="button" data-group="${c}">${c}</button>
            `).join('')
        );
    }
}

const removeAllCards = idPosition => $(`#${idPosition}`).empty();
const saveInStorage = (key, element) => sessionStorage.setItem(key, Array.isArray(element) ? element : JSON.stringify(element))