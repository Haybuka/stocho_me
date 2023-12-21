import { useEffect, useState } from 'react'

const useAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const token = localStorage.getItem("__token__");

  useEffect(() => {
    if (token) {

      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [token])
  return ({
    isAuthenticated
  }
  )
}

export default useAuthenticated