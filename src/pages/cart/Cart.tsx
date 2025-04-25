import "./cart.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
	CartProductType,
	RootState,
	useAppDispatch,
} from "@/shared/utils/types";
import { Table } from "./ui/table/Table";
import { Button } from "@/shared/components/button/Button";
import { clear } from "@/entities/model/slices/cart/cart";
import { useNavigate } from "react-router-dom";
import { EmptyCart } from "./ui/empty-cart/EmptyCart";

export const Cart: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const products = useSelector<RootState, CartProductType[]>(
		(state) => state.cart.products
	);

	const [total, setTotal] = useState(0);

	useEffect(() => {
		const sum = products.reduce(
			(x: number, y: CartProductType) =>
				x + parseFloat(y.product.price) * y.quantity,
			0
		);

		setTotal(sum);
	}, [products]);

	if (!products.length) {
		return <EmptyCart />
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
								handleClick={() => {
									navigate("/products");
								}}
							/>
							<Button
								text="CLEAR SHOPPING CART"
								name="result__btns_btn"
								handleClick={() => {
									dispatch(clear());
								}}
							/>
						</div>
						<div className="result__counter">
							<ul className="result__counter_items">
								<li className="item">
									<span className="item-name">Sub Total</span>
									<span className="item-price">${total}</span>
									<hr />
								</li>
								<li className="item">
									<span className="item-name">Shipping</span>
									<span className="item-price">$30</span>
									<hr />
								</li>
								<li className="item">
									<span className="item-name">Total</span>
									<span className="item-price">${total + 30}</span>
									<hr />
								</li>
							</ul>

							<Button
								text="CHECHOUT"
								name="result__counter_btn"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
