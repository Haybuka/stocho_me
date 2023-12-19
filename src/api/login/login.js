import axios from ".."
import {
  useMutation,
} from 'react-query'

const _loginUserRequest = async (data) => {

  return axios.post('admin/login', { ...data })
}




export const useLoginRequest = (options) => {
  return useMutation(_loginUserRequest, { ...options })
}