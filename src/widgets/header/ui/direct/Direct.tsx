import "./direct.scss";
import React from "react";
import search from "@/widgets/header/assets/icons/search.png";
import user from "@/widgets/header/assets/icons/user.png";
import shoppingCart from "@/widgets/header/assets/icons/shopping-cart.png";

const iconsBlock = [search, user, shoppingCart];

export const Direct: React.FC = (): React.JSX.Element => {
	return (
		<div className="direct">
			{iconsBlock.map((item, index) => {
				return (
					<img
						key={index}
						src={item}
						alt="icon"
						className="header__icons_item"
					/>
				);
			})}
		</div>
	);
};
