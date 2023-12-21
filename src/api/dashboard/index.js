import axios from ".."
import {

  useQuery
} from 'react-query'

const _getDashboardRequest = async (data) => {

  return axios.get('admin/dashboard-summary', { ...data })
}




export const useGetDashboardData = (options) => {
  return useQuery("dashboardSummary", _getDashboardRequest, { select: (data) => data?.data, ...options })
}