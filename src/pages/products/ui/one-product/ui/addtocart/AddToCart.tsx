import React, { useState } from "react";
import "./addtocart.scss";
import { Button } from "@/shared/components/button/Button";

export const AddToCart: React.FC = (): React.JSX.Element => {
	const [amount, setAmount] = useState<number>(1);
	return (
		<div className="one-product__add-to-cart">
			<div className="counter">
				<button
					type="button"
					className="btn"
					onClick={() => {
						if (amount > 1) {
							setAmount(amount - 1);
						}
					}}
				>
					-
				</button>
				<span className="amount">{amount}</span>
				<button
					type="button"
					className="btn"
					onClick={() => setAmount(amount + 1)}
				>
					+
				</button>
			</div>
			<Button text="Add To Cart" name="one-product__add-to-cart_btn" />
		</div>
	);
};
