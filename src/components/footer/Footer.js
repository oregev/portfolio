import React from "react";
import { SunSVG } from "./svg/SunSVG";
import { MoonSVG } from "./svg/MoonSvg";
import "./switch.css";
import "./footer.css";

export const Footer = ({ scrMode, setScrMode }) => {
	const setIcon = () => {
		return scrMode === "lightMode" ? <SunSVG setScrMode={setScrMode} /> : <MoonSVG setScrMode={setScrMode} />;
	};

	return (
		<div className="footerContainer">
			<div>{setIcon()}</div>
			<p>Build by Or Regev</p>
		</div>
	);
};
