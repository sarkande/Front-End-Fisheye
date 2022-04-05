/*
TEMPLATE To display details about photos and videos

*/


class PhotoCard {
     constructor(media){
          this._media = media;
     }

     createPhotoCard(folder){
          const $wrapper = document.createElement('figure')
          $wrapper.classList.add('photo')

          const photoCard =`
               <img src="assets/photographers_data/${folder}/${this._media.image}">
               <figcaption><span class="photo__descr">${this._media.title} ${this._media.likes}</span> <span class="photo__like">❤</span></figcaption>
          `;
          $wrapper.innerHTML = photoCard;
          return $wrapper; 
     }
     createVideoCard(folder){
          const $wrapper = document.createElement('figure')
          $wrapper.classList.add('video')

          const videoCard =`
               <video src="assets/photographers_data/${folder}/${this._media.video}"></video>
               <figcaption><span class="photo__descr">${this._media.title} ${this._media.likes}</span> <span class="photo__like">❤</span></figcaption>
          `;
          $wrapper.innerHTML = videoCard;
          return $wrapper; 
     }

}

