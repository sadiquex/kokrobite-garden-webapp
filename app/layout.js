import { createElement as $ } from "react";
import StyledComponentsRegistry from "./_lib/registry";
import THEMEWrapper from "./_ui/styles/theming";
import { GlobalStyle } from "./_ui/styles/globals";
import devNavBar from "./_ui/Navigation/Navbar/devNavbar";

export const metadata = {
	title: "Kokrobite Garden",
	description: "Developed by Mayak Technologies | 2023",
};

export default function RootLayout({ children }) {
	return $(
		"html",
		{ lang: "en" },
		$(
			"body",
			null,
			$(
				StyledComponentsRegistry, // Get all the stylesheet to flush them into <head>
				null,
				$(THEMEWrapper, null, $(GlobalStyle), $(devNavBar), children) // Children is wrapped with THEMEWrapper & GlobalStyle (css reset + theming, dark/light mode)
			)
		)
	);
}

/* 
layout.js
this file defines the general layout of our page, and specifically the ui elements that do not need to re-render such as Navigation Bars, Footers etc.

We also provide all children element the SCRegistry wrapper. More info on this wrapper in registry.js

*/
