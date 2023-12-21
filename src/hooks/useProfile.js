

const useProfile = () => {
  const profile = JSON.parse(localStorage.getItem('__profile__'));

  return (
    { profile }
  )
}

export default useProfile