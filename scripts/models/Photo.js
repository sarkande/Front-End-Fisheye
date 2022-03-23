 /*
Serialize data about photo and videos from the json

*/

class Photo{
     constructor(data){
          this._id = data.id
          this._photographerId = data.photographerId
          this._title = data.title
          this._media = data.image??data.video
          this._likes = data.likes
          this._date = data.date
          this._price = data.price
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
     get media(){
          return this._media;
     }


}
