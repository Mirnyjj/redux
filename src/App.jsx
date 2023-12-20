import './App.css';
import { AppLayout } from './AppLayout';
import PropTypes from 'prop-types';
import { store } from './store';
import { useEffect} from 'react';

function App() {

  useEffect(() => {
      store.subscribe(() => {
          store.getState()
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
