import "./cart.scss";
import React from "react";
import { useSelector } from "react-redux";
import { CartProductType, RootState } from "@/shared/utils/types";
import { Table } from "./ui/table/Table";

export const Cart: React.FC = (): React.JSX.Element => {
	const products = useSelector<RootState, CartProductType[]>(
		(state) => state.cart.products
	);
	if (!products.length) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className="cart">
			<div className="cart__promo">
				<img
					src={require("./assets/image/img.png").default}
					alt="image"
					className="cart__image"
				/>
				<img
					src={require("./assets/image/overlay.png").default}
					alt="image"
					className="cart__image"
				/>
				<h2 className="title">My Cart</h2>
			</div>

			<div className="container">
				<div className="cart__content">
					<Table products={products}/>
				</div>
			</div>
		</div>
	);
};
