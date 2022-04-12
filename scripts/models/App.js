/*
Base of the website, load data from json and display them using templates
*/
/*global PhotographerApi, Photographer,PhotographerCard,PhotosFactory, PhotoCard */
/*eslint no-undef: "error"*/

class App {// eslint-disable-line no-unused-vars
     
     constructor(query){
          this.$photographersWrapper = document.querySelector(query);
          this.photographerApi = new PhotographerApi('./data/photographers.json');
          this._folderPhotographer ='';
     }
     //base function, call when we need to display all the photographers
     async main() {
          const photographers = await this.photographerApi.getPhotographers();
          console.log(photographers);
          photographers[0]
          .map(photographer=>new Photographer(photographer))
          .forEach(photographer => {
               const Template = new PhotographerCard(photographer);
               this.$photographersWrapper.appendChild(Template.createPhotographerCard());
          });
     }
     // function call when we need to load  all the photos and videos of a specific photographer
     // return an array of object 
     async loadMedias() {
          const idPhotographer = Number(new URL(window.location.href).searchParams.get('id'));
          const photographers = await this.photographerApi.getPhotographers();      

          this.instantiatePhotographer(photographers, idPhotographer);

          var data = photographers[1]
          .map(media=>{
               if(media.image !== undefined)
                    return new PhotosFactory(media, 'photo');
               else if(media.video !== undefined)
                    return new PhotosFactory(media, 'video');
               else
                    throw 'Problem, neither image nor video';
          
          });
          return data;
     }
     // function display contact information about a photographer

     async instantiatePhotographer(photographers, idPhotographer) {
          const $wrapperPrice = document.querySelector('.like__price');
          const $wrapperName = document.querySelector('.modal__name');
          const $wrapperModal = document.querySelector('#contact_modal');

          photographers[0]
               .map(photographer => new Photographer(photographer))
               .forEach(photographer => {
                    if (photographer.id === idPhotographer) {
                         const Template = new PhotographerCard(photographer);
                         Template.createPhotographerDetail();
                         this._folderPhotographer = photographer.name.split(' ')[0].replace('-', ' ');
                         $wrapperPrice.innerHTML = photographer.price;
                         $wrapperName.innerHTML = photographer.name;
                         $wrapperModal.ariaLabel= 'Contact me ' + photographer.name;
                    }
               });
     }
     //sort
     sortByFame(medias){
          console.log(medias);
          this.render(medias.sort((a1, a2) => {return parseInt(a2._likes) - parseInt(a1._likes);}));
     }
     sortByDate(medias){
          this.render(medias.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()));
     }
     sortByTitle(medias){
          
          this.render(medias.sort((a, b) => a.title.localeCompare(b.title)));
     }

     // display photos on the wrapper
     async render(medias){
          const $wrapperPhoto = document.querySelector('.photograph-content__medias');
          const $wrapperLike = document.querySelector('.like__counter');
          const idPhotographer = Number(new URL(window.location.href).searchParams.get('id'));
          $wrapperPhoto.innerHTML='';
          let nbLikes = 0;
          medias.forEach(media => {
               if(media.photographerId === idPhotographer){
                    nbLikes += media.likes;
                    if(media.video !== undefined){
                         //video
                         const Template = new PhotoCard(media);
                         $wrapperPhoto.appendChild(Template.createVideoCard(this._folderPhotographer));
                    }
                    else {
                         //photo
                         const Template = new PhotoCard(media);
                         $wrapperPhoto.appendChild(Template.createPhotoCard(this._folderPhotographer));
                    }
               }
          });
          $wrapperLike.innerHTML = nbLikes;


     }


}



