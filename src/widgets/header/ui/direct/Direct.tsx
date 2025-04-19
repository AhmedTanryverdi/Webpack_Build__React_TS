import "./direct.scss";
import { images } from "./utils/constants/constants";
import React from "react";


export const Direct: React.FC = (): React.JSX.Element => {
	return (
		<div className="direct">
			{images.map((image, index) => {
				return (
					<img
						key={index}
						src={require(`@/widgets/header/assets/icons/${image.title}.png`).default}
						alt="icon"
						className="header__icons_item"
					/>
				);
			})}
		</div>
	);
};
