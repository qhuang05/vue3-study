import axios from 'axios'

const httpService = axios.create({
  baseURL: '/api',
  timeout: 5000,
  // withCredentials: true,
})

httpService.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error);
})

httpService.interceptors.response.use(response => {
  const res = response.data;
  if(res.status > 0){
    return res;
  } else{
    return Promise.reject(new Error(res.msg || 'Error'));
  }
}, error=>{
  return Promise.reject(error);
})

export default httpService