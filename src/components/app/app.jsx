import React from 'react';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {name: "HomePage"}
	}

  render() {
    return (
      <div>
        <h1> You are at {this.state.name} </h1>
      </div>
    );
  }
}
