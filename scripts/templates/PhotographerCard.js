class PhotographerCard {
     constructor(photographer){
          this._photographer = photographer;
     }

     createPhotographerCard(){
          const $wrapper = document.createElement('div')
          $wrapper.classList.add('photographer-card-wrapper')
          console.log(this._photographer);
          const photographerCard =`
               <article class="photographer-article">
                    <a class="photographer-article__link" href="photographer.html?id=${this._photographer.id}">
                         <img class="photographer-article__link--img" alt="${this._photographer.name}" src="${this._photographer.portrait}">
                         <h2 class="photographer-article__link--title ">${this._photographer.name}</h2>
                    </a>
                    <p class="photographer-article__descr">
                         <span class="photographer-article__descr--location">${this._photographer.city}, ${this._photographer.country}</span>
                         <span class="photographer-article__descr--tagline">${this._photographer.tagline}</span>
                         <span class="photographer-article__descr--price">${this._photographer.price}€/jour</span>
                    </p>
               </article>
          `;
          $wrapper.innerHTML = photographerCard;
          return $wrapper; 
     }
     createPhotographerDetail(){
          const $wrapper = document.createElement('div')
          $wrapper.classList.add('photograph-header-wrapper')
          console.log(this._photographer);
          const photographerCard =`
               <h2 class="photograph-header__title ">${this._photographer.name}</h2>
               <p class="photograph-header__descr">
               <span class="photograph-header__descr--location">${this._photographer.city}, ${this._photographer.country}</span>
               <span class="photograph-header__descr--tagline">${this._photographer.tagline}</span>
               <span class="photograph-header__descr--price">${this._photographer.price}€/jour</span>
               </p>
               <button class="btn" onclick="displayModal()">Contactez-moi</button>
               <img class="photograph-header__img" alt="${this._photographer.name}" src="${this._photographer.portrait}">
          `;
          $wrapper.innerHTML = photographerCard;
          return $wrapper;  
     }
}

