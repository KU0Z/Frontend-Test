import axios from 'axios'

export default {
  getSignedURL (file) {
    let endpoint = 'home'
    let payload = {
      filePath: file.name,
      contentType: file.type
    }
    let options = {
        headers: { 
            
            'content-type': 'application/json',
        },
      };
    return axios.post(endpoint, payload,options)
      .then((res) => {
        console.log(res)
        return Promise.resolve(res.data.body || '/')
      })
      .catch((err) => {
        console.error(err)
        return Promise.reject('/')
      })
  }
}