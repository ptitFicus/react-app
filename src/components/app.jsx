import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

import Dashboard from './dashboard';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <AppBar className="app-bar" title="Dynamique de la journée"/>
        <Dashboard/>
      </div>
    );
  }
}
