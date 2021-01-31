
import { createSelector } from 'reselect'

const getCategories = (state: any, categoryId: string) => {
  return state.category.data[categoryId]}


export const makeSelectedCategory = () =>
  createSelector([getCategories], category => {
    return category
  })