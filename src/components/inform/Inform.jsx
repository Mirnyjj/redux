import './inform.css'
import PropTypes from 'prop-types';

export const Inform = ({ player, isVictory, drow }) => {
    const state = isVictory ? `Выиграл ${player}` : drow ? 'Ничья' : `Сейчас ходит ${player}`
    return <InformLoyout state={state} />
}
const InformLoyout = ({ state }) => {
    return <h1>{state}</h1>
}
Inform.propTypes = {
    player: PropTypes.string,
    isVictory: PropTypes.bool,
    drow: PropTypes.bool
}
