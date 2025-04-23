import "./tr.scss";
import React from "react";
import deleteIcon from "../../assets/icons/icon.png";

export const Tr: React.FC<{
	img: string;
	name: string;
	price: string;
	quantity: number;
	total: number;
}> = ({ img, name, price, quantity, total }): React.JSX.Element => {
	return (
		<tr className="row">
			<th>
				<img src={img} alt="image" />
			</th>
			<th>{name}</th>
			<th>${price}</th>
			<th>{quantity}</th>
			<th>{total}</th>
			<th>
				<img src={deleteIcon} alt="icon" />
			</th>
		</tr>
	);
};
