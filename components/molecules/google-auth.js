import React from 'react'


function loadAndInitGAPI() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://apis.google.com/js/api.js'
    script.onload = (e) => {
      window.gapi.load('auth2', () => {
        resolve(window.gapi)
      })
    }
    document.getElementsByTagName('head')[0].appendChild(script)
  })
}

let GapiAuth = {}

export const GoogleLogout = () => {
  GapiAuth.signOut()
}

class GoogleAuth extends React.Component {
  componentDidMount() {
    loadAndInitGAPI().then((gapi) => {
      gapi.auth2.init({ client_id: this.props.appId })
        .then(() => {
          GapiAuth = window.gapi.auth2.getAuthInstance()
        })
    })
  }
  clickHandler = () => {
    if (GapiAuth.isSignedIn && GapiAuth.isSignedIn.get()) {
      const user = GapiAuth.currentUser.get()
      const profile = user.getBasicProfile()
      const output = {
        profile: {
          id: profile.getId(),
          firstName: profile.getGivenName(),
          lastName: profile.getFamilyName(),
          email: profile.getEmail(),
        },
      }
      this.props.onSuccess(output)
    } else {
      GapiAuth.signIn().then((user) => {
        const profile = user.getBasicProfile()
        const output = {
          profile: {
            id: profile.getId(),
            firstName: profile.getGivenName(),
            lastName: profile.getFamilyName(),
            email: profile.getEmail(),
          },
        }
        this.props.onSuccess(output)
      })
    }
  }

  render() {
    const { component: Component } = this.props
    return (
      <div>
        <Component onClick={this.clickHandler} />
      </div>
    )
  }
}


export default (GoogleAuth)