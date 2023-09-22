"use client";
import { createElement as $ } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export default function devNavBar() {
	return $(
		simpleMenu,
		null,
		$(menuItems, null, $(Link, { href: "/" }, "Home")),
		$(menuItems, null, $(Link, { href: "/the_garden" }, "The Garden")),
		$(menuItems, null, $(Link, { href: "/the_kitchen" }, "The Kitchen")),
		$(menuItems, null, $(Link, { href: "/contact" }, "Contact"))
	);
}

const simpleMenu = styled(motion.ul)`
	background-color: #141415;
	color: white;
	display: flex;
	flex: 1;
	border: 1px solid black;
	justify-content: space-evenly;
`;
const menuItems = styled(motion.li)``;
