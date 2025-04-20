import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { GrFormClose } from "react-icons/gr";
import "./search.scss";

export const Search: React.FC = (): React.JSX.Element => {
	const inputRef = useRef<HTMLInputElement>(null);
    
	return (
		<section className="search">
			<div className="search__input">
				<input
					type="text"
					ref={inputRef}
					className="input"
					placeholder="Search"
                    onChange={()=>console.log(inputRef.current?.value)}
				/>
				{(inputRef.current?.value && <GrFormClose size={17} />) || (
					<CiSearch />
				)}
			</div>
		</section>
	);
};
