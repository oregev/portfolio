import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { resumeData } from "./resumeData";
import "./resume.css";

export const Resume = (props) => {
	const createResume = () => {
		return resumeData.map((obj) => {
			return (
				<article key={obj.id}>
					<span>{obj.dates} </span>
					<h4>{obj.title}</h4>
					<span> {obj.company}</span>
					<span> {obj.location}</span>
					<br />
					<p>{obj.subtitle}</p>
					<br />
					<ul>
						{obj.details.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<hr />
				</article>
			);
		});
	};

	return (
		<>
			<Header />
			<div className="resumeContainer centerIt">
				<div className="detailsContainer">{createResume()}</div>
			</div>
			<Footer scrMode={props.scrMode} setScrMode={props.setScrMode} />
		</>
	);
};
