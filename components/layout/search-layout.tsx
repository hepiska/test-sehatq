import React, {useRef, useEffect} from 'react';
import { withRouter } from 'next/router'
import Head from 'next/head'
import { Input,Button, Icon } from 'semantic-ui-react'

export default withRouter(({router, children, title, onSearchChange}: any) => {
  const inputRef = useRef(null);
  useEffect(()=> {
    (inputRef as any).current.focus()
  },[])

  const onChange = (_: any, e: any) => {
    onSearchChange(e.value)
  }


  return(
    <div className="global-container">
      <Head>{title}</Head>
      <div className="page-header">
      <div className="container-child flex" >
      <Button circular onClick={router.back}> <Icon name="arrow left"></Icon> </Button>
      <div style={{flex: 1}}>
      <Input
        icon='search'
        iconPosition='left'
        onChange={onChange}
         ref={inputRef}
        fluid
        placeholder='Search...'
      />
      </div>
      </div>
    </div>
    <div className="page-container">
      {children}
    </div>
    </div>
  )
})