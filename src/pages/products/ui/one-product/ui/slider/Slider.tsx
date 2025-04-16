import React, { useState } from "react";
import "./slider.scss";

export const Slider: React.FC<{ images: string[] | undefined }> = ({
	images,
}): React.JSX.Element => {
	if (!images) {
		return <h1>...</h1>;
	}
	const [index, setIndex] = useState(0);

	const selectImage = (e: React.MouseEvent) => {
		if (e.target instanceof HTMLImageElement) {
			const idx = parseInt(e.target.getAttribute("data-index")!);

			if (idx) {
				const url = images[0];
				images[0] = images[idx];
				images[idx] = url;
				setIndex(idx);
				index;
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
