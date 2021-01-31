import {makeSelectedCategory} from "../../modules/category/selector"
import {connect} from "react-redux"
import { Component, } from "react"

const categoryListMap = () => {
  const getCategories = makeSelectedCategory()

  return (state: any, ownProps: any) => {
    const category = getCategories(state, ownProps.categoryId)
    if (!category) return {}
    return {
      item: category,
    }
  }
}
export function categoryListData(WrappedComponent:any) {
  return connect(categoryListMap, null)(WrappedComponent)
}