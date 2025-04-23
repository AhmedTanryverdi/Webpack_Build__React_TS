import "./addtocart.scss";
import React, { useState } from "react";
import { Button } from "@/shared/components/button/Button";
import { ProductType, useAppDispatch } from "@/shared/utils/types";
import { addProduct } from "@/entities/model/slices/cart/cart";

export const AddToCart: React.FC<{ product: ProductType }> = ({
	product,
}): React.JSX.Element => {
	const [quantity, setQuantity] = useState<number>(1);
	const dispatch = useAppDispatch();

	return (
		<div className="one-product__add-to-cart">
			<div className="counter">
				<button
					type="button"
					className="btn"
					onClick={() => {
						if (quantity > 1) {
							setQuantity(quantity - 1);
						}
					}}
				>
					-
				</button>
				<span className="amount">{quantity}</span>
				<button
					type="button"
					className="btn"
					onClick={() => setQuantity(quantity + 1)}
				>
					+
				</button>
			</div>
			<Button
				text="Add To Cart"
				name="one-product__add-to-cart_btn"
				handleClick={() => {
					dispatch(addProduct({ product, quantity }));
				}}
			/>
		</div>
	);
};
