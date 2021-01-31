import axios from 'axios'

const isBrowser = (process as any).browser 

const BASE_URL = isBrowser ? process.env.NEXT_PUBLIC_BASE_URL :  process.env.BASE_URL

export const request = axios.create({ baseURL: BASE_URL })





