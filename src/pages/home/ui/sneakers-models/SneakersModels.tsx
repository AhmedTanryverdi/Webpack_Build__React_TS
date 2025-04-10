import React from "react";
import { Window } from "@/shared/components/window/Window";
import { Button } from "@/shared/components/button/Button";
import worker from "./assets/images/photo.png";
import bg from "./assets/images/photo-bg.png";
import sneakers1 from "./assets/images/sneakers1.png";
import sneakers2 from "./assets/images/sneakers2.png";
import sneakers3 from "./assets/images/sneakers3.png";
import sneakers4 from "./assets/images/sneakers4.png";
import "./sneakersmodels.scss";

const imgs = [sneakers1, sneakers2, sneakers3, sneakers4];
const banersData = [
	{
		title: "Duis vestibulum elit vel neque.",
		subtitle:
			"Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",
	},
	{
		title: "Neque vestibulum elit nequvel.",
		subtitle:
			"Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",
	},
	{
		title: "Neque vestibulum elit nequvel.",
		subtitle:
			"Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",
	},
	{
		title: "Neque vestibulum elit nequvel.",
		subtitle:
			"Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",
	},
];

export const SneakersModels: React.FC = (): React.JSX.Element => {
	return (
		<section className="sneakers-models">
			<div className="sneakers-models__discount">
				<div className="sneakers-models__discount_left">
					<Window
						img={worker}
						title="Dorothy Holland"
						subtitle="Chief Marketing Officer"
					/>
					<h2 className="sneakers-models__discount_left-title">
						Aliquam Faucibus Odionecom
					</h2>
					<p className="text">
						Duis vestibulum elit vel neque pharetra vulputate.
						Quisque scelerisque nisi urna. Duis rutrum non risus in
						imperdiet. Proin molestie accumsan nulla sit.
					</p>

					<p className="text">
						Namaki duis vestibulum elit vel neque pharetra
						vulputate. Quisque scelerisque nisi urna.
					</p>
				</div>
				<div className="sneakers-models__discount_right">
					<img
						src={bg}
						alt="bg image"
						className="sneakers-models__discount_right-img"
					/>

					<h2 className="title">25 % Discount</h2>
					<p className="subtitle">
						Curabitur vulputate arcu odio, ac facilisis diam
					</p>
					<p className="subtitle">
						accumsan ut. Ut imperdiet et leo in vulputate.
					</p>

					<Button
						text="Get Discount"
						name="sneakers-models__discount_right-btn"
					/>
				</div>
			</div>
			<div className="sneakers-models__title">
				<h2 className="title">Sneakers Models</h2>
				<p className="subtitle">
					Duis vestibulum elit vel neque pharetra
				</p>
			</div>
			<div className="sneakers-models__baners">
				{banersData.map((obj, index) => {
					return (
						<div key={index} className="baner">
							<img src={imgs[index]} alt="img" className="baner__bg"/>
                            <h3 className="baner__title">{obj.title}</h3>
                            <p className="baner__subtitle">{obj.subtitle}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};
