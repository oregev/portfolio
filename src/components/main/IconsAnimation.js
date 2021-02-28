import React, { useRef, useEffect } from "react";
import { iconElements, length } from "./iconsData";

export const IconsAnimation = () => {
	const SCR_WIDTH = window.innerWidth;
	const ICON_SIZE = SCR_WIDTH > 500 ? 50 : 40;
	const INITIAL_POS = -(SCR_WIDTH / length);
	const X_SPEED = 1;

	const canvasRef = useRef(null);
	const ctxRef = useRef(null);
	let frameName = null;

	const animation = () => {
		ctxRef.current.clearRect(0, 0, SCR_WIDTH, 200);

		const updateImgX = (imgItem) => {
			return imgItem.x > SCR_WIDTH ? INITIAL_POS : imgItem.x + X_SPEED;
		};

		iconElements.forEach((imgItem) => {
			ctxRef.current.drawImage(imgItem.image, imgItem.x, 25, ICON_SIZE, ICON_SIZE);
			imgItem.x = updateImgX(imgItem);
		});

		frameName = requestAnimationFrame(animation);
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		ctxRef.current = ctx;
		canvas.width = window.innerWidth;
		requestAnimationFrame(animation);

		return () => cancelAnimationFrame(frameName);
	});

	return (
		<div className="canvasContainer">
			<canvas ref={canvasRef} height="100" />
		</div>
	);
};
