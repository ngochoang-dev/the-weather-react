import { GET_ALL_FORECAST, GET_ALL_FORECAST_SUCCESS } from './actions';
import { call, put, takeEvery } from 'redux-saga/effects';


const handleGetForecast = () => {
    return fetch('http://localhost:5000/forecast?today=24/3/2022').then(response => response.json())
}

function* getAllForecast() {
    const data = yield call(handleGetForecast);
    yield put({ type: GET_ALL_FORECAST_SUCCESS, data: data.data })
}

function* mySaga() {
    yield takeEvery(GET_ALL_FORECAST, getAllForecast);
}

export default mySaga;
