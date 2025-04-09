import React from "react";
import {navigateMenu} from "../../assets/constants/constants";
import './navigate.scss';

export const Navigate: React.FC = (): React.JSX.Element => {
	return (
		<div className="navigate">
			{navigateMenu.map((item: string, index: number) => {
				return (
					<a key={index} href="#">
						{item}
					</a>
				);
			})}
		</div>
	);
};
