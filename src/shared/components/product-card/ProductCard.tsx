import React from "react";
import { useNavigate } from "react-router-dom";
import "./productcard.scss";

export const ProductCard: React.FC<{
	title: string;
	price: string;
	img: string;
	id: number;
}> = ({ title, price, img, id }): React.JSX.Element => {
	const navigate = useNavigate();

	return (
		<div className="product-card">
			<img src={img} alt="photo" className="product-card__img" />
			<h3 className="product-card__title">
				<p className="title">{title}</p>
				<p className="price">${price}</p>
			</h3>

			<button
				className="product-card__btn"
				onClick={() => navigate(`/products/${id}`)}
			>
				View Product
			</button>
		</div>
	);
};
