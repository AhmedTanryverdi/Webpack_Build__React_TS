import React, { useEffect, useState } from "react";
import { Search } from "@/widgets/search/Search";
import { ProductType } from "@/shared/utils/types";
import { ProductCard } from "@/shared/components/product-card/ProductCard";
import { Pagination } from "./ui/pagination/Pagination";
import "./products.scss";

const amountProducts = 9;

export const Products: React.FC = (): React.JSX.Element => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [sideBar, setSideBar] = useState<{ image: string; name: string }[]>(
		[]
	);
	const [currentPage, setCurrentPage] = useState<number>(0);

	useEffect(() => {
		fetch(
			`https://api.escuelajs.co/api/v1/products?offset=${
				currentPage * amountProducts
			}&limit=9`
		)
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, [currentPage]);

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/categories")
			.then((response) => response.json())
			.then((data) => setSideBar(data));
	}, []);

	if (!products.length) {
		return <h1>loading...</h1>;
	}

	return (
		<div className="products">
			<Search />
			<div className="products__content">
				<div className="products__content_items">
					{products.map((item) => {
						return (
							<ProductCard
								key={item.id}
								id={item.id}
								title={item.title}
								price={item.price}
								img={item.images[0]}
							/>
						);
					})}
				</div>
				<div className="products__content_side-bar">
					<h2 className="title">Top Best Models</h2>
					{sideBar.map((item: any, index: number) => {
						return (
							<div key={index} className="side-bar__item">
								<img
									key={index}
									src={item?.image}
									alt="image"
									className="side-bar__item_img"
								/>
								<p>{item.name}</p>
							</div>
						);
					})}
				</div>
			</div>
			<Pagination
				amountPages={4}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
};
