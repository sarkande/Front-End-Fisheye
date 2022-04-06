 /*
Relative to the page photographer

*/

 const app = new App('.photograph-header')
 app.loadMedias().then((media)=>{
     app.render(media);
 }).then(addLikeForEachMedia).then(addLightBox);

document.querySelector('.photograph-content__search-container--fame').addEventListener('click', function(){
      app.loadMedias().then((media)=>{
           app.sortByFame(media);
      }).then(addLikeForEachMedia).then(addLightBox);

})
document.querySelector('.photograph-content__search-container--date').addEventListener('click', function(){
     app.loadMedias().then((media)=>{
          app.sortByDate(media);
     }).then(addLikeForEachMedia).then(addLightBox);
})
document.querySelector('.photograph-content__search-container--title').addEventListener('click', function(){
     app.loadMedias().then((media)=>{
          app.sortByTitle(media);
     }).then(addLikeForEachMedia).then(addLightBox);
})


 function addLikeForEachMedia(){
     const $wrapperLike = document.querySelector('.like__counter');
     var $wrapperPhotoLike = document.querySelectorAll(".photo__like");

     var nbLikes = parseInt($wrapperLike.innerHTML);
     for (let i = 0; i < $wrapperPhotoLike.length; i++) {
          $wrapperPhotoLike[i].addEventListener('click', function(){
               this.classList.toggle("liked");
               this.innerHTML=this.classList.contains('liked') ? parseInt(this.innerHTML.split(' ')[0]) +1 + ' ❤':  parseInt(this.innerHTML.split(' ')[0]) -1 +' ❤'
               nbLikes= this.classList.contains('liked') ? nbLikes+1:nbLikes-1;
               $wrapperLike.innerHTML = nbLikes;
          })
     }
 }

 function addLightBox(){

     var allFigures = document.querySelectorAll('.figure--media');
     var currentIndex = 0;
     for (let i = 0; i < allFigures.length; i++) {
          const element = allFigures[i];
          element.addEventListener('click', function(){
               displayElement(i);
               currentIndex = i;
               document.querySelector("#lightbox").style.display ="flex";
          });
          element.addEventListener('keypress', function(e){
               if(e.key === 'Enter'){
                    displayElement(i);
                    currentIndex = i;
                    document.querySelector("#lightbox").style.display ="flex";
               }

          });
     }
     //construct arrow
     document.querySelector('.btn-left').addEventListener('click', function(){
          currentIndex--;
          if(currentIndex<0)
               currentIndex = allFigures.length-1;
          displayElement(currentIndex);
     })

     document.addEventListener('keydown', function(e){
          if(e.key === 'ArrowLeft'){
               currentIndex--;
               if(currentIndex<0)
                    currentIndex = allFigures.length-1;
               displayElement(currentIndex);
          }
          if(e.key === 'ArrowRight'){
               currentIndex++;
               if(currentIndex>=allFigures.length)
                    currentIndex = 0;
               displayElement(currentIndex);
          }
     });

     document.querySelector('.btn-right').addEventListener('click', function(){
          currentIndex++;
          if(currentIndex>=allFigures.length)
               currentIndex = 0;
          displayElement(currentIndex);
     })


     closeLightBox();


 }
 function displayElement(index){
     var allFigures = document.querySelectorAll('figure');
     const element = allFigures[index];

     if(element.className =='video'){
          document.querySelector(".lightbox__container--img").style.display ="none";
          document.querySelector(".lightbox__container--video").style.display ="block";
          document.querySelector(".lightbox__container--video").src = element.getElementsByTagName('video')[0].src;
          document.querySelector(".lightbox__container--video").play();
     }         
     else if(element.className == 'photo'){
          document.querySelector(".lightbox__container--img").style.display ="block";
          document.querySelector(".lightbox__container--video").style.display ="none";
          document.querySelector(".lightbox__container--img").src = element.getElementsByTagName('img')[0].src;
          document.querySelector(".lightbox__container--img").alt = element.getElementsByTagName('img')[0].alt;
     }
     document.querySelector(".lightbox__container--title").innerHTML = element.getElementsByClassName('photo__descr')[0].innerHTML;
 }

 function closeLightBox(){
     var closeButton = document.querySelector('.btn-close')
     
     closeButton.addEventListener('click', function(){
          document.querySelector(".lightbox__container--video").style.display ="none"; 
          document.querySelector(".lightbox__container--img").style.display ="none"; 
          document.querySelector("#lightbox").style.display ="none"; 
     })

     document.addEventListener('keydown', function(e){
          if(e.key === "Escape"){
               document.querySelector(".lightbox__container--video").style.display ="none"; 
               document.querySelector(".lightbox__container--img").style.display ="none"; 
               document.querySelector("#lightbox").style.display ="none"; 
          }
     })

 }