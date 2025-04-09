import React from "react";
import { Link } from "react-router-dom";
import {navigateMenu} from "../../assets/constants/constants";
import './navigate.scss';


export const Navigate: React.FC = (): React.JSX.Element => {
	return (
		<div className="navigate">
			{navigateMenu.map((item: string, index: number) => {
				if(index >=1 && index <= 2){
					return <button type="button">{item}</button>;
				}
				return (
					<Link key={index} to={index === 3 ? "/about" : index === 4 ? "/contacts": '/'}>
						{item}
					</Link>
				);
			})}
		</div>
	);
};
