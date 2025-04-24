import { CartProductType } from "@/shared/utils/types";
import React from "react";
import { Tr } from "./ui/tr/Tr";
import "./table.scss";

export const Table: React.FC<{ products: CartProductType[] }> = ({
	products,
}): React.JSX.Element => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>IMAGE</th>
					<th>PRODUCT NAME</th>
					<th>PRICE</th>
					<th>QUANTITY</th>
					<th>TOTAL</th>
					<th>DELETE</th>
				</tr>
			</thead>
			<tbody>
				{products.map((item) => {
					return (
						<Tr
							key={item.product.id}
							id={item.product.id}
							img={item?.product?.images[0]}
							name={item?.product?.title}
							price={item?.product?.price}
							quantity={item.quantity}
							total={
								item.quantity * parseFloat(item.product.price)
							}
						/>
					);
				})}
			</tbody>
		</table>
	);
};
