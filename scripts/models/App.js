/*
Base of the website, load data from json and display them using templates
*/


class App {
     constructor(query){
          this.$photographersWrapper = document.querySelector(query)
          this.photographerApi = new PhotographerApi('./data/photographers.json');
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

     async photos() {
          const idPhotographer = Number(new URL(window.location.href).searchParams.get("id"));
          const $wrapperPhoto = document.querySelector('.photograph-content');
          const photographers = await this.photographerApi.getPhotographers();
          let folderPhotographer ='';


          photographers[0]
          .map(photographer=>new Photographer(photographer))
          .forEach(photographer => {
               if(photographer.id === idPhotographer){
                    const Template = new PhotographerCard(photographer);
                    Template.createPhotographerDetail()
                    folderPhotographer = photographer.name.split(' ')[0].replace('-', ' ');
               }
          })
          photographers[1]
          .map(media=>{
               console.log(media);
               if(media.image !== undefined)
                    return new PhotosFactory(media, 'photo');
               else if(media.video !== undefined)
                    return new PhotosFactory(media, 'video');
               else
                    throw 'Problem, neither image nor video';
          
          })
          .forEach(media => {
               if(media.photographerId === idPhotographer){
                    console.log(media);
                    if(media.video !== undefined){
                         //video
                    }
                    else {
                         //photo
                         const Template = new PhotoCard(media);
                         $wrapperPhoto.appendChild(Template.createPhotoCard(folderPhotographer));
                    }


               }
          })

          
     }


}



