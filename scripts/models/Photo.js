 /*
Serialize data about photo and videos from the json

*/

class Photo{// eslint-disable-line no-unused-vars
     constructor(data){
          this._id = data.id;
          this._photographerId = data.photographerId;
          this._title = data.title;
          this._image = data.image;
          this._likes = data.likes;
          this._date = data.date;
          this._price = data.price;
     }

     get id(){
          return this._id;
     }
     get photographerId(){
          return this._photographerId;
     }
     get title(){
          return this._title;
     }
     get price(){
          return this._price;
     }
     get likes(){
          return this._likes;
     }
     get date(){
          return this._date;
     }
     get image(){
          return this._image;
     }


}
