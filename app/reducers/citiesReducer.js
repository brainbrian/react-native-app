import { ADD_CITY, FETCHING_DATA, FETCHING_DATA_SUCCESS } from '../constants';

const initialState = {
  isFetching: true,
  error: false,
  cities: {},
}

export default function citiesReducer(state = initialState, action) {
  // console.log('action', action);
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        cities: action.cities,
      }
    case ADD_CITY:
      return {
        ...state,
        cities: {
          ...state.cities,
          [action.city.name]: {
            name: action.city.name,
            country: action.city.country,
            locations: []
          }
        }
      }
    default:
      return state;
  }
}
