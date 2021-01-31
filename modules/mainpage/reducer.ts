import {actionType} from './actions'
import { AnyAction, Reducer } from 'redux'

const initialState = {
   categories: [],
   products:[],
  loading: false
}

const productReducer : Reducer<any> =(state: any = initialState, action: AnyAction ) =>  {
  const newState = { ...state }
  switch (action.type) {
    case actionType.SET_MAIN_PAGE_CATEGORY: 
      if(action.payload){
        newState.categories = [ ...action.payload]
      }
      return newState
    case actionType.SET_MAIN_PAGE_PRODUCT:
      newState.products = [ ...action.payload]
      return newState
    case actionType.SET_LOADING:
      newState.loading = action.payload
      return newState
    default: 
      return newState
  }

}


export default productReducer