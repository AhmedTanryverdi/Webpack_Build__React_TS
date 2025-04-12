import React from "react";
import img from "./assets/images/img.png";
import img1 from "./assets/images/img1.png";
import img2 from "./assets/images/img2.png";
import facebook from "@/shared/assets/icons/facebook.png";
import instagram from "@/shared/assets/icons/instagram.png";
import twitter from "@/shared/assets/icons/twitter.png";
import "./team.scss";

const images = [img, img1, img2];
const workers = [
	{
		name: "MARLON MCDONALD",
		post: "Product Manager",
	},
	{
		name: "REBECCA GRAND",
		post: "Graphic Designer",
	},
	{
		name: "JOHN BAILEY",
		post: "Head Of Marketing",
	},
];

export const Team: React.FC = (): React.JSX.Element => {
	return (
		<div className="team">
			<h2 className="team__title">Our Incredible Team</h2>
			<div className="team__workers">
				{images.map((image, index) => {
					return (
						<div key={index} className="team__workers_card">
							<img
								src={image}
								alt="image"
								className="team__workers_img"
							/>
							<div className="name">{workers[index].name}</div>
							<div className="post">{workers[index].post}</div>
							<div className="link">
								<img src={facebook} alt="facebook" />
								<img src={instagram} alt="instagram" />
								<img src={twitter} alt="twitter" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
