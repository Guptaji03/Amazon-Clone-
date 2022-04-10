import { GETCARTITEMS } from "./ActionType"

const initialState = {
cartItems:[],
}

export const cartreducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GETCARTITEMS:
    return { ...state, cartItems:[...payload] }

  default:
    return state
  }
}
