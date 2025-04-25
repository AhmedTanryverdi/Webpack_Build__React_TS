import React from "react";
import emptyCartIcon from "../../assets/image/cart-empty.png";
import "./emptycart.scss";

export const EmptyCart: React.FC = (): React.JSX.Element => {
	return (
		<div className="empty-cart">
			<div className="content">
                <img src={emptyCartIcon} alt="cart image" />
                <h2 className="empty-cart__title">Корзина пуста :{"("}</h2>
            </div>
		</div>
	);
};
