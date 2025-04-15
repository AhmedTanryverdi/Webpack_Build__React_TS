import React from "react";
import { Link } from "react-router-dom";
import { navigateMenu } from "../../assets/constants/constants";
import "./navigate.scss";

export const Navigate: React.FC = (): React.JSX.Element => {
	return (
		<div className="navigate">
			{navigateMenu.map((item, index) => {
				return (
					<Link key={index} to={item.link}>
						{item.title}
					</Link>
				);
			})}
		</div>
	);
};
