import React, { Component } from "react";

import moduleName from "elements/button";
import Header from "parts/Header";
export default class LandingPage extends Component {
	render() {
		console.log(this.props);
		return (
			<>
				<Header {...this.props}></Header>
			</>
		);
	}
}
