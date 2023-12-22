import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, []);
  return (
    <>
      <p>hi</p>
    </>
  );
}

export default App;
