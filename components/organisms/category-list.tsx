import React from 'react';
import CategoryCard from '../molecules/category-card'


interface  CategoriesListProps {
  list: Array<string | number>
}


const CategoriesList: React.FC<CategoriesListProps> = ({list}) => {
  return(
      <div className="v-list">
      {list.map((_list) => <CategoryCard categoryId={_list} key={_list} /> )}
      </div>
  )
}


export default CategoriesList