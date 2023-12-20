import './App.css';
import { BoardLayout } from './components/board/board';
import { Inform } from './components/inform/Inform';

// eslint-disable-next-line react/prop-types
export const AppLayout = ({ props }) => {
    // eslint-disable-next-line react/prop-types
    const { reset} = props;
    return (
        <div>
            <Inform />
            <BoardLayout/>
            <button className='StyleButton' onClick={reset}>Начать заново</button>
        </div>
    )
}

