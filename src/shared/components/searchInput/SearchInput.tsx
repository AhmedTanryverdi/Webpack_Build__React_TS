import React from "react";
import "./searchInput.scss";

export const SearchInput: React.FC<{
	elementName: string;
	value: string;
	onChange: (e: any) => void;
	Component: React.FC;
}> = ({ elementName, value, onChange, Component }): React.JSX.Element => {


	return (
		<div className={`search-input ${elementName}`}>
			<label htmlFor="search-input" className="label">
				<input
					type="text"
					id="search-input"
					className="search"
					value={value}
					onChange={onChange}
				/>
				<Component />
			</label>
		</div>
	);
};
