import { GET_CURRENCIES_DATA } from "../Types";

const initialState = {
    currenciesData: []
};

export default function currenciesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCIES_DATA:
            return {
                ...state,
                currenciesData: action.payload
            };


        default:
            return state;
    }
}
