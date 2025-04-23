import "./li.scss";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/shared/utils/types";
import { setCurrentPage } from "@/entities/model/slices/pagination/pagination";

export const Li: React.FC<{
	index: number;
	currentPage: number;
}> = ({ index, currentPage }): React.JSX.Element => {
	const [activeBtn, setActiveBtn] = useState("");
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (currentPage === index) {
			setActiveBtn("active");
		} else {
			setActiveBtn("");
		}
	}, [currentPage]);

	return (
		<li key={index} className="page">
			<div
				className={`page__btn ${activeBtn}`}
				onClick={() => {
					dispatch(setCurrentPage(index));
					if (currentPage === index) {
						setActiveBtn("active");
					} else {
						setActiveBtn("");
					}
				}}
			>
				{index + 1}
			</div>
		</li>
	);
};
