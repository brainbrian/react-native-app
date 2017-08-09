import { ADD_CITY } from '../constants';

const initialState = {
  isLoading: true,
  cities: {
    Austin: {
      name: 'Austin',
      country: 'USA',
      locations: [],
    },
    Milwaukee: {
      name: 'Milwaukee',
      country: 'USA',
      locations: []
    },
    Seattle: {
      name: 'Seattle',
      country: 'USA',
      locations: []
    },
  },
}

export default function citiesReducer(state = initialState, action) {
  switch (action.type) {
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
