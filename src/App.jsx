import './App.css';
import { AppLayout } from './AppLayout';
import PropTypes from 'prop-types';
import { store } from './store';
import { useEffect, useState } from 'react';

function App() {
  const {buttonState} = store.getState();
  const [refresh, setRefresh] = useState(buttonState)
  
  useEffect(() => {
      store.subscribe(() => {
          setRefresh(store.getState().buttonState)
    })
  }, [])
  
  return (
    <>
      <AppLayout />
    </>
  )

}


App.propTypes = {
  reset: PropTypes.func
}

export default App
