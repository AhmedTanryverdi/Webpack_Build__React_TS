import React from "react";
import { Promo } from "./ui/promo/Promo";
import { SubPromo } from "./ui/subpromo/SubPromo";
import { Arrival } from "./ui/arrival/Arrival";
import { Team } from "./ui/team/Team";
import { Baner } from "@/shared/components/baner/Baner";

export const AboutUs: React.FC = (): React.JSX.Element => {
	return (
		<div className="about-us">
			<div className="container">
        <Promo />
        <SubPromo />
        <Arrival />
        <Team />
        <Baner />
      </div>
		</div>
	);
};
