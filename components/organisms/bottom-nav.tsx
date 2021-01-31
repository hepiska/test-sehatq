import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../../modules/auth/actions'



const BottomNav : React.FC<any> = ({router}) => {
  const dispatch = useDispatch()
  return(
    <Button.Group size='large' fluid>
    <Button onClick={() => router.push("/")}>
      <Icon name="home"></Icon>
    </Button>
    <Button onClick={() => router.push("/wishlist")}>
      <Icon name="like"></Icon>
    </Button>
    <Button  onClick={() => router.push("/purchase-history")}>
      <Icon name="cart"></Icon>
    </Button>
    <Button onClick={() => dispatch(logout())} >
      <Icon name="log out"></Icon>
    </Button>
  </Button.Group>
  )
}

export default BottomNav