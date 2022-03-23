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
          const $wrapperPhoto = document.querySelector('section.photo-content');
          const photographers = await this.photographerApi.getPhotographers();
          let folderPhotographer ='';


          photographers[0]
          .map(photographer=>new Photographer(photographer))
          .forEach(photographer => {
               if(photographer.id === idPhotographer){
                    const Template = new PhotographerCard(photographer);
                    this.$photographersWrapper.appendChild(Template.createPhotographerDetail())

                    folderPhotographer = photographer.name.split(' ')[0].replace('-', ' ');
                    console.log(folderPhotographer);
               }
          })
          photographers[1]
          .map(photos=>new Photo(photos))
          .forEach(photos => {
               if(photos.photographerId === idPhotographer){
                    console.log(photos);
                    if(photos.media.split('.').pop() === 'mp4'){
                         //video
                    }
                    else {
                         //photo
                         const Template = new PhotoCard(photos);
                         $wrapperPhoto.appendChild(Template.createPhotoCard(folderPhotographer));
                    }


               }
          })

          
     }


}



