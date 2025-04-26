import React, { useCallback, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { GrFormClose } from "react-icons/gr";
import { useAppDispatch } from "@/shared/utils/types";
import { setInputText } from "@/entities/model/slices/search-input/searchInput";
import debounce from "lodash.debounce";
import "./search.scss";

export const Search: React.FC<{ inputText: string }> = ({
	inputText,
}): React.JSX.Element => {
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();

	const updateInputText = useCallback(
		debounce((str: string) => {
			dispatch(setInputText(str));
		}, 600),
		[]
	);
	inputText;
	return (
		<section className="search">
			<div className="search__input">
				<input
					type="text"
					ref={inputRef}
					className="input"
					placeholder="Search"
					onChange={() =>
						inputRef?.current?.value &&
						updateInputText(inputRef.current.value)
					}
				/>
				{(inputText && (
					<GrFormClose
						size={17}
						onClick={() => {
							if (inputRef.current?.value) {
								inputRef.current.value = "";
							}
						}}
					/>
				)) || <CiSearch />}
			</div>
		</section>
	);
};
