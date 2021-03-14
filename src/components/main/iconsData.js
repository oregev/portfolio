const reqSvgs = require.context("./svg", true, /\.svg$/);
const paths = reqSvgs.keys();
const icons = paths.map((path) => reqSvgs(path));

const SCR_WIDTH = window.innerWidth;
const START_X = 0;
const START_Y = 50;

const iconsData = icons.map((iconPath, index) => {
	return {
		x: START_X,
		y: START_Y,
		url: iconPath,
		//url: iconPath.default,
	};
});

export const length = iconsData.length;

(function updateXLocations() {
	const step = SCR_WIDTH / length;
	const addToStep = SCR_WIDTH / length ** 2;
	iconsData.forEach((icon, index) => {
		icon.x = (step + addToStep) * index;
	});
})();

export const iconElements = iconsData.map((icon) => {
	const img = new Image();
	img.src = icon.url;
	return { image: img, x: icon.x, y: icon.y };
});
