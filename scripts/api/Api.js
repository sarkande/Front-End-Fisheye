/*
Class about api, make request to get information from json

*/


class Api {
    /**
     * @param {string} url 
     */
    constructor(url) {
        this._url = url;
    }

    async get() {
        return fetch(this._url)
        .then(res => res.json())
        .catch(err => console.log('an error occurs', err));
    }
}
 
class PhotographerApi extends Api {// eslint-disable-line no-unused-vars
     /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url);
    }

    async getPhotographers() {
        return await this.get().then(res => [res.photographers, res.media]);
    }
}

