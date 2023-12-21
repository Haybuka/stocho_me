import { useCallback, useEffect, useState } from 'react'

const useAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const token = localStorage.getItem("__token__");

  const handleAuth = useCallback(
    () => {
      setIsAuthenticated(prev => !prev)

    }, []
  )
  useEffect(() => {
    if (token) {
      // handleAuth()
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
      // handleAuth()
    }
  }, [token, handleAuth])
  console.log(isAuthenticated, 'in hook')
  return ({
    isAuthenticated
  }
  )
}

export default useAuthenticated