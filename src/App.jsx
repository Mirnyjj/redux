import './App.css';
import { AppLayout } from './AppLayout';
import { arrButton } from './constArr/arrButton';
import PropTypes from 'prop-types';
import { store } from './store';
import { useEffect, useState } from 'react';

function App() {


  let state = {
    draw: false,
    isVictory: false,
    player: 'X',
    buttonState: arrButton,
  };

  const [render, setRender] = useState(false)

  useEffect(() => {
      store.subscribe(() => {
      setRender(true)
    })
  }, [])


    


  const reset = () => {
    store.dispatch({ type: '_RESET_', payload: state })
  }


  return (
    <>
      <AppLayout props={{ reset }} />
    </>
  )

}


App.propTypes = {
  reset: PropTypes.func
}

export default App
