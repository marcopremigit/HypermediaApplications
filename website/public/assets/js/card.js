function loadCardsAndFilters(elements, addFilters, link, querySelector, emptyPosition = false){
    let cardSpace = $(querySelector);
    if(emptyPosition) cardSpace.empty();
    let $width = $(window).width();
    let col = $width <= 400 ? 'col-7' : $width <= 768 ? 'col-4' : 'col-3';
    elements.map(e => {
        let card = document.createElement('div');
        card.className = `text-center card mb-3 invisible ${col}`;
        card.setAttribute('data-groups', `["${e.category/*.join('","')*/}"]`);
        card.setAttribute('data-title', `${e.name}`);
        card.setAttribute('data-id', `${e.id}`);
        
        let a = document.createElement('a');
        a.href = `${link}?id=${e.id}`;

        let img = document.createElement('img');
        img.className = 'card-img-top';
        img.setAttribute('alt', `${e.name}`);
        img.setAttribute('src', `${e.image}`);
        
        let h = document.createElement('div');
        h.className = 'col-sm-12 my-auto';

        let g = document.createElement('h6');
        h.append(g);
        g.innerText = `${e.name}`;

        

        let s = document.createElement('div');
        s.className = 'row card-title text-center align-middle h-100';
        s.append(h);

        a.append(img);
        card.append(a);
        card.append(s);
        cardSpace.append(card);
    });

    if(addFilters){
        let dropdowns = $('.dropdown-menu');
        [...new Set(elements.map(e => e.category).flat())]
        .map(c => { 
            Array.from(dropdowns).map( d =>{
                let b = document.createElement('button');
                b.className = 'dropdown-item';
                b.setAttribute('type', 'button');
                b.setAttribute('data-group', `${c}`);
                b.innerText = c;
                d.append(b);       
            });
        });

    }

    $(window).resize(()=>{
        let $width = $(window).width();
        Array.from($('.card')).map(c => {
            let classes = c.className;
            // TODO: pretty sure there's a better way to do this shit
            c.classList.remove(classes.substring(classes.indexOf('col-'), classes.indexOf('col-') + 5));
            c.classList.add($width <= 400 ? 'col-12' : $width <= 768 ? 'col-4' : 'col-3');
        });
    })
}

const removeAllCards = idPosition => $(`#${idPosition}`).empty();
const saveInStorage = (key, element) => sessionStorage.setItem(key, Array.isArray(element) ? element : JSON.stringify(element))