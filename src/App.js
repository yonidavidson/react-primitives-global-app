import React, { Component } from "react";
import logo from "./logo.svg";
import { View, Text, Image, StyleSheet } from "react-primitives";
import "./App.css";

class App extends Component {
	render() {
		return (
			<View style={styles.app}>
				<View style={styles.header}>
					<Image source={logo} style={styles.logo} alt="logo" />
					<Text style={styles.text}>Welcome to React</Text>
				</View>
				<Text style={styles.intro}>
					To get started, edit <code>src/App.js</code> and save to reload.
				</Text>
			</View>
		);
	}
}

export default App;

const styles = StyleSheet.create({
	app: {},
	text: {
		textAlign: "center",
		color: "white"
	},
	header: {
		backgroundColor: "#222",
		height: "150px",
    padding: "20px",
    display: 'flex',
    alignItems: 'center'
	},
	logo: {
		// animation: "App-logo-spin infinite 20s linear",
		width: 50,
		height: 50
	},
	intro: {
		fontSize: "large",
		textAlign: "center"
	}
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
