const initialState = {
  list: [1, 2, 3, 4],
  show: false,
  loading: false,
}

export default (state = initialState, action) => {
  let newState = {} 
  switch (action.type) {
    case 'add': 
      newState = {...state, list: state.list}
      return newState
    default: 
      return state;
  }
}