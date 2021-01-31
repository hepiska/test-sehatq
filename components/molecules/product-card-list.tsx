import React from 'react';
import { productListData} from "../hocs/product"
import Link from 'next/link'

import { Image , Header, List} from 'semantic-ui-react'
import { Card, Icon } from 'semantic-ui-react'


const ProductCardList: React.FC<any> = ({item }) => {
  return(
      <List.Item>
          <Image size="tiny" src={item.imageUrl}></Image>
          <List.Content>
          <Link href={"/products/"+item.id}>
        <List.Header> 
         {item.title} 
        </List.Header>
        </Link>
        <List.Description>
          {item.price}
        </List.Description>
      </List.Content>
      </List.Item>

    )
      
  
}


export default productListData(ProductCardList)