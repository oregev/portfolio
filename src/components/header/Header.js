import React from "react";
import { Link } from "react-router-dom";
import { HouseSVG } from "./svg/HouseSVG";
import { InfoSVG } from "./svg/InfoSVG";
import { TerminalSVG } from "./svg/TerminalSVG";
import { PersonSVG } from "./svg/PersonSVG";
import "./header.css";

export const Header = () => {
	return (
		<div className="headerContainer">
			<span className="span">{window.location.pathname.split("/").slice(-1)}</span>
			<nav>
				<Link to="/" className="navLinkContainer centerIt">
					<HouseSVG />
					<p>HOME</p>
				</Link>
				<Link to="/resume" className="navLinkContainer centerIt">
					<InfoSVG />
					<p>INFO</p>
				</Link>
				<Link to="/projects" className="navLinkContainer centerIt">
					<TerminalSVG />
					<p>PROJECTS</p>
				</Link>
				<Link to="/contact" className="navLinkContainer centerIt">
					<PersonSVG />
					<p>CONTACT</p>
				</Link>
			</nav>
		</div>
	);
};
