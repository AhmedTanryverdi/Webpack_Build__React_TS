import React, { useReducer } from "react";
import "./slider.scss";

export const Slider: React.FC<{ images: string[] | undefined }> = ({
	images,
}): React.JSX.Element => {
	if (!images) {
		return <h1>...</h1>;
	}
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	const selectImage = (e: React.MouseEvent) => {
		if (e.target instanceof HTMLImageElement) {
			const index = parseInt(e.target.getAttribute("data-index")!);

			if (index) {
				const url = images[0];
				images[0] = images[index];
				images[index] = url;
				forceUpdate();
			}
		}
	};

	return (
		<div className="slider">
			<div className="slider__main-image">
				<img src={images[0]} alt="image" className="img" />
			</div>
			<ul className="slider__image-list" onClick={(e) => selectImage(e)}>
				<li className="image-item">
					<img src={images[1]} alt="image" data-index="1" />
				</li>
				<li className="image-item">
					<img src={images[2]} alt="image" data-index="2" />
				</li>
				<li className="image-item">
					<img src={images[3]} alt="image" data-index="3" />
				</li>
				<li className="image-item">
					<img src={images[4]} alt="image" data-index="4" />
				</li>
			</ul>
		</div>
	);
};
