import React, { Component } from "react";
import logo from "./logo.svg";
import { View, Text, Image, StyleSheet, Animated } from "react-primitives";

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
			outputRange: ["0deg", "360deg"]
		});
		return (
			<View style={styles.app}>
				<View style={styles.header}>
				<Animated.Image
						source={logo}
						style={[
							styles.logo,
							{ transform: [{ rotate: interpolatedRotateAnimation }] }
						]}
						alt="logo"
					/>
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
		display: "flex",
		alignItems: "center",
		height: 150,
		padding:20
	},
	logo: {
		width: 50,
		height: 50
	},
	intro: {
		textAlign: "center",
	},
	code: {
		color: "blue",
		fontSize: 10
	}
});
