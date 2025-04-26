import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { GrFormClose } from "react-icons/gr";
import { useAppDispatch } from "@/shared/utils/types";
import {
	clear,
	setInputText,
} from "@/entities/model/slices/search-input/searchInput";
import "./search.scss";

export const Search: React.FC<{ inputText: string }> = ({
	inputText,
}): React.JSX.Element => {
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();

	return (
		<section className="search">
			<div className="search__input">
				<input
					type="text"
					ref={inputRef}
					className="input"
					placeholder="Search"
					onChange={() =>
						dispatch(setInputText(inputRef.current?.value))
					}
				/>
				{(inputText && (
					<GrFormClose
						size={17}
						onClick={() => {
							if (inputRef.current?.value) {
								inputRef.current.value = "";
								dispatch(clear());
							}
							
						}}
					/>
				)) || <CiSearch />}
			</div>
		</section>
	);
};
