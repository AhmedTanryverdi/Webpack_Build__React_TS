import React from "react";
import client from "./assets/images/img.png";
import client1 from "./assets/images/img1.png";
import client2 from "./assets/images/img2.png";
import "./clients.scss";

const clients = [client, client1, client2];
const aboutClinets = [
	{
		"Nick Wade, New York": `Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut mperdiet et leo in vulputate. `,
	},
	{
		"Natasha Reyes, California": `Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut mperdiet et leo in vulputate.`,
	},
	{
		"Carolyn Banks, Miami":
			"Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut mperdiet et leo in vulputate. ",
	},
];

export const Clients: React.FC = (): React.JSX.Element => {
	return (
		<div className="clients">
			<h2 className="clients__title">
				<p className="title">Our Grateful Customers</p>
				<p className="subtitle">
					Duis vestibulum elit vel neque pharetra
				</p>
			</h2>
			<div className="clients__cards">
				{clients.map((item, index) => {
					return (
						<div key={index} className="card">
							<img src={item} alt="image" />
							<p className="about">
								{Object.values(aboutClinets[index])[0]}
							</p>
							<p className="name">
								{Object.keys(aboutClinets[index])[0]}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
