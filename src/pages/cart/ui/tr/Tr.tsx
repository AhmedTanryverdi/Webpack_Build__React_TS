
import React from "react";

export const Tr: React.FC<{
	img: string;
	name: string;
	price: string;
	quantity: string;
	total: string;
}> = ({ img, name, price, quantity, total }): React.JSX.Element => {

	return (
		<tr>
			<th>
				<img src={require(img).default} alt="image" />
			</th>
			<th>{name}</th>
			<th>{price}</th>
			<th>{quantity}</th>
			<th>{total}</th>
			<th>
				<img src="" alt="" />
			</th>
		</tr>
	);
};
