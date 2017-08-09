import { ADD_CITY } from '../constants';

export function addCity(city) {
  return {
    type: ADD_CITY,
    city: city,
  }
}
