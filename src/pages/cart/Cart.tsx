import "./cart.scss";
import React from "react";
import { useSelector } from "react-redux";
import { CartProductType, RootState } from "@/shared/utils/types";
import { Tr } from "./ui/tr/Tr";

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
										img={item?.product?.images[0]}
										name={item?.product?.title}
										price={item?.product?.price}
										quantity={item.quantity}
										total={
											item.quantity *
											parseFloat(item.product.price)
										}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
