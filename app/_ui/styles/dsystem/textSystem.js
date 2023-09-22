"use client";
/* 
[+] textSystem.js [+]
-------------
This file defines all the different UI text styles
*/

import { styled } from "styled-components";
import { motion } from "framer-motion";

// Titles
export const H1 = styled(motion.h1)`
	font-family: var(--font-climateCrisis), sans-serif;
	font-size: 2.8rem;
	color: ${(theme) => theme.theme.primary};
	@media (max-width: 450px) {
		font-size: 3rem;
	}
`;
export const H2 = styled(motion.h2)`
	font-family: var(--font--oswald), sans-serif;
	font-size: 2.25rem;
	color: ${(theme) => theme.theme.secondary};
	@media (max-width: 450px) {
		font-size: 1.9rem;
	}
`;

// Paragraphs & Captions
export const P = styled(motion.p)`
	font-family: var(--font-rajdhani), sans-serif;
	font-size: 1.25rem;
	color: ${(theme) => theme.theme.text};
	@media (max-width: 450px) {
		font-size: 1.1rem;
	}
`;
