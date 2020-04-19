function search(){
    let searchVal = document.getElementById("searchBox").value;
    let res = events.filter(e => {
        return e.title.toLowerCase().includes(searchVal.toLowerCase());
    }, []);
    console.log(res);
    // let shuffleInstance = new window.Shuffle(document.getElementById('card-space'), {
    //     itemSelector: '.card',
    //     sizer: '.card'
    // });

    // shuffleInstance.filter(searchVal);
}


class Shuffler {
    constructor(element) {
        // ! something is wrong here !
        this.shuffle = new window.Shuffle(element, {
            itemSelector: '.card',
            sizer: element.querySelector('.sizer'),
            filterMode: Shuffle.FilterMode.ANY
        }); 
        document.getElementById('searchBox').addEventListener('keyup', this._handleSearchKeyup.bind(this));
    }
  
    // /**
    //  * Filter the shuffle instance by items with a title that matches the search input.
    //  * @param {Event} evt Event object.
    //  */
    _handleSearchKeyup(evt) {
        const searchText = evt.target.value.toLowerCase();
        this.shuffle.filter(element => {
            return element.querySelector('.card-title').textContent.toLowerCase().trim().indexOf(searchText) !== -1;
        });
    }
}

window.onload = () => {
    Breadcrumbs.loadCrumbs([
        {
            page: "../index.html",
            title: "Home"
        },
        {
            page: "inostrieventi.html",
            title: "I nostri eventi"
        }
    ]);
    setTimeout(() => {
        window.demo = new Shuffler(document.querySelector('#card-space'));
    }, 1000);
}   

//TODO: this has to be replaced with database query information extraction
const CardSpace = document.getElementById('card-space');
let myCard = new Card( CardSpace );
myCard.add('Gianfranco','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Piero','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Garibaldi','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Vittorio Emanuele','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Austro Ungarico','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Pipino il breve','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );