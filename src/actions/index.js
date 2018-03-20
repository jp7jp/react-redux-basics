import axios from 'axios';

export const getAllVehicles = () => {
  return (dispatch) => {
    axios.get('https://api-cdn.gruposinal.com.br/public/cars/search?brand=grupo-sinal&paginate=eyJvZmZzZXQiOjB9')
      .then((response) => {
        dispatch({
          type: 'GET_ALL_VEHICLES',
          payload: response.data.cars
        })
      })
  }
}
