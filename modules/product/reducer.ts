import {actionType} from './actions'
import { AnyAction, Reducer } from 'redux'
import {deepClone} from '../../utils/helpers'

const initialState = {
   data: {},
   order:[],
   pagination: null
}

const productReducer : Reducer<any> =(state: any = initialState, action: AnyAction ) =>  {
  const newState = { ...state }
  switch (action.type) {
    case actionType.SET_PRODUCT_DATA: 
      if(action.payload){
        newState.data = {...newState.data, ...action.payload}
      }
      return newState
    case actionType.SET_PRODUCT_ORDER:
      newState.order = [...newState.order, ...action.payload]
      return newState
    default: 
      return newState
  }

}


export default productReducer