
import { useState } from "react";
import { store } from "../../store"
import { check, winCheck } from "../../utils/winningСheck";
import './board.css'
// import { arrButton } from "../../constArr/arrButton";


// eslint-disable-next-line react/prop-types
export const BoardLayout = () => {

    // const [stateButton, setStateButton] = useState(arrButton)
    const { buttonState } = store.getState();


    const clickButton = (el) => {
    const { draw, isVictory, player, buttonState} = store.getState();

    
        if (draw || isVictory) return;

        const newArrButton = buttonState.map((mean, ind) => el === ind ? player : mean);
        // setStateButton(newArrButton)
        store.dispatch({ type: 'BUTTON_STATE', payload: newArrButton })
        // setButtonState(newArrButton);

        if (winCheck(newArrButton, player)) {
            store.dispatch({ type: 'CHECKING_FOR_WINNINGS', payload: true })
            // setIsVictory(true)
            return
        }

        if (check(newArrButton)) {
            store.dispatch({ type: 'CHECKING_FOR_A_DRAW', payload: true })
            // setDrow(true)
            return
        }

        if (player === 'X') {
            store.dispatch({ type: 'PLAYER_CHANGE', payload: '0' })
        } else {
            store.dispatch({ type: 'PLAYER_CHANGE', payload: 'X' })

        }
    console.log(buttonState)
    };
    console.log(buttonState)
    return (
        <div className="header">
            {buttonState.map((elem, index) => (
                <button className="cell" onClick={() => clickButton(index)} key={index}>
                    {elem}
                </button>))}
        </div>
    )
}



