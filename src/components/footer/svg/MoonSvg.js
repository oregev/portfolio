import React from "react";

export const MoonSVG = ({ setScrMode }) => {
	return (
		<svg
			onClick={() => setScrMode("lightMode")}
			width="2em"
			height="2em"
			viewBox="0 0 16 16"
			className="bi bi-moon"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
			/>
		</svg>
	);
};
