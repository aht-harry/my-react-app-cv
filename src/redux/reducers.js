
const initialState = {
    isLoggedIn: false
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGIN_STATUS':
        return {
          ...state,
          isLoggedIn: action.payload
        }
      default:
        return state
    }
  }
  
  export default reducer