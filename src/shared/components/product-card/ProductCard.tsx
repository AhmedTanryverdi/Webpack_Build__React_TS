import React from 'react';
import './productcard.scss';
import { Button } from '../button/Button';

export const ProductCard: React.FC<{ title: string; price: string; img: string }> = ({
	title,
	price,
	img,
}): React.JSX.Element => {
	return (
		<div className="product-card">
			<img src={img} alt="photo" className="product-card__img" />
			<h3 className="product-card__title">
				{title}
				<p className="product-card__price">{price}</p>
			</h3>
			<Button text="View Product" name="product-card__btn" />
		</div>
	);
};
