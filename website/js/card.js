function loadCardsAndFilters(elements, addFilters, link, querySelector, colWidth, emptyPosition = false){
    let cardSpace = $(querySelector);
    if(emptyPosition) cardSpace.empty();
    elements.map(e => {
        let card = document.createElement('div');
        let tooLittle = $(window).width() < 600;
        card.className = `card mb-3 invisible ${tooLittle ? 'col-12' :colWidth}`;
        card.setAttribute('data-groups', `["${e.category.join('","')}"]`);
        card.setAttribute('data-title', `${e.title}`);
        card.setAttribute('data-id', `${e.id}`);
        
        let a = document.createElement('a');
        a.href = `${link}?id=${e.id}`;

        let img = document.createElement('img');
        img.className = 'card-img-top w-100';
        img.setAttribute('alt', `${e.title}`);
        img.setAttribute('src', `${e.img}`);
        
        let h = document.createElement('h4');
        h.className = 'card-title text-center align-middle';
        h.innerText = `${e.title}`;

        a.append(img);
        card.append(a);
        card.append(h);
        cardSpace.append(card);
    });

    if(addFilters){
        let dropdown = $('#categoryDropdown');
        [...new Set(elements.map(e => e.category).flat())]
        .map(c => {
            let b = document.createElement('button');
            b.className = 'dropdown-item';
            b.setAttribute('type', 'button');
            b.setAttribute('data-group', `${c}`);
            b.innerText = c;
            dropdown.append(b);       
        });

    }
}

const removeAllCards = idPosition => $(`#${idPosition}`).empty();
const saveInStorage = (key, element) => sessionStorage.setItem(key, Array.isArray(element) ? element : JSON.stringify(element))