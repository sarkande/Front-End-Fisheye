/*global Photo, Video*/

class PhotosFactory{// eslint-disable-line no-unused-vars
     constructor(data, mediaType){
          if(mediaType === 'photo'){
               return new Photo(data);
          }
          else if (mediaType === 'video'){
               return new Video(data);
          }
          else{
               throw 'Unknow media type';
          }
     }
}