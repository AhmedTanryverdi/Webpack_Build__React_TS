import React from "react";
import { Main } from "./ui/main/Main";
import { SneakersModels } from "./ui/sneakers-models/SneakersModels";
import "./home.scss";

export const Home: React.FC = (): React.JSX.Element => {
	return (
		<div className="home">
			<div className="container">
				<div className="home__content">
					<Main />
					<SneakersModels />
				</div>
			</div>
		</div>
	);
};
