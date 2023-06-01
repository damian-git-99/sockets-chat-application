import axios from 'axios'
import { getErrorMessage } from './getErrors'

const URL = 'http://localhost:8080/api/v1/auth'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export async function loginRequest (email, password) {
  try {
    const { data } = await axios.post(`${URL}/login`, { email, password }, config)
    return data
  } catch (error) {
    console.log(error)
    const message = getErrorMessage(error)
    throw new Error(message)
  }
}

export async function registerRequest (username, email, password) {
  try {
    const { data } = await axios.post(`${URL}/register`, { username, email, password }, config)
    return data
  } catch (error) {
    const message = getErrorMessage(error)
    throw new Error(message)
  }
}

export async function renewTokenRequest (token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const { data } = await axios.get(`${URL}/renew-token`, config)
    return data
  } catch (error) {
    const message = getErrorMessage(error)
    throw new Error(message)
  }
}
