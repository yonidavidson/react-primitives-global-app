import React, { Component } from "react";
import logo from "./logo.svg";
import { View, Text, Image, StyleSheet, Animated } from "react-primitives";
import "./App.css";

class App extends Component {
	componentWillMount() {
		this._animatedValue = new Animated.Value(0);
	}

	componentDidMount() {
		Animated.timing(this._animatedValue, {
			toValue: 100,
			duration: 3000
		}).start();
	}

	render() {
		var interpolatedRotateAnimation = this._animatedValue.interpolate({
        inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    });
		return (
			<View style={styles.app}>
				<View style={styles.header}>
					<Animated.Image source={logo} style={[styles.logo,{transform: [{rotate: interpolatedRotateAnimation}]}]} alt="logo" />
					<Text style={styles.text}>Welcome to React</Text>
				</View>
				<Text style={styles.intro}>
					To get started, edit <Text style={styles.code}>src/App.js</Text> and
					save to reload.
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
		display: "flex",
		alignItems: "center"
	},
	logo: {
		// animation: "App-logo-spin infinite 20s linear",
		width: 50,
		height: 50
	},
	intro: {
		fontSize: "large",
		textAlign: "center"
	},
	code: {
		color: "blue",
		fontSize: "small"
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
