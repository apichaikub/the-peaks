import axios, { AxiosInstance } from "axios";
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const instance : AxiosInstance = axios.create({
  baseURL: publicRuntimeConfig.API,
  timeout: 1000 * 10,
})

instance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    'api-key': '20fd1df7-2d36-4fb9-b11c-ced9946cea46',
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

export default instance