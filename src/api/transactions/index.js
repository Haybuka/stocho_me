import axios from ".."
import {

  useQuery
} from 'react-query'

const _getTransactionRequest = async (data) => {

  return axios.get('admin/clients/transactions', { ...data })
}




export const useGetTransactionData = (options) => {
  return useQuery("transaction", _getTransactionRequest, { select: (data) => data?.data?.data, ...options })
}