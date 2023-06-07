import axios from 'axios'
import { getErrorMessage } from './getErrors'
const URL = 'http://localhost:8080/api/v1/messages'

export async function getMessages (userFromId) {
  try {
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const { data } = await axios.get(`${URL}/${userFromId}`, config)
    return data
  } catch (error) {
    console.log(error)
    const message = getErrorMessage(error)
    throw new Error(message)
  }
}
