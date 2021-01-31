import {actionType} from './actions'
import { AnyAction, Reducer } from 'redux'
import {deepClone} from '../../utils/helpers'

const initialState = {
   data: {},
   order:[],
}

const productReducer : Reducer<any> =(state: any = initialState, action: AnyAction ) =>  {
  const newState = { ...state }
  switch (action.type) {
    case actionType.ADD_WISHLIST: 
      if(action.payload){
        newState.data = {...newState.data, [action.payload]: true}
        newState.order = [...newState.order]
        newState.order.push(action.payload)
      }
      return newState
    case actionType.REMOVE_WISHLIST:
      const newOrder = [...newState.order].filter(_data => _data !== action.payload)
      const newData = {...newState.data}
      delete newData[action.payload]
      
      return {...newState, order: newOrder, data: newData}
    default: 
      return newState
  }

}


export default productReducer