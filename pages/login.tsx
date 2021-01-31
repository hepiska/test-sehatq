import  React, { useEffect, useState } from 'react'
import PlainLayout from '@components/layout/plain-layout'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import {getMainPage} from '../modules/mainpage/actions'
import {login} from '../modules/auth/actions'
import GoogleAuth from '@components/molecules/google-auth'
import FacebookAuth from '@components/molecules/facebook-auth'
import { Button, Icon,Checkbox,Message, Form, Input, Label } from 'semantic-ui-react'
import { useRouter } from 'next/router'


// 1345810558907241

const GoogleButton = ({ onClick }: any) => (<Button fluid style={{ margin: "15px 0px"}} onClick={onClick} color='red'>
  
<Icon name='google' /> Google
</Button>)


const FacebookButton = ({ onClick }: any) => (<Button fluid style={{ margin: "15px 0px"}} onClick={onClick} color='facebook'>
<Icon name='facebook' /> Facebook
</Button>)

const fields = [{
  label: "Email",
  key: "email",
  type: "email",
  placeholder: "Email",
  rule: /(\w{1,})/,
},{
  label: "Password",
  key: "password",
  type: "password",
  placeholder: "Password",
  rule: /(\w{1,})/,
}]




const LoginPage = () => {
  const [data, setData] = useState({email: "", password: ""}) as any
 const router = useRouter()
  const isAuth = useSelector((state: any) => state.auth.isAuth)

  const [showError, setShowError] = useState(false)
  const dispatch = useDispatch()
  const handleSubmit = () => {
      const isPass = fields.reduce((acc, field) =>{
        return acc && field.rule.test(data[field.key])
      }, true)
      if(!isPass){
        setShowError(true)
      }else{
        dispatch(login(data.email))
      }
  }
  const changeData = (_: any, e: any) => {
      setShowError(false)
      setData((_data: any) => {
        _data[e.name] = e.value
        return {..._data}
      })
  }


  if(isAuth){
    router.replace("/")
  }

  return(
    <PlainLayout title="login">
    <div>
    <Form className="section-container" error={showError} onSubmit={handleSubmit}>
      {fields.map((field: any) => {
        return(
          <Form.Input 
          key={field.key}
          value={data[field.key]}          
          error={!field.rule.test(data[field.key]|| "")}
          placeholder={field.placeholder} 
          onChange={changeData}
          label={field.label}
          name={field.key} 
          type={field.type}
          />
        )
      })}
      <Button fluid type='submit' primary>Submit</Button>

       <GoogleAuth
        component={GoogleButton}
        onSuccess={({profile}: any) => {
          dispatch(login(profile.email))
        }}
        appId="519309906111-8utr6fdd2q12rovj3vhn9t3h76mb0rtc.apps.googleusercontent.com"
      />
      <FacebookAuth
      component={FacebookButton}
      onSuccess={({profile}: any) => {
        dispatch(login(profile.email))
      }}
      appId="1345810558907241"
      />
        <Message
      error
      header='ups something wrong'
      content='some thing wrong'
    />

    </Form>
 
    </div>
    </PlainLayout>

  )
}


export default  LoginPage 