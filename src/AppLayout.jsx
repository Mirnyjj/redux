import './App.css';
import { BoardLayout } from './components/board/board';
import { Inform } from './components/inform/Inform';
import { state } from './initialState';
import { store } from './store';

export const AppLayout = () => {


    const reset = () => {
        store.dispatch({ type: '_RESET_', payload: state })
        
      }

    return (
        <div>
            <Inform />
            <BoardLayout/>
            <button className='StyleButton' onClick={() => reset()}>Начать заново</button>
        </div>
    )
}

