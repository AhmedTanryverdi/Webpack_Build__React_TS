import "./social.scss";
import React from "react";
import facebook from "@/widgets/header/assets/icons/facebook.png";
import instagram from "@/widgets/header/assets/icons/instagram.png";
import twitter from "@/widgets/header/assets/icons/twitter.png";

const socials = [facebook, instagram, twitter];

export const Social: React.FC = (): React.JSX.Element => {
	return (
		<div className="social">
			{socials.map((item, index) => {
				return (
					<img
						key={index}
						src={item}
						alt="facebook image"
						className="header__social_icon"
					/>
				);
			})}
		</div>
	);
};
