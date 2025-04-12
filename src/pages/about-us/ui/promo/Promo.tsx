import React from "react";
import promoBgImg from "./assets/images/img.png";
import "./promo.scss";

export const Promo: React.FC = (): React.JSX.Element => {
	return (
		<div className="promo">
			<img src={promoBgImg} alt="promo bg image" className="promo__bg" />
			<div className="promo__title">
				<h2 className="title">About</h2>
				<div className="subtitle">
					<p>Duis vestibulum elit vel neque pharetra vulputate. </p>
					<p>Duis rutrum non risus in imperdiet. </p>
				</div>
			</div>
		</div>
	);
};
