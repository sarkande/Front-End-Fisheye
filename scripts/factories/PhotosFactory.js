class PhotosFactory{
     constructor(data, mediaType){
          if(mediaType === 'photo'){
               return new Photo(data);
          }
          else if (mediaType === 'video'){
               return new Video(data);
          }
          else{
               throw 'Unknow media type'
          }
     }
}