/*
Base of the website, load data from json and display them using templates
*/


class App {
     
     constructor(query){
          this.$photographersWrapper = document.querySelector(query)
          this.photographerApi = new PhotographerApi('./data/photographers.json');
          this._folderPhotographer ='';
     }

     async main() {
          const photographers = await this.photographerApi.getPhotographers();
          console.log(photographers);
          photographers[0]
          .map(photographer=>new Photographer(photographer))
          .forEach(photographer => {
               const Template = new PhotographerCard(photographer);
               this.$photographersWrapper.appendChild(Template.createPhotographerCard())
          })    
     }

     async loadMedias() {
          const idPhotographer = Number(new URL(window.location.href).searchParams.get("id"));
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
          
          })
          return data;
     }

     async instantiatePhotographer(photographers, idPhotographer) {
          const $wrapperPrice = document.querySelector('.like__price');
          photographers[0]
               .map(photographer => new Photographer(photographer))
               .forEach(photographer => {
                    if (photographer.id === idPhotographer) {
                         const Template = new PhotographerCard(photographer);
                         Template.createPhotographerDetail();
                         this._folderPhotographer = photographer.name.split(' ')[0].replace('-', ' ');
                         $wrapperPrice.innerHTML = photographer.price;
                    }
               });
     }

     sortByFame(medias){
          this.render(medias.sort((a1, a2) => {a2.likes - a1.likes}))
     }
     sortByDate(medias){
          this.render(medias.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()));
     }
     sortByTitle(medias){
          
          this.render(medias.sort((a, b) => a.title.localeCompare(b.title)));
     }

     async render(medias){
          const $wrapperPhoto = document.querySelector('.photograph-content__medias');
          const $wrapperLike = document.querySelector('.like__counter');
          const idPhotographer = Number(new URL(window.location.href).searchParams.get("id"));
          $wrapperPhoto.innerHTML='';
          let nbLikes = 0;
          console.log(medias);
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
          })
          $wrapperLike.innerHTML = nbLikes;
     }


}



