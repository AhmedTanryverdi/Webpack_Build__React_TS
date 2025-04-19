import "./logo.scss";
import React from "react";
import bgLogo from "@/widgets/header/assets/icons/bg.png";
import shoe from "@/widgets/header/assets/icons/shoe.png";

export const Logo: React.FC = (): React.JSX.Element => {
	return (
		<div className="header__logo">
			<img src={bgLogo} alt="logo image" className="header__logo_bg" />
			<img src={shoe} alt="logo image" className="header__logo_shoe" />

			<h1 className="header__logo_title">BEST SHOP</h1>
		</div>
	);
};
