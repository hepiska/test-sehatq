export const actionType = {
  REMOVE_PURCHASE: "purchase/REMOVE_PURCHASE",
  ADD_PURCHASE: "purchase/REMOVE_PURCHASE",
}

export const addPurchase = (data: any): any  => ({type: actionType.ADD_PURCHASE, payload:data})

export const removePurchase = (data: any): any => ({type: actionType.REMOVE_PURCHASE, payload: data})
