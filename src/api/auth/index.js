import axios from ".."
import {
  useMutation,
} from 'react-query'

const _loginUserRequest = async (data) => {

  return axios.post('admin/login', { ...data })
}


const _logoutUserRequest = async (data) => {

  return axios.post('admin/logout', { ...data })
}



export const useLoginRequest = (options) => {
  return useMutation(_loginUserRequest, { ...options })
}

export const useLogoutRequest = (options) => {
  return useMutation(_logoutUserRequest, { ...options })
}