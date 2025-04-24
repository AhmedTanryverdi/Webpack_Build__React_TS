import "./tr.scss";
import React from "react";
import deleteIcon from "../../assets/icons/icon.png";
import { useAppDispatch } from "@/shared/utils/types";
import { deleteProduct } from "@/entities/model/slices/cart/cart";

export const Tr: React.FC<{
	img: string;
	name: string;
	price: string;
	quantity: number;
	total: number;
	id: number
}> = ({ img, name, price, quantity, total, id }): React.JSX.Element => {
	const dispatch = useAppDispatch();
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
				<img src={deleteIcon} alt="icon" onClick={()=>{
					dispatch(deleteProduct(id))
				}}/>
			</th>
		</tr>
	);
};
