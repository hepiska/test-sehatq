import React from 'react';
import { withRouter } from 'next/router'
import Head from 'next/head'
import { Input } from 'semantic-ui-react'
import BottomNav from '../organisms/bottom-nav'

export default withRouter(({router, children, title}: any) => {
  return(
    <div className="global-container">
      <Head>{title}</Head>
      <div className="page-header">
      <div className="container-child">
      <Input
        icon='search'
        onFocus={() => router.push("/search")}
        iconPosition='left'
        fluid
        placeholder='Search...'
      />
      </div>
    </div>
    <div className="page-container">
      {children}
    </div>
    <div className="page-nav">
        <div className="container-child ">
        <BottomNav router={router}></BottomNav>
        </div>
      </div>
    </div>
  )
})