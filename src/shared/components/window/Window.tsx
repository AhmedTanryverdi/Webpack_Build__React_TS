import React from "react";
import "./window.scss";

export const Window: React.FC<{
	img: string;
	title: string;
	subtitle: string;
}> = ({ img, title, subtitle }): React.JSX.Element => {
	return (
		<div className="window">
			<img src={img} alt="img" className="window__img" />
			<div className="window__title">
				<h4 className="title">{title}</h4>
				<p className="subtitle">{subtitle}</p>
			</div>
		</div>
	);
};
