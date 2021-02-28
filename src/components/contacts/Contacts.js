import React from "react";
import { Header } from "../header/Header";
import { EnvelopeSVG } from "./svg/EnvelopeSVG";
import { GithubSVG } from "./svg/GithubSVG";
import { CodepenSVG } from "./svg/CodepenSVG";
import { LinkedinSVG } from "./svg/LinkedinSVG";
import { Footer } from "../footer/Footer";

import "./contacts.css";

export const Contacts = (props) => {
	return (
		<>
			<Header />
			<div className="contactsContainer centerIt">
				<div className="linksContainer">
					<h3 className="contactHead">Contact me:</h3>
					<div className="iconsContainer">
						<div className="optionContaine">
							<a href="mailto:orrwebdev@gmail.com">
								<EnvelopeSVG />
								<p className="contactText">Email</p>
							</a>
						</div>
						<div className="optionContaine">
							<a href="https://github.com/oregev/oregev" target="_blank" rel="noopener noreferrer">
								<GithubSVG />
								<p className="contactText">Github</p>
							</a>
						</div>
						<div className="optionContaine">
							<a href="https://codepen.io/orwebdev" target="_blank" rel="noopener noreferrer">
								<CodepenSVG />
								<p className="contactText">Codepen</p>
							</a>
						</div>
						<div className="optionContaine">
							<a href="https://www.linkedin.com/in/orwebdev/" target="_blank" rel="noopener noreferrer">
								<LinkedinSVG />
								<p className="contactText">Linkedin</p>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer scrMode={props.scrMode} setScrMode={props.setScrMode} />
		</>
	);
};
