export const actionType = {
  SET_CATEGORY_DATA: "category/SET_CATEGORY_DATA",
  SET_CATEGORY_ORDER: "category/SET_CATEGORY_ORDER",
}

export const setCategoryData = (data: any): any  => ({type: actionType.SET_CATEGORY_DATA, payload: data})

export const setCategoryOrder = (data: any): any  => ({type: actionType.SET_CATEGORY_ORDER, payload: data})
