 /*
Relative to the page photographer

*/

 const app = new App('.photograph-header')
 app.loadMedias().then((media)=>{
     app.render(media);
 }).then(addLikeForEachMedia);

 document.querySelector('.photograph-content__search-container--fame').addEventListener('click', function(){
      app.loadMedias().then((media)=>{
           app.sortByFame(media);
      }).then(addLikeForEachMedia);

})
document.querySelector('.photograph-content__search-container--date').addEventListener('click', function(){
     app.loadMedias().then((media)=>{
          app.sortByDate(media);
     }).then(addLikeForEachMedia);
})
document.querySelector('.photograph-content__search-container--title').addEventListener('click', function(){
     app.loadMedias().then((media)=>{
          app.sortByTitle(media);
     }).then(addLikeForEachMedia);
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