/*
TEMPLATE To display details about photographers

*/

class PhotographerCard {// eslint-disable-line no-unused-vars
     constructor(photographer){
          this._photographer = photographer;
     }

     createPhotographerCard(){
          const $wrapper = document.createElement('div');
          $wrapper.classList.add('photographer-card-wrapper');
          console.log(this._photographer);
          const photographerCard =`
               <article class='photographer-article'>
                    <a class='photographer-article__link' href='photographer.html?id=${this._photographer.id}'>
                         <img class='photographer-article__link--img' alt='${this._photographer.name}' src='${this._photographer.portrait}'>
                         <h2 class='photographer-article__link--title '>${this._photographer.name}</h2>
                    </a>
                    <p class='photographer-article__descr'>
                         <span class='photographer-article__descr--location'>${this._photographer.city}, ${this._photographer.country}</span>
                         <span class='photographer-article__descr--tagline'>${this._photographer.tagline}</span>
                         <span class='photographer-article__descr--price'>${this._photographer.price}€/jour</span>
                    </p>
               </article>
          `;
          $wrapper.innerHTML = photographerCard;
          return $wrapper; 
     }
     createPhotographerDetail(){
          const $wrapper = document.querySelector('.photograph-header');
          const photographerCard =`
               <div class='photograph-header-container'>
                    <h1 class='photograph-header__title '>${this._photographer.name}</h1>
                    <p class='photograph-header__descr'>
                         <span class='photograph-header__descr--location'>${this._photographer.city}, ${this._photographer.country}</span>
                         <span class='photograph-header__descr--tagline'>${this._photographer.tagline}</span>
                    </p>
               </div>
               <div class='photograph-header-container-button'>
                    <button class='btn' aria-label="Contact me" onclick='displayModal()'>Contactez-moi</button>
               </div>
               <div class='photograph-header-container-img'>
                    <img class='photograph-header__img' alt='${this._photographer.name}' src='${this._photographer.portrait}'>
               </div>

          `;
          $wrapper.innerHTML = photographerCard;
          return $wrapper;  
     }
}

