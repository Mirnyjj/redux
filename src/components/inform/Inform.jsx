import { store } from '../../store';
import './inform.css'
import PropTypes from 'prop-types';

export const Inform = () => {
    const { draw, isVictory, player } = store.getState();
    const state = isVictory ? `Выиграл ${player}` : draw ? 'Ничья' : `Сейчас ходит ${player}`
    return <InformLoyout state={state} />
}
// eslint-disable-next-line react/prop-types
const InformLoyout = ({ state }) => {
    return <h1>{state}</h1>
}
Inform.propTypes = {
    player: PropTypes.string,
    isVictory: PropTypes.bool,
    drow: PropTypes.bool,
    state: PropTypes.string,
}
