// For Compilation of Scss Files...
import '../scss/index.scss';

import React from 'react';
import {
	Switch,
  Route
} from 'react-router-dom'

import HomePage from '../components/app/app.jsx'

// Required when Using Server Side Page Loads as well...
// Use this as... <Route path='/' render={renderHomePage} />
const renderHomePage = ({ match, staticContext }) => {
  const id = match.params.id;
  console.log("Static: ", staticContext);
  if (typeof window === 'object') {
  	console.log("Static: ", window.PROPS);
  	return <HomePage {...window.PROPS} />;
  }
  return <HomePage staticContext={staticContext} />;
};

export const App = () => (
	<Switch>
    <Route path='/' component={HomePage} />
  </Switch>
);

export default App;
