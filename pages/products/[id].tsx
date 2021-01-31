import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import BackLayout from '@components/layout/back-layout';
import {Image, Header, Icon, Segment,Container, Button, TransitionablePortal} from 'semantic-ui-react'
import {request} from "../../utils/services"
import {addPurchase,} from "../../modules/purchase/actions"
import {addWishlist, removeWishlist} from "../../modules/wishlist/actions"



const ProductDetailPage : React.FC<any> = ({product}) => {
  const dispatch = useDispatch()
  const[modal, showModal] = useState(false)
  const wishlist = useSelector((state: any) => state.wishlist.data)
  const isLiked = wishlist[product?.id || ""]
  const _onLike = () => {
    if(isLiked){
      dispatch(removeWishlist(product.id))
    }else{
      dispatch(addWishlist(product.id))
    }
  }
  const onPurchase= () => {
    dispatch(addPurchase(product.id))
    showModal(true)
  }
  return(
    <BackLayout title={product?.title || "test"} description={product?.description ||"test" }>
      <>
      <TransitionablePortal onClose={() => showModal(false)} open={modal}>
      <Segment
          color="red"
            style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
          >
            <Header>Purchase Success</Header>
            <p>you success purchase {product.title}</p>
          </Segment>
      </TransitionablePortal>
          {product ? (
             <div className="section-container">
                <Image src={product.imageUrl} fluid />
                <div className="flex flex-space">
                  <Header >{product.title}</Header>
                  <Icon name="like" onClick={_onLike} color={isLiked ? "red" : "grey"}></Icon>
                </div>
                <Container>
                  <p>
                    {product.description}
                  </p>
                </Container>
                <div className="flex flex-end flex-align-center" style={{ margin: "24px 0px"}}>
                    <Header style={{margin:"0px 16px"}} textAlign="center" as="h4">{product.price}</Header>
                    <Button color="blue" onClick={onPurchase} >Buy</Button>
                </div>
             </div>
          ): <div><p>product not found</p></div>}
         </>
    </BackLayout>
  )
}


export async function getServerSideProps(context: any) {
  try{
    const res = await request.get("/home")
    const product = res.data[0].data.productPromo.find((_prod: any) => _prod.id +'' === context.params.id)
    return {
      props: {product : product ? product : null}, // will be passed to the page component as props
    }
  }catch (err) {
    return {
      props: {product: null},
    }
  }
 
}


export default ProductDetailPage
