import "./direct.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Access } from "./ui/Access";
import React, { useCallback, useEffect, useState } from "react";
import { SearchInput } from "@/shared/components/searchInput/SearchInput";
import { GrFormClose } from "react-icons/gr";
import debounce from "lodash.debounce";
import {
	clear,
	setInputText,
} from "@/entities/model/slices/search-input/searchInput";
import { RootState, useAppDispatch } from "@/shared/utils/types";
import { useSelector } from "react-redux";

export const Direct: React.FC = (): React.JSX.Element => {
	const [isAccess, setAccess] = useState(false);
	const [activeSearch, setActiveSearch] = useState("");
	const [searchValue, setSearchValue] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();

	const inputText = useSelector<RootState, string>(
		(state) => state.searchInput.inputText
	);

	const updateInputText = useCallback(
		debounce((str: string) => {
			dispatch(setInputText(str));
		}, 600),
		[]
	);

	const onChange = (e: any) => {
		setSearchValue(e?.currentTarget.value);
		updateInputText(e?.currentTarget.value);
	};

	useEffect(() => {
		if (inputText && location.pathname !== "/products") {
			navigate("/products");
		}
	}, [inputText]);

	useEffect(() => {
		const fn = (e: any) => {
			if (e.target instanceof HTMLElement) {
				if (e.target?.className !== "search") {
					setActiveSearch("");
				}

				if (e.target.parentElement?.className !== "direct__user") {
					setAccess(false);
				}
			}
		};

		document.addEventListener("click", fn);

		return () => document.removeEventListener("click", fn);
	}, []);

	return (
		<div className="direct">
			<div className={`direct__search `}>
				<SearchInput
					elementName={`direct__search-input ${activeSearch}`}
					value={searchValue}
					onChange={(e) => onChange(e)}
					Component={() => (
						<GrFormClose
							size={17}
							onClick={() => {
								dispatch(clear());
								setSearchValue("");
							}}
						/>
					)}
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
					setActiveSearch(activeSearch ? "" : "active");
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
						setActiveSearch("");
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
					setActiveSearch("");
					setAccess(false);
					navigate("/cart");
				}}
			/>
		</div>
	);
};
