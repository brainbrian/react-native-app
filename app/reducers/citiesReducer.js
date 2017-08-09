const initialState = {
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
  return state;
}
