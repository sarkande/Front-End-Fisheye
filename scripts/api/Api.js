class Api {
     /**
      * @param {string} url 
      */
     constructor(url) {
         this._url = url
     }
 
     async get() {
         return fetch(this._url)
             .then(res => res.json())

             .catch(err => console.log('an error occurs', err))
     }
 }
 
 class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return await this.get().then(res => res.photographers)
    }
}

class PhotoApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getPhotos() {
        return await this.get().then(res => res.media)
    }
}
