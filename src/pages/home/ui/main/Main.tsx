import React from "react";
import photo from "../../assets/images/photo.png";
import { Button } from "@/shared/components/button/Button";
import "./main.scss";

export const Main: React.FC = (): React.JSX.Element => {
	return (
		<section className="main">
			<div className="main__title">
				<h2 className="title">
					Fantastic Features That Makes You Look Cool
				</h2>
				<p className="text">
					Phasellus risus turpis, pretium sit amet magna non, molestie
				</p>
				<p className="text">
					ultricies enim. Nullam pulvinar felis at metus.
				</p>
				<Button text="View All Items" name="home__main_button" />

				<div className="main__bg">
					<img
						src={photo}
						alt="bg image"
						className="main__bg_image"
					/>
				</div>
			</div>
		</section>
	);
};
