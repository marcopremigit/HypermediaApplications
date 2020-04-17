window.onload = () => {
  Breadcrumbs.loadCrumbs([
      {
          page: "homepage.html",
          title: "Home"
      },
      {
          page: "inostriservizi.html",
          title: "I nostri servizi"
      }
  ]);
}

//html card class
class Card {
  constructor(ref) {
    this.hmi_ref = ref;

    // Bootstap : container type
    this.BS = {}
    this.BS.container = document.createElement('div');
    this.BS.card      = document.createElement('div');
    this.BS.image     = document.createElement('img');
    this.BS.info      = document.createElement('div');
    this.BS.title     = document.createElement('h4');
    this.BS.info.appendChild( this.BS.title )
  
    this.BS.card.appendChild( this.BS.image );
    this.BS.card.appendChild( this.BS.info );
    this.BS.container.appendChild( this.BS.card );

    this.BS.container.className = 'col-md-3';
    this.BS.card.className      = 'card';
    this.BS.image.className     = 'card-img-top';
    this.BS.title.className     = 'card-title';
    
   


  }


  add ( service_name,image)
  {
    this.BS.image.src = image;
    this.BS.title.textContent = service_name;
    let newNode = this.BS.container.cloneNode(true)
    this.hmi_ref.appendChild( newNode );

  }
}


//In inostriservizi.html we have <div id="card-space" class="row"> </div> --> the row where che cards are inserted
const CardSpace = document.getElementById('card-space');
let myCard = new Card( CardSpace );
myCard.add('Ripetizioni matematica','https://source.unsplash.com/random/1920x1080');
myCard.add('Ripetizioni italiano','https://source.unsplash.com/random/1920x1080');
myCard.add('Ripetizioni storia','https://source.unsplash.com/random/1920x1080');
myCard.add('Ripetizioni geografia','https://source.unsplash.com/random/1920x1080', );
myCard.add('Ripetizioni scienze','https://source.unsplash.com/random/1920x1080');
