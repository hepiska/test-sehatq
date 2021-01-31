
import { createSelector } from 'reselect'

const getProduct = (state: any, productId: string) => {
  return state.product.data[productId]}


export const makeSelectedProduct = () =>
  createSelector([getProduct], category => {
    return category
  })