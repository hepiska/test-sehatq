import  React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import {getMainPage} from '../modules/mainpage/actions'
import{Loader, Dimmer} from "semantic-ui-react"
import CategoriesList from '@components/organisms/category-list'
import MainLayout from '@components/layout/main-layout'
import ProductCard from "@components/molecules/product-card"



const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMainPage())
  }, [dispatch])

  const mainPage = useSelector((state: any) => state.mainPage)
  return (
    <MainLayout>
     <CategoriesList list={mainPage.categories}></CategoriesList>
     <div className="section-container padding-bottom-60">
        {mainPage.products.map((productId: number) => <ProductCard key={productId} productId={productId} fluid/> )}
     </div>
     {mainPage.loading && (    <Dimmer active>
      <Loader />
    </Dimmer>)}
    </MainLayout>
  )
}

export default Index
