import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { IconsAnimation } from "./IconsAnimation";
import "./main.css";

const introText = `I am an aspiring and proactive web developer with passion to the tech and process of creating web
applications. Looking forward to innovate and work on great user experience. Hands on approach for learning
new Technology.`;

export const Main = ({ scrMode, setScrMode }) => {
	return (
		<>
			<Header />
			<div className="mainContainer">
				<div className="welcome">
					<div className="headlineContainer">
						<h1>OR REGEV</h1>
						<h2>
							<em>WEB DEVELOPER</em>
						</h2>
					</div>
				</div>
				<div className="openingContainer">
					<p>{introText}</p>
					<br />
					<p>Core technologies i use im my projects:</p>
				</div>
				<IconsAnimation />
			</div>
			<Footer scrMode={scrMode} setScrMode={setScrMode} />
		</>
	);
};
