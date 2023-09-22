"use client";
import { styled } from "styled-components";
import { motion } from "framer-motion";

export const MAIN = styled(motion.main)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const SECTION_FULLVP = styled(motion.section)`
	width: 100%;
	max-width: 1300px;
	height: 100vh;
	margin-top: -3.8rem;
	border: 1px solid ${({ theme }) => theme.secondary};
	padding: 0 2rem;
	padding-top: 5rem;
`;

export const SCROLLABLE_DIV = styled(motion.div)`
	border: 1px solid ${({ theme }) => theme.primary};
`;
