import { schema, normalize } from 'normalizr'

export const categorySchema = new schema.Entity('category')

export const productSchema = new schema.Entity('product')


export const mainPageSchema = new schema.Entity("mainPage",  {category: [categorySchema], productPromo: [productSchema]})