import categoryReducer from "./category/reducer"
import { combineReducers, Reducer } from 'redux'
import productReducer from "./product/reducer"
import mainPageReducer from "./mainpage/reducer"
import wishlistReducer from "./wishlist/reducer"
import purchaseReducer from "./purchase/reducer"
import authReducer from "./auth/reducer"




export default combineReducers({
  category: categoryReducer,
  product: productReducer,
  mainPage: mainPageReducer,
  wishlist: wishlistReducer,
  purchase: purchaseReducer,
  auth: authReducer,
})