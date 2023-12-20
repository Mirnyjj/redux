import { arrButton } from "./constArr/arrButton";

export const initialState = {
        draw: false,
        isVictory: false,
        player: 'X',
        buttonState: arrButton,
};
export const appReducer = (state = initialState, action) => {
    const {type, payload} = action;
    console.log(state)

    switch (type) {
        case 'PLAYER_CHANGE': {
            return {
                ...state,
                player: payload,
            };
        }
        case 'CHECKING_FOR_A_DRAW': {
                return {
                    ...state,
                    draw: payload,
                };
        }
        case 'CHECKING_FOR_WINNINGS': {
            return {
                ...state,
                isVictory: payload,
            };
        }
        case 'BUTTON_STATE': {
            return {
                ...state,
                buttonState: payload,
            }
        }
        case '_RESET_': {
            return payload
        }
        default:
            return state;
    }
};