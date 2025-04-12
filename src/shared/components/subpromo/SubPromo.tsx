import React from "react";
import icon from "./assets/icons/icon.png";
import icon1 from "./assets/icons/icon.png";
import icon2 from "./assets/icons/icon.png";
import icon3 from "./assets/icons/icon.png";
import { SubTitleType } from "@/shared/assets/types";
import "./subpromo.scss";

const icons = [icon, icon1, icon2, icon3];

export const SubPromo: React.FC<{ titlesData: SubTitleType[] }> = ({
	titlesData,
}): React.JSX.Element => {
	return (
		<div className="sub-promo">
			{icons.map((item, index) => {
				return (
					<div key={index} className="sub-promo__card">
						<img src={item} alt="icon" />
						<div className="sub-promo__card_title">
							<h3 className="title">
								{Object.keys(titlesData[index])[0]}
							</h3>
							<div className="subtitle">
								{Object.values(titlesData[index]).map(
									(str, indx) => {
										return <p key={indx}>{str}</p>;
									}
								)}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
