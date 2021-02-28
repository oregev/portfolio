import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Main } from "./components/main/Main";
import { Resume } from "./components/resume/Resume";
import { Projects } from "./components/projects/Projects";
import Smarthome from "./components/projects/smarthome/Smarthome";
import Sudoku from "./components/projects/sudoku/Sudoku";
import Weather from "./components/projects/weather/Weather";
import Chase from "./components/projects/chase/Chase";
import { Contacts } from "./components/contacts/Contacts";

import "./App.css";

const App = () => {
	const [scrMode, setScrMode] = useState("darkMode");
	return (
		<div className={`App ${scrMode}`}>
			<Router basename="/portfolio">
				<Switch>
					<Route exact path="/">
						<Main scrMode={scrMode} setScrMode={setScrMode} />
					</Route>
					<Route exact path="/resume">
						<Resume scrMode={scrMode} setScrMode={setScrMode} />
					</Route>
					<Route exact path="/projects">
						<Projects scrMode={scrMode} setScrMode={setScrMode} />
					</Route>
					<Route exact path="/projects/smarthome">
						<Smarthome />
					</Route>
					<Route exact path="/projects/sudoku">
						<Sudoku />
					</Route>
					<Route exact path="/projects/chase">
						<Chase />
					</Route>
					<Route exact path="/projects/weather">
						<Weather />
					</Route>
					<Route exact path="/contact">
						<Contacts scrMode={scrMode} setScrMode={setScrMode} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};
export default App;
