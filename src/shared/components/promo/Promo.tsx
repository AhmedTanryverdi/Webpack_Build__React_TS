import React from "react";
import "./promo.scss";

export const Promo: React.FC<{
	title: string;
	subtitle: string;
	image: string;
}> = ({
	title,
	subtitle,
	image,
}): React.JSX.Element => {

	return (
		<div className="promo">
			<img
				src={require(`./assets/images/${image}.png`).default}
				alt="promo bg image"
				className="promo__bg"
			/>
			<div className="promo__title">
				<h2 className="title">{title}</h2>
				<div className="subtitle">
					<p>{subtitle}</p>
				</div>
			</div>
		</div>
	);
};
