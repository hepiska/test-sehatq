import React from 'react';
import { categoryListData} from "../hocs/category"
import { Image , Header} from 'semantic-ui-react'


const CategoryCard: React.FC<any> = ({item}) => {
  return(
    <div key={item.id} className="category-card">
      <Image size="small" src={item.imageUrl}></Image>
      <p>{item.name}</p>
    </div>
  )
}


export default categoryListData(CategoryCard)