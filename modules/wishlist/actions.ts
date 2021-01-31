export const actionType = {
  ADD_WISHLIST: "wishlist/ADD_WISHLIST",
  REMOVE_WISHLIST: "wishlist/REMOVE_WISHLIST",
}

export const addWishlist = (data: any): any  => ({type: actionType.ADD_WISHLIST, payload:data})

export const removeWishlist = (data: any): any => ({type: actionType.REMOVE_WISHLIST, payload: data})
