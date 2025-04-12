import React from "react";
import { Main } from "./ui/main/Main";
import { SneakersModels } from "./ui/sneakers-models/SneakersModels";
import { Baner } from "./ui/baner/Baner";
import { Products } from "./ui/products/Products";
import { Clients } from "../clients/Clients";
import "./home.scss";

export const Home: React.FC = (): React.JSX.Element => {
	return (
		<div className="home">
			<div className="container">
				<Main />
				<SneakersModels />
				<Products />
				<Baner />
				<Clients />
			</div>
		</div>
	);
};
