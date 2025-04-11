import React from "react";
import banerPng from "../../assets/images/baner.png";
import "./baner.scss";
import { Button } from "@/shared/components/button/Button";

export const Baner: React.FC = (): React.JSX.Element => {
	return (
		<section className="baner">
			<img src={banerPng} alt="baner image" className="img" />
			<div className="baner__left">
				<h2 className="baner__left_title">
					<p className="title">90%</p>
					<p className="subtitle">
						Curabitur vulputate arcu odio, ac facilisis diam.
					</p>
				</h2>
			</div>
			<div className="baner__right">
				<h2 className="baner__right_title">
					<p className="title">Offer Of The Month</p>
					<p className="subtitle">
						accumsan ut. Ut imperdiet et leo in vulputate.
					</p>
				</h2>
				<Button text="Get Offer Today" name="baner_btn" />
			</div>
		</section>
	);
};
