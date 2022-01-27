class MainApi {
    constructor(dataApi, headers) {
        this._baseUrl = dataApi.baseUrl;
        this._otherUrl = dataApi.otherUrl;
        this._headers = headers;
    }

    _checkResponse(res){
      
        if (res.ok) {
          return res.json()
        }
         return Promise.reject(res.status);
        
    }
    registration(data) {
      return fetch(`${this._baseUrl}/signup`, {
          method: 'POST',
          withCredentials: true,
          credentials: 'include',
          headers: this._headers,
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              password: data.password
            })
          })
          .then(this._checkResponse)
    }

  login(data){
      return fetch(`${this._baseUrl}/signin`, {
          method: 'POST',
          withCredentials: true,
          credentials: 'include',
          headers: this._headers,
            body: JSON.stringify({
              email: data.email,
              password: data.password
            })
          })
          .then(this._checkResponse)
  }

  getMe(){
      return fetch(`${this._baseUrl}/users/me`, {
          method: 'GET',
          withCredentials: true,
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(this._checkResponse)
  }

  getMoviesCards() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(this._checkResponse)
  }

  putSaveMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      withCredentials: true,
      credentials: 'include',
        method: 'POST',
        headers: this._headers,
         body: JSON.stringify({
          country:data.country,
          director:data.director,
          duration:data.duration,
          year:data.year,
          description:data.description,
          image:this._otherUrl + data.image.url,
          trailer:data.trailerLink,
          thumbnail:this._otherUrl + data.image.url,
          nameRU:data.nameRU,
          nameEN:data.nameEN,
          moveId:data.id
          })
        })
        .then(this._checkResponse)
  }

  deleteСard(cardId) {
    return fetch(`${this._baseUrl}/movies/${cardId}`, {
      withCredentials: true,
      credentials: 'include',
        method: 'DELETE',
        headers: this._headers,
        })
        .then(this._checkResponse)
  }

  updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      withCredentials: true,
      credentials: 'include',
        method: 'PATCH',
        headers: this._headers,
         body: JSON.stringify({
          name: data.name,
          email: data.email
        })
        })
        .then(this._checkResponse)
  }

  logout(){
    return fetch(`${this._baseUrl}/signout`, {
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(this._checkResponse)
}

}

const api = new MainApi(
    {
    baseUrl: 'https://api.mogwuy-diplom.nomoredomains.rocks',
    otherUrl: 'https://api.nomoreparties.co',
    },
    {
      credentials: 'include',
      'Content-Type': 'application/json'
    }
  ); 
  
  export {api, MainApi};