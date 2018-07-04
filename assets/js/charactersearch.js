import axios from "axios"
import md5 from "md5"

export default name => {
  const ts = new Date().getTime()
  const publicKey = "4ce3a8f86d1fc6c4f8a45dd8b2375e9b"
  const privateKey = "0ee0eceaca30c0c2ad606758f08454c582b4c8d8"
  const hash = md5(`${ts}${privateKey}${publicKey}`)
  const hero = name

  const instance = axios.create({
    baseURL: `https://gateway.marvel.com:443/v1/public/characters?name=${hero}&apikey=${publicKey}&hash=${hash}`,
    timeout: 10000
  })

  instance
    .get()
    .then(response => console.log(response.data.data.results))
    .catch(error => console.log(error))
}
