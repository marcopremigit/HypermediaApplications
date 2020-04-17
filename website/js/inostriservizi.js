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

//In inostriservizi.html we have <div id="card-space" class="row"> </div> --> the row where che cards are inserted
const CardSpace = document.getElementById('card-space');
let myCard = new Card( CardSpace );
myCard.add('Ripetizioni matematica','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
myCard.add('Ripetizioni italiano','https://source.unsplash.com/random/1920x1080', 'https://source.unsplash.com/random/1920x1080');
myCard.add('Ripetizioni storia','https://source.unsplash.com/random/1920x1080', 'https://source.unsplash.com/random/1920x1080');
myCard.add('Ripetizioni geografia','https://source.unsplash.com/random/1920x1080', 'https://source.unsplash.com/random/1920x1080');
myCard.add('Ripetizioni scienze','https://source.unsplash.com/random/1920x1080', 'https://source.unsplash.com/random/1920x1080');
