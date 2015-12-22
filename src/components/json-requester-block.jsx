import React from 'react';
import autobind from 'autobind-decorator'

import FlatButton from 'material-ui/lib/flat-button';

export default autobind(class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  parseJSON(response) {
    return response.json()
  }

  unusedMethod() {
    console.log("I'm useless...");
  }

  updateData(data) {
    this.setState(data || {});
  }

  loadDataFromRemote() {
    fetch('http://apis.io/api/apis')
       .then(this.checkStatus)
       .then(this.parseJSON)
       .then(function(data) {
         console.log('request succeeded with JSON response', data);
         return data;
       }).then(this.updateData)
       .catch(function(error) {
          console.log('request failed', error);
       });
  }

  componentDidMount() {
    this.loadDataFromRemote();
  }

  render() {
    return (
      <div>
        <FlatButton label="Re-request" onTouchTap={this.loadDataFromRemote}/>
        <div><pre>{JSON.stringify(this.state.data, null, 2)}</pre></div>;
      </div>
    );
  }
});
