import {actionType} from './actions'
import { AnyAction, Reducer } from 'redux'
import {deepClone} from '../../utils/helpers'

let token = null
if(process.browser){
   token = localStorage.getItem("token")
}


const initialState = {
   token: token,
   isAuth: !!token,
}

const productReducer : Reducer<any> =(state: any = initialState, action: AnyAction ) =>  {
  const newState = { ...state }
  switch (action.type) {
    case actionType.LOGIN: 
      if(action.payload){
          newState.token = action.payload
          newState.isAuth = true
      }
      return newState
    case actionType.LOGOUT:
      newState.token = null
      newState.isAuth = false
      localStorage.removeItem('token')
      return newState
    default: 
      return newState
  }

}


export default productReducer