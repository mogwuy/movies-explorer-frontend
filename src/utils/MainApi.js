class MainApi {
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

}

const api = new MainApi(
    {
    baseUrl: 'https://api.mesto.mogwuy.nomoredomains.rocks/',
    },
    {
      credentials: 'include',
      'Content-Type': 'application/json'
    }
  ); 
  
  export {api, MainApi};