class PhotoCard {
     constructor(photo){
          this._photo = photo;
     }

     createPhotoCard(folder){
          const $wrapper = document.createElement('div')
          $wrapper.classList.add('photo-card-wrapper')

          const photoCard =`
               <article class="photo-article">
                    <img src="assets/photographers_data/${folder}/${this._photo.media}">PHOTO
               </article>
          `;
          $wrapper.innerHTML = photoCard;
          return $wrapper; 
     }

}

