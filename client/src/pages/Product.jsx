import React, { useContext } from 'react'
import {useParams} from "react-router-dom"
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import { ShopContext } from '../Context/ShopContext';
import DiscriptionBox from '../components/DiscriptionBox/DiscriptionBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';
const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product =all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
