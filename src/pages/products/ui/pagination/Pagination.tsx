import React from "react";
import { Li } from "./ui/Li";
import "./pagination.scss";
import { useAppDispatch } from "@/shared/utils/types";
import { setCurrentPage } from "@/entities/model/slices/pagination/pagination";

export const Pagination: React.FC<{
	quantityPages: number;
	currentPage: number;
}> = ({ quantityPages, currentPage }): React.JSX.Element => {
	const dispatch = useAppDispatch();

	return (
		<div className="pagination">
			<ul className="pagination__pages">
				{Array.from(new Array(quantityPages).keys()).map((page) => {
					return (
						<Li key={page} index={page} currentPage={currentPage} />
					);
				})}
			</ul>
			<button
				type="button"
				className="next"
				onClick={() =>
					dispatch(
						setCurrentPage(
							currentPage + 1 < quantityPages
								? currentPage + 1
								: 0
						)
					)
				}
			>
				Next
			</button>
		</div>
	);
};
