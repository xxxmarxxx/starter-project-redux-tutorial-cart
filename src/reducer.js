import { DECREASE, INCREASE, CLEAR_CART,REMOVE } from "./actions";

function reducer(state, action) {
  
  if (action.type === CLEAR_CART) {
      return { ...state, cart: [] };
    }
    if(action.type === DECREASE){
      console.log('you decreased amount')
    }
    if(action.type === INCREASE){
      console.log('you increase amount')
    }
    if(action.type === REMOVE){
      console.log(action.id)
    }
    return state;

  }
  export default reducer;

  // ------ mozna tez switch zamiast if ------

  // switch (action.type) {
  //   case CLEAR_CART:
  //     return { ...state, cart: [] };
  //   default:
  //     return state;
  // }