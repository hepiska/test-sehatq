import React, {useRef, useEffect} from 'react';
import { withRouter } from 'next/router'
import Head from 'next/head'
import { Input,Button, Icon, Header } from 'semantic-ui-react'

export default withRouter(({router, children, title, description}: any) => {

  return(
    <div className="global-container">
      <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="title" />

      </Head>
      <div className="page-header">
      <div className="container-child flex flex-align-center" >
      <Header as="h3" style={{ margin: "0px 24px"}}>{title}</Header>
      </div>
    </div>
    <div className="page-container">
      {children}
    </div>
    </div>
  )
})