class Photo{
     constructor(data){
          this._id = data.id
          this._photographerId = data.photographerId
          this._title = data.title
          this._image = data.image
          this._likes = data.likes
          this._date = data.date
          this._price = data.price
     }

     get id(){
          return this._id;
     }
     get name(){
          return this._photographerId;
     }
     get city(){
          return this._title;
     }
     get country(){
          return this._price;
     }
     get tagline(){
          return this._likes;
     }
     get price(){
          return this._date;
     }
     get portrait(){
          return this._image;
     }


}
