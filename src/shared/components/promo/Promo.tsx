import React from "react";
import promoBgImg from "./assets/images/img.png";
import "./promo.scss";

export const Promo: React.FC<{ title: string; subtitle: string }> = ({
	title,
	subtitle,
}): React.JSX.Element => {
	return (
		<div className="promo">
			<img src={promoBgImg} alt="promo bg image" className="promo__bg" />
			<div className="promo__title">
				<h2 className="title">{title}</h2>
				<div className="subtitle">
					<p>{subtitle}</p>
				</div>
			</div>
		</div>
	);
};
