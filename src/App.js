import React, { Component } from "react";
import logo from "./logo.svg";
import { View, Text, Image, StyleSheet } from "react-primitives";
import "./App.css";

class App extends Component {
	render() {
		return (
			<View style={styles.app}>
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</View>
		);
	}
}

export default App;

const styles = StyleSheet.create({
	app: {
		textAlign: "center"
	}
	// logo: {
	// 	animation: "App-logo-spin infinite 20s linear",
	// 	height: "80px"
	// },
	// header: {
	// 	"background-color": "#222",
	// 	height: "150px",
	// 	padding: "20px",
	// 	color: 'white'
	// },
	// intro:{
	//   'font-size':'large'
	// }
});

// .App {
//   text-align: center;
// }

// App-logo {
//   animation: App-logo-spin infinite 20s linear;
//   height: 80px;
// }

// .App-header {
//   background-color: #222;
//   height: 150px;
//   padding: 20px;
//   color: white;
// }

// .App-intro {
//   font-size: large;
// }

// @keyframes App-logo-spin {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
