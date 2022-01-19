class MoviesApi {
    constructor(dataApi, headers) {
        this._baseUrl = dataApi.baseUrl;
        this._headers = headers;
    }

    _checkResponse(res){
      
        if (res.ok) {
          return res.json()
        }
         return Promise.reject(res.status);     
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}`, {
          headers: this._headers,
            })
            .then(this._checkResponse)
      }
}

const movies = new MoviesApi(
    {
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    },
    {
      'Content-Type': 'application/json'
    }
  ); 
  
  export {movies, MoviesApi};