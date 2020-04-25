function loadCardsAndFilters(elements, addFilters, link, querySelector, emptyPosition = false){
    let cardSpace = $(querySelector);
    if(emptyPosition) cardSpace.empty();
    let $width = $(window).width();
    let col = $width <= 400 ? 'col-9' : $width <= 768 ? 'col-4' : 'col-3';
    elements.map(e => {
        let card = document.createElement('div');
        card.className = `card mb-3 invisible ${col}`;
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

    $(window).resize(()=>{
        let $width = $(window).width();
        Array.from($('.card')).map(c => {
            let classes = c.className;
            // TODO: pretty sure there's a better way to do this shit
            c.classList.remove(classes.substring(classes.indexOf('col-'), classes.indexOf('col-') + 5));
            c.classList.add($width <= 400 ? 'col-9' : $width <= 768 ? 'col-4' : 'col-3');
        });
    })
}

const removeAllCards = idPosition => $(`#${idPosition}`).empty();
const saveInStorage = (key, element) => sessionStorage.setItem(key, Array.isArray(element) ? element : JSON.stringify(element))