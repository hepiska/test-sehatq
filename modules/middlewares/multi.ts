import { batch } from 'react-redux'

const multi = ({ dispatch }: any) => (next: any) => (action: any) => {
  if (!Array.isArray(action)) {
    return next(action)
  }
  batch(() => {
    action.forEach(item => {
      dispatch(item)   
     })
  })
}

export default multi