import './App.css';
import { Board } from './components/board/board';
import { Inform } from './components/inform/Inform';

export const AppLayout = ({ props }) => {
    const { player, isVictory, buttonState, drow, clickButton, reset } = props;
    return (
        <div>
            <Inform player={player} isVictory={isVictory} drow={drow} />
            <Board buttonState={buttonState} onClick={clickButton} />
            <button className='StyleButton' onClick={reset}>Начать заново</button>
        </div>
    )
}

