import { useState } from 'react';
import './App.css';
import { AppLayout } from './AppLayout';
import { arrButton } from './constArr/arrButton';
import * as isCheck from './utils/winningСheck.js';
import PropTypes from 'prop-types';

function App() {
  const [player, setPlayer] = useState("X");
  const [drow, setDrow] = useState(false);
  const [isVictory, setIsVictory] = useState(false);
  const [buttonState, setButtonState] = useState(arrButton);

  const reset = () => {
    setDrow(false);
    setIsVictory(false);
    setPlayer('X');
    setButtonState(arrButton);
  }

  const clickButton = (el) => {
    if (drow || isVictory) return;

    const newArrButton = buttonState.map((mean, ind) => el === ind ? player : mean);

    setButtonState(newArrButton);

    if (isCheck.winCheck(newArrButton, player)) {
      setIsVictory(true)
      return
    }

    if (isCheck.check(newArrButton)) {
      setDrow(true)
      return
    }


    setPlayer((play) => (play === 'X' ? '0' : 'X'));
  };

  return (
    <>
      <AppLayout props={{ player, isVictory, buttonState, drow, clickButton, reset }} />
    </>
  )

}

App.propTypes = {
  player: PropTypes.string,
  isVictory: PropTypes.number,
  buttonState: PropTypes.string,
  drow: PropTypes.bool,
  clickButton: PropTypes.func,
  reset: PropTypes.func
}

export default App

