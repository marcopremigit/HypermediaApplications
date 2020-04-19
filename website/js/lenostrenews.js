class Shuffler {
    constructor(element) {
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
            page: "lenostrenews.html",
            title: "Le nostre news"
        }
    ]);
  
    window.demo = new Shuffler(document.querySelector('#card-space'));
    
    Array.from(document.getElementsByClassName("invisible")).map(e => {
        e.classList.remove("invisible");
    });
    document.getElementsByClassName("spinner-border")[0].classList.add("invisible");
    
}   

//TODO: this has to be replaced with database query information extraction
const CardSpace = document.getElementById('card-space');
let myCard = new Card( CardSpace );
myCard.add('Emergenza Coronavirus','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Colletta alimentare','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Riunione Giugno','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Consulto psicologico','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Amici ambiente','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Lezioni online','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Emergenza Coronavirus','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Colletta alimentare','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Riunione Giugno','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Consulto psicologico','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Amici ambiente','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Lezioni online','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Emergenza Coronavirus','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Colletta alimentare','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Riunione Giugno','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Consulto psicologico','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Amici ambiente','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Lezioni online','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Emergenza Coronavirus','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Colletta alimentare','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Riunione Giugno','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Consulto psicologico','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Amici ambiente','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Lezioni online','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Emergenza Coronavirus','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Colletta alimentare','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Riunione Giugno','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Consulto psicologico','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Amici ambiente','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Lezioni online','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
