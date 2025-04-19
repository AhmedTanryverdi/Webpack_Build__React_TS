import React from "react";
import { Promo } from "../../shared/components/promo/Promo";
import { SubPromo } from "../../shared/components/subpromo/SubPromo";
import { Arrival } from "./ui/arrival/Arrival";
import { Team } from "./ui/team/Team";
import { Baner } from "@/shared/components/baner/Baner";
import { SubTitleType } from "@/shared/utils/types";

const titlesData: SubTitleType[] = [
	{
		title: "Superior Accuracy",
		text: [
			"Qewist vestibulum elit vel ",
			"neque pharetra vulputate ",
			"scelerisque nisi urna.",
		],
	},
	{
		title: "Awards",
		text: [
			"Vestibulum elit vel neque ",
			"pharetra vulputate. Quisque ",
			"scelerisque nisi urna.",
		],
	},
	{
		title: "Ecological",
		text: [
			"Elit vel neque duis vestibulum  ",
			"pharetra vulputateuisque ",
			"scelerisque nisi urna.",
		],
	},
	{
		title: "Shipping Worlwide",
		text: [
			"Quisque scelerisque nisi urna. ",
			"Duis vestibulum elit vel neque ",
			"pharetra vulputate. ",
		],
	},
];

export const AboutUs: React.FC = (): React.JSX.Element => {
	return (
		<div className="about-us">
			<div className="container">
				<Promo
					title="About Us"
					subtitle="Duis vestibulum elit vel neque pharetra vulputate. Duis
						rutrum non risus in imperdiet."
					image="img"
				/>
				<SubPromo titlesData={titlesData} />;
				<Arrival />
				<Team />
				<Baner />
			</div>
		</div>
	);
};
