class App {
     constructor(query){
          this.$photographersWrapper = document.querySelector(query)
          this.photographerApi = new PhotographerApi('./data/photographers.json');
     }

     async main() {
          const photographers = await this.photographerApi.getPhotographers();

          photographers
          .map(photographer=>new Photographer(photographer))
          .forEach(photographer => {
               console.log(photographer)  
               const Template = new PhotographerCard(photographer);
               this.$photographersWrapper.appendChild(Template.createPhotographerCard())
          })    
     }

     async photos() {
          const photographers = await this.photographerApi.getPhotographers();

          photographers
          .map(photographer=>new Photographer(photographer))
          .forEach(photographer => {
               const idPage = Number(new URL(window.location.href).searchParams.get("id"));
               if(photographer.id === idPage){
                    console.log(photographer)  
                    const Template = new PhotographerCard(photographer);
                    this.$photographersWrapper.appendChild(Template.createPhotographerDetail())
               }

          })    
     }


}



