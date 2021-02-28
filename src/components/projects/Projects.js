import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { projectsInfo } from "./projectsInfo";
import "./projects.css";

const reqImgaes = require.context("./images", true, /\.jpg$/);
const paths = reqImgaes.keys();
const images = paths.map((path) => reqImgaes(path));

export const Projects = (props) => {
	const createThumbnails = () =>
		projectsInfo.map((project, i) => {
			const imgUrl = images.filter((img) => img.default.includes(project.link))[0].default;
			return (
				<section className="projects--projectContainer centerIt" key={project.id}>
					<div className="projects--projectImgContainer">
						<img src={imgUrl} alt={project.name}></img>
					</div>
					<article className="projects--projectInfo">
						<Link to={`/projects/${project.link}`} className="project--link project--title">
							{project.name}
						</Link>
						<p>{project.description}</p>
					</article>
				</section>
			);
		});
	return (
		<>
			<Header />
			<div className="projects--pageContainer centerIt">
				<main className="projects--centeringContainer">{createThumbnails()}</main>
			</div>
			<Footer scrMode={props.scrMode} setScrMode={props.setScrMode} />
		</>
	);
};
