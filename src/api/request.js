import axios from 'axios'

const instance =  axios.create({
  baseURL: process.env.VUE_APP_API_BASEURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default instance