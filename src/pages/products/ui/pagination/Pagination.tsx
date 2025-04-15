import React from "react";
import { Li } from "./ui/Li";
import "./pagination.scss";

export const Pagination: React.FC<{
	amountPages: number;
	currentPage: number;
	setCurrentPage: (currentPage: number) => void;
}> = ({ amountPages, currentPage, setCurrentPage }): React.JSX.Element => {
	return (
		<div className="pagination">
			<ul className="pagination__pages">
				{Array.from(new Array(amountPages).keys()).map((page) => {
					return (
						<Li
							key={page}
							index={page}
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
						/>
					);
				})}
			</ul>
			<button
				type="button"
				className="next"
				onClick={() => setCurrentPage(currentPage + 1 < amountPages ? currentPage+1: 0)}
			>
				Next
			</button>
		</div>
	);
};
