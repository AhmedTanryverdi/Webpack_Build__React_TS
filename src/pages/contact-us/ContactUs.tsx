import React from "react";
import { Promo } from "@/shared/components/promo/Promo";
import { SubPromo } from "@/shared/components/subpromo/SubPromo";
import { FeedBack } from "./feedback/FeedBack";

const titlesData = [
	{
		title: "Our Location",
		text: ["1234 NW Bobcat Lane, St.", "Robert, MO 65584-5678"],
	},
	{
		title: "Operating Time",
		text: ["Monday - Friday: 9am - 6 pm", "Weekends: 10:30 am - 6pm"],
	},
	{
		title: "Our Email",
		text: ["best@shop.com", "info@bestshop.com"],
	},
	{
		title: "Call Us",
		text: ["(268)142-8413", "(760)265-2917"],
	},
];

export const ContactUs: React.FC = (): React.JSX.Element => {
	return (
		<div className="contact-us">
			<div className="container">
				<Promo
					title="Contact Us"
					subtitle="Duis vestibulum elit vel neque pharetra vulputate. Duis rutrum non risus in imperdiet."
					image="img2"
				/>
				<SubPromo titlesData={titlesData} />
				<FeedBack />
			</div>
		</div>
	);
};
