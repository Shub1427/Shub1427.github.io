import React, { Component } from 'react';
import withAppStore from './helpers/with-app-store';
import ProfileHeader from './components/profile-header';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <ProfileHeader />
      </div>
    );
  }
}

export default withAppStore(App);
