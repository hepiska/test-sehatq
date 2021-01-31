import {request} from '../../utils/services'
import {normalize} from 'normalizr'
import * as actions from '../global-actions'

interface PayloadInterface {
  url: string
  startNetwork?: (label?: any) => void
  label?: string
  error?: (error: Error) => void
  endNetwork?: (status?: string, err?: Error) => void
  schema: any
  requestParams: any
  success?: (normalizeData?: any, res?: any) => void
  callback?: (data: any) => void
}

interface ActionType {
  type: string
  payload: PayloadInterface
}


// normaluze api middleware
const api = ({dispatch, getState}: any ) => (next: any) => (action: ActionType)=> {
  if(action.type !== actions.API){
    return next(action)
  }

  const {
    url,
    requestParams,
    success,
    schema,
    label,
    error,
    startNetwork,
    endNetwork,
    callback,
  } = action.payload

  if (callback) {
    callback({ loading: true, status: 'pending' })
  }

  if (startNetwork) {
    dispatch(startNetwork(label))
  }

  return request.request({url, ...requestParams}).then(res => {
          let normalizeData = res.data
          if(schema && normalizeData){
            normalizeData = normalize(res.data, schema)
          }

          if(success){
            dispatch(success(normalizeData, res.data))
            if(callback){
              callback({ 
                loading: false, 
                status: 'success' ,
                data: normalizeData,
                rawData: res.data
              })
            }
          }

          if(endNetwork){
            dispatch(endNetwork("success"))
          }

  }).catch(err => {
    if (error) {
      dispatch(error(err))
    }
    if (callback) {
      callback({
        loading: false,
        status: 'error',
        error: err,
      })
    }
    if (endNetwork) {
      dispatch(endNetwork('error', err))
    }
  })

}

export default api