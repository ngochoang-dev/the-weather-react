import { combineReducers } from 'redux';
import { GET_ALL_FORECAST_SUCCESS } from './actions';

const initialState = [];

const getAllForecast = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_FORECAST_SUCCESS:
            return [...state, ...action.data];
        default:
            return state
    }
}

const rootReducer = combineReducers({
    getAllForecast
})

export default rootReducer;
