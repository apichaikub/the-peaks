import api from './_api'
import { SEARCH } from './_enpoint'

export const getDetail = (id: String, params: any) => api.get(`${id}`, { params })
export const getSearch = (params: any) => api.get(`${SEARCH}`, { params })