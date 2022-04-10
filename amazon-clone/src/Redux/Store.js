import {createStore} from "redux"
import { cartreducer } from "./Reducer"

 const store =createStore(cartreducer)

 export default store