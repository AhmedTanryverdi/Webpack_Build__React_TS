import React from "react";
import { Promo } from "./ui/promo/Promo";
import { SubPromo } from "./ui/subpromo/SubPromo";

export const AboutUs: React.FC = (): React.JSX.Element => {
	return (
		<div className="about-us">
			<div className="container">
        <Promo />
        <SubPromo />
      </div>
		</div>
	);
};
