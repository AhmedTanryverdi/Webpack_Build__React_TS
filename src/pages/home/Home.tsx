import React from "react";
import { Main } from "./ui/main/Main";
import { SneakersModels } from "./ui/sneakers-models/SneakersModels";
import "./home.scss";
import { ProductCard } from "@/shared/components/product-card/ProductCard";

export const Home: React.FC = (): React.JSX.Element => {
	return (
		<div className="home">
			<div className="container">
				<Main />
				<SneakersModels />

				<div className="products">
					<h2 className="products__title">
						<p className="title">New Products Arrival</p>
						<p className="subtitle">
							Duis vestibulum elit vel neque pharetra
						</p>
					</h2>

					<div className="products__block">
						{Array.from({ length: 4 }).map((item, index) => {
							return (
								<ProductCard
									key={index}
									title="title"
									price="$45"
									img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
