import "./products.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { getProducts } from "@/entities/model/slices/products/products";
import { Search } from "@/pages/products/ui/search/Search";
import { ProductType, RootState, useAppDispatch } from "@/shared/utils/types";
import { ProductCard } from "@/shared/components/product-card/ProductCard";
import { Pagination } from "./ui/pagination/Pagination";

const quantityProducts = 9;

export const Products: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const products = useSelector<RootState, ProductType[]>(
		(state) => state.products.products
	);

	const [sideBar, setSideBar] = useState<{ image: string; name: string }[]>(
		[]
	);
	const currentPage = useSelector<RootState, number>(
		(state) => state.pagination.currentPage
	);

	const inputText = useSelector<RootState, string>(
		(state) => state.searchInput.inputText
	);

	useEffect(() => {
		dispatch(
			getProducts(
				`https://api.escuelajs.co/api/v1/products/?title=${inputText}&offset=${
					currentPage * quantityProducts
				}&limit=9`
			)
		);
	}, [currentPage, inputText]);

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
			<Search inputText={inputText} />
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
			<Pagination quantityPages={4} currentPage={currentPage} />
		</div>
	);
};
