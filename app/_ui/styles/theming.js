"use client";
import { createElement as $, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { colorSystem } from "./dsystem/colorSystem";

/* 
1st: Getting App's desgin system
2nd: Checking user's color-scheme preferences
3rd: Wrapping the App with the ThemeProvider and passing the theme object
*/

export default function THEMEWrapper({ children }) {
	//destructuring the colorSystem object
	const { light, dark } = colorSystem;
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

	//check user's color-scheme preferences
	useEffect(() => {
		const prefersDark =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (prefersDark) setIsDarkTheme(true);
	}, []);

	return $(
		ThemeProvider,
		{ theme: isDarkTheme ? dark : light, toggleTheme },
		children
	);
}
