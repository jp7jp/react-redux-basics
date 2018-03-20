const INITIAL_STATE = {
  all: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_ALL_VEHICLES':
      return {
        ...state,
        all: action.payload
      }
    default:
      return state;
  }
}
