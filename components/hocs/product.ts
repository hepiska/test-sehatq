import {makeSelectedProduct} from "../../modules/product/selector"
import {connect} from "react-redux"

const productListMap = () => {
  const getProduct = makeSelectedProduct()

  return (state: any, ownProps: any) => {
    const product = getProduct(state, ownProps.productId)
    if (!product) return {}
    return {
      item: product,
    }
  }
}

export function productListData(WrappedComponent:any) {
  return connect(productListMap, null)(WrappedComponent)
}