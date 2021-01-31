import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import SearchLayout from '@components/layout/search-layout';
import { createSelector } from 'reselect'
import {List} from 'semantic-ui-react'
import ProductCardList from "@components/molecules/product-card-list"
import {getMainPage} from '../modules/mainpage/actions'



const productObjToArr = createSelector((state: any) => state.product.data, products => {
  return Object.keys(products).map((key) => products[key])
} ) 

const SearchPage = () => {
  const [searchKey, setSearchKey] = useState('')
  const products = useSelector(productObjToArr)

  const dispatch = useDispatch()
  useEffect(() => {
    if(!products.length){
      dispatch(getMainPage())
    }
  }, [dispatch, products.length])
  const onSearchChange =(e:string) => {
    setSearchKey(e)
  }

  const filteredproducts = searchKey ? products.filter(_product => _product.title.toLowerCase().includes(searchKey)) : null

  return(
    <SearchLayout onSearchChange={onSearchChange}>
      <div className="section-container">
        <List divided>
        {filteredproducts ? 
            filteredproducts.map((product: any) => <ProductCardList productId={product.id}></ProductCardList>) : 
            <div>
              <p>please input keyword</p>
            </div>
        }
        {filteredproducts && filteredproducts.length === 0 ?  <p>product unavailable</p> : null}
        </List>
      </div>
    </SearchLayout>
  )
}


export default SearchPage