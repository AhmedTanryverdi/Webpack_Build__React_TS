import React, { useEffect, useState } from "react";
import { ProductType } from "@/shared/assets/types";
import { ProductCard } from "@/shared/components/product-card/ProductCard";
import "./products.scss";

export const Products: React.FC = (): React.JSX.Element => {
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => {
		fetch(
			"https://api.escuelajs.co/api/v1/products/?categorySlug=shoes&offset=0&limit=4"
		)
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<div className="products">
			<h2 className="products__title">
				<p className="title">New Products Arrival</p>
				<p className="subtitle">
					Duis vestibulum elit vel neque pharetra
				</p>
			</h2>

			<div className="products__block">
				{products.map((item, index) => {
					return (
						<ProductCard
							key={index}
							id={item.id}
							title={item.title}
							price={item.price}
							img={item.images[0]}
						/>
					);
				})}
			</div>
		</div>
	);
};
