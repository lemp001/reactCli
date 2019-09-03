const initialState = {
  name: 'cuojue1',
  age: 28
}

export default (state = initialState, action) => {
  let newState = {}
  switch (action.type) {
    case 'initData': 
      newState = {...state, name: 'lemp001'};
      return newState;
    case 'initParameters': 
      newState = {...state, age: 18};
      return newState;
    default: 
      return state
  }
}

