import React, {useRef, useEffect} from 'react';
import { withRouter } from 'next/router'
import {useSelector} from 'react-redux'
import Head from 'next/head'
import { Input,Button, Icon, Header } from 'semantic-ui-react'

export default withRouter(({router, children, title, description, authOnly}: any) => {
  const isAuth = useSelector((state: any) => state.auth.isAuth)

  useEffect(() => {
      if(authOnly && !isAuth){
    router.push("/login")
  }
  },[authOnly, isAuth])


  return(
    <div className="global-container">
      <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="title" />

      </Head>
      <div className="page-header">
      <div className="container-child flex flex-align-center" >
      <Button circular onClick={router.back}> <Icon name="arrow left"></Icon> </Button>
      <Header as="h3" style={{ margin: "0px 24px"}}>{title}</Header>
      </div>
    </div>
    <div className="page-container">
      {children}
    </div>
    </div>
  )
})