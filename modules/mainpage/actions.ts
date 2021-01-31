import {API} from '../global-actions'
import {normalize} from 'normalizr'
import { mainPageSchema}  from '../normalize-schema'
import {setCategoryData} from '../category/actions'
import {setProductData} from '../product/actions'

export const actionType = {
  SET_MAIN_PAGE_PRODUCT: "mainPage/SET_MAIN_PAGE_PRODUCT",
  SET_MAIN_PAGE_CATEGORY: "mainPage/SET_MAIN_PAGE_CATEGORY",
  SET_LOADING: "mainPage/SET_LOADING"
}

export const setMainPageProduct = (data: any): any  => ({type: actionType.SET_MAIN_PAGE_PRODUCT,payload: data})

export const setMainPageCategory = (data: any): any  => ({type: actionType.SET_MAIN_PAGE_CATEGORY, payload: data})
export const setMainPageLoading = (data: any): any  => ({type: actionType.SET_LOADING, payload: data})

export const getMainPage = () => ({
  type: API,
  payload : {
    schema: [mainPageSchema],
    url :"/home",
    startNetwork:() => setMainPageLoading(true),
    success: (data: any, rawData: any) => {
      const normalizeData = normalize(rawData[0].data, mainPageSchema)
      const mainPage = (normalizeData as any)?.entities.mainPage?.undefined
      return [setCategoryData(normalizeData.entities.category), 
        setProductData(normalizeData.entities.product),
        setMainPageCategory(mainPage.category),
        setMainPageProduct(mainPage.productPromo),
        setMainPageLoading(false)]
    }
  }
})