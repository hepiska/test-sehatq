export const actionType = {
  SET_PRODUCT_DATA: "product/SET_PRODUCT_DATA",
  SET_PRODUCT_ORDER: "product/SET_PRODUCT_DATA",
}

export const setProductData = (data: any): any  => ({type: actionType.SET_PRODUCT_DATA, payload:data})

export const setProductOrder = (data: any): any  => ({type: actionType.SET_PRODUCT_ORDER, payload: data})
