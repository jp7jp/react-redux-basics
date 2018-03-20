const vehicles = {
  all: [
    {
      _id: 1,
      model: { name: 'Fiat Punto from Action' }
    },
    {
      _id: 2,
      model: { name: 'Honda HR-V' }
    },
    {
      _id: 3,
      model: { name: 'Hyundai HB20' }
    }
  ]
}

export const getAllVehicles = () => {
  return {
    type: 'GET_ALL_VEHICLES',
    payload: vehicles.all
  }
}
