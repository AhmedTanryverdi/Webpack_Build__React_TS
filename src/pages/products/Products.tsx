import "./products.scss";
import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CiSearch } from "react-icons/ci";
import { GrFormClose } from "react-icons/gr";
import { useSelector } from "react-redux";
//import { getProducts } from "@/entities/model/slices/products/products";
import { ProductType, RootState, useAppDispatch } from "@/shared/utils/types";
import { ProductCard } from "@/shared/components/product-card/ProductCard";
import { Pagination } from "./ui/pagination/Pagination";
import { SearchInput } from "@/shared/components/searchInput/SearchInput";
import debounce from "lodash.debounce";
import {
	clear,
	setInputText,
} from "@/entities/model/slices/search-input/searchInput";

const quantityProducts = 9;

export const Products: React.FC = (): React.JSX.Element => {
	const [searchValue, setSearchValue] = useState("");

	const dispatch = useAppDispatch();

	const [sideBar, setSideBar] = useState<{ image: string; name: string }[]>(
		[]
	);
	const currentPage = useSelector<RootState, number>(
		(state) => state.pagination.currentPage
	);

	const inputText = useSelector<RootState, string>(
		(state) => state.searchInput.inputText
	);

	const { isLoading, error, data } = useQuery({
		queryKey: ["products", currentPage],
		queryFn: () =>
			fetch(
				`https://api.escuelajs.co/api/v1/products/?title=${inputText}&offset=${
					currentPage * quantityProducts
				}&limit=9`
			).then(response=>response.json()).then(data=>data),
	});

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/categories")
			.then((response) => response.json())
			.then((data) => setSideBar(data));
	}, []);

	const updateInputText = useCallback(
		debounce((str: string) => {
			dispatch(setInputText(str));
		}, 600),
		[]
	);

	const onChange = (e: any) => {
		setSearchValue(e?.currentTarget.value);
		updateInputText(searchValue);
		console.log(searchValue);
	};

	if (isLoading) {
		return <h1>loading...</h1>;
	}else if(error){
		return <h1>Error!</h1>
	}

	return (
		<div className="products">
			<SearchInput
				elementName="products__input"
				value={searchValue}
				onChange={(e) => onChange(e)}
				Component={() =>
					searchValue ? (
						<GrFormClose
							size={17}
							onClick={() => {
								setSearchValue("");
								dispatch(clear());
							}}
						/>
					) : (
						<CiSearch size={17} />
					)
				}
			/>
			<div className="products__content">
				<div className="products__content_items">
					{data.map((item: ProductType) => {
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
