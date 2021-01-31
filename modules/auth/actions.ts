export const actionType = {
  LOGIN: "auth/LOGIN",
  LOGOUT: "auth/LOGOUT",
}

export const login = (data: any): any  => ({type: actionType.LOGIN, payload:data})

export const logout = (): any => ({type: actionType.LOGOUT})
