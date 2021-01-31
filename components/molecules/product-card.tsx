import React from 'react';
import { productListData} from "../hocs/product"
import Link from 'next/link'
import { Image , Header} from 'semantic-ui-react'
import { Card, Icon } from 'semantic-ui-react'


const ProductCard: React.FC<any> = ({item, }) => {
  return(
    <Card key={item.id} fluid>
        <Image src={item.imageUrl} wrapped ui={false} />
        <Card.Content>
        <Card.Header>
        <Link href={"/products/" + item.id}>
           {item.title} 
        </Link>
        </Card.Header>
        </Card.Content>

    </Card>
    )
      
  
}


export default productListData(ProductCard)