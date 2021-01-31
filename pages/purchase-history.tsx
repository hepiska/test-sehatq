import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import BackLayout from '@components/layout/back-layout';
import {List} from 'semantic-ui-react'
import ProductCardList from "@components/molecules/product-card-list"
import {getMainPage} from '../modules/mainpage/actions'



const SearchPage = () => {
  const wishlist = useSelector((state: any) => state.purchase.order)
  const product = useSelector((state: any) => state.product.data)
  const productlength = Object.keys(product).length


  const dispatch = useDispatch()
  useEffect(() => {
    if(!productlength){
      dispatch(getMainPage())
    }
  }, [dispatch, productlength])

  return(
    <BackLayout title="Purchase history" authOnly>
      <div className="section-container">
        <List divided>
        {wishlist ? 
            wishlist.map((id: any) => <ProductCardList productId={id}></ProductCardList>) : 
            <div>
              <p>please input keyword</p>
            </div>
        }
        {wishlist && wishlist.length === 0 ?  <p>dont have purhcase</p> : null}
        </List>
      </div>
    </BackLayout>
  )
}


export default SearchPage