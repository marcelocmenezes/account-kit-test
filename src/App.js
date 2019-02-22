import React, { Component } from 'react';
import AccountKit from 'react-facebook-account-kit';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AccountKit
          appId="897877397220204" // Update this!
          version="v1.1" // Version must be in form v{major}.{minor}
          onResponse={(resp) => console.log(resp)}
          csrf={'csrf token here!'} // Required for security
          countryCode={'+55'} // eg. +60
          phoneNumber={'11944497711'} 
          language={'pt_BR'}
          
        >
          {p => <button {...p}>Initialize Account Kit</button>}
        </AccountKit>
      </div>
    );
  }
}

export default App;
