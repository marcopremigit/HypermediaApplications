window.onload = () => {
    Breadcrumbs.loadCrumbs([
        {
            page: "homepage.html",
            title: "Home"
        },
        {
            page: "chisiamo.html",
            title: "Chi siamo"
        }
    ]);
  }


 //*BannerImage 
class BannerImage {
    constructor(ref) {
      this.hmi_ref = ref;
      this.BS = {}
      this.BS.image = document.createElement('img');    
      this.BS.image.className = 'mt-2 mb-2 p-0 col-12 align-middle rounded';
    }
  
    add (image){
      this.BS.image.src = image;
      let newNode = this.BS.image.cloneNode(true);
      this.hmi_ref.appendChild(newNode);
    }
}

const BannerImageSpace = document.getElementById('banner-image-space');
let myBanner = new BannerImage( BannerImageSpace );
myBanner.add('https://source.unsplash.com/random/1920x540');
 //*BannerImage 

 