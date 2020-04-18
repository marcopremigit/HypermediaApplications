//html card class
/**
 * HOW TO
 * This constructor creates all the different elements in <div id="card-space" class="row"> </div> html element.
 * The element is:
 *  <div class="col-4 mb-3">
        <div class="card">
            <a href="..">
                <img class="card-img-top" src="..">
            </a>
            <div>
                <h4 class="card-title">...</h4>
            </div>
        </div>
    </div>
    With the add method with we can add name, image, page_link of the different elements.

    EXAMPLE (how to add elements):
    const CardSpace = document.getElementById('card-space');
    let myCard = new Card( CardSpace );
    myCard.add('Ripetizioni matematica','https://source.unsplash.com/random/1920x1080','https://source.unsplash.com/random/1920x1080' );
 */
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
      this.BS.link      = document.createElement('a');
  
      this.BS.card.appendChild(this.BS.link);
      this.BS.link.appendChild(this.BS.image);
      this.BS.info.appendChild(this.BS.title);  
      this.BS.card.appendChild(this.BS.info);
      this.BS.container.appendChild(this.BS.card);
  
      this.BS.container.className = 'col-4 mb-3';
      this.BS.card.className      = 'card';
      this.BS.image.className     = 'card-img-top';
      this.BS.title.className     = 'card-title';
    }
  
    add ( name, image, page_link){
      this.BS.image.src = image;
      this.BS.title.textContent = name;
      this.BS.link.href = page_link;
      let newNode = this.BS.container.cloneNode(true);
      this.hmi_ref.appendChild(newNode);
    }
  }