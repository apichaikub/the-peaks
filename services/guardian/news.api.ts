import api from './_api'
import { SEARCH } from './_enpoint'

export const getSearch = (params: any) => api.get(`${SEARCH}`, { params })