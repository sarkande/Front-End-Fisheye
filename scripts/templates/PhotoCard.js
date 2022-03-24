/*
TEMPLATE To display details about photos and videos

*/


class PhotoCard {
     constructor(photo){
          this._photo = photo;
     }

     createPhotoCard(folder){
          const $wrapper = document.createElement('figure')
          $wrapper.classList.add('photo')

          const photoCard =`
               <img src="assets/photographers_data/${folder}/${this._photo.image}">
               <figcaption>${this._photo.title} ${this._photo.likes} ❤</figcaption>
          `;
          $wrapper.innerHTML = photoCard;
          return $wrapper; 
     }

}

