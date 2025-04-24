import "./cart.scss";
import React from "react";
import { useSelector } from "react-redux";
import { CartProductType, RootState } from "@/shared/utils/types";
import { Table } from "./ui/table/Table";
import { Button } from "@/shared/components/button/Button";

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
					<Table products={products} />
					<div className="result">
						<div className="result__btns">
							<Button
								text="CONTINUE SHOPPING"
								name="result__btns_btn"
							/>
							<Button
								text="CLEAR SHOPPING CART"
								name="result__btns_btn"
							/>
						</div>
						<div className="result__counter">
							<ul className="result__counter_items">
								<li className="item">
									<span className="item-name">Sub Total</span>
									<span className="item-price">$106.97</span>
									<hr />
								</li>
								<li className="item">
									<span className="item-name">Shipping</span>
									<span className="item-price">30</span>
									<hr />
								</li>
								<li className="item">
									<span className="item-name">Total</span>
									<span className="item-price">$136.97</span>
									<hr />
								</li>
							</ul>

							<Button text="CHECHOUT" name="result__counter_btn" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
