import React, { Component } from 'react';
import AccountKit from 'react-facebook-account-kit';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = { 
      isLogged: false
    }
  }
  render() {
    return (
      <div className="App">
      { 
        !this.state.isLogged ?
        <AccountKit
          appId="897877397220204" // Update this!
          version="v1.1" // Version must be in form v{major}.{minor}
          onResponse={(resp) => { console.log(resp) }}// if(resp.status === 'PARTIALLY_AUTHENTICATED') this.setState({isLogged: true})}}
          csrf={'Marcelo'} // Required for security
          countryCode={'+55'} // eg. +60
          phoneNumber={'11944497711'} 
          language={'pt_BR'}
        >
          {p => <button {...p}>Initialize Account Kit</button>}
        </AccountKit>
        : <h4>Logado!</h4>
        }
      </div>
    );
  }
}

export default App;
