import "./direct.scss";
import { useNavigate } from "react-router-dom";
import { Access } from "./ui/Access";
import React, { useEffect, useState } from "react";

export const Direct: React.FC = (): React.JSX.Element => {
	const [isAccess, setAccess] = useState(false);
	const [isSearch, setSearch] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fn = (e: any) => {
			if (e.target instanceof HTMLElement) {
				if (e.target.parentElement?.className !== "direct") {
					setSearch(false);
				}

				if (e.target.parentElement?.className !== "direct__user") {
					setAccess(false);
				} else {
				}
			}
		};

		document.addEventListener("click", fn);

		return () => document.removeEventListener("click", fn);
	}, []);

	return (
		<div className="direct">
			<div className="direct__input">
				<input
					type="text"
					className={`input ${isSearch && "active"}`}
				/>
			</div>
			<img
				src={
					require(`@/widgets/header/assets/icons/search.png`).default
				}
				alt="search image"
				className="search"
				onClick={() => {
					setAccess(false);
					setSearch(!isSearch);
				}}
			/>
			<div className="direct__user">
				<img
					src={
						require(`@/widgets/header/assets/icons/user.png`)
							.default
					}
					alt="user image"
					onClick={() => {
						setSearch(false);
						setAccess(!isAccess);
					}}
				/>
				{isAccess && <Access />}
			</div>

			<img
				src={
					require(`@/widgets/header/assets/icons/shopping-cart.png`)
						.default
				}
				alt="cart image"
				onClick={() => {
					setSearch(false);
					setAccess(false);
					navigate("/cart");
				}}
			/>
		</div>
	);
};
