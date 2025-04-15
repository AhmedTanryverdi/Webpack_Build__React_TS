import React, { useEffect, useRef } from "react";

export const Li: React.FC<{
	index: number;
	currentPage: number;
	setCurrentPage: (currentPage: number) => void;
}> = ({ index, setCurrentPage, currentPage }): React.JSX.Element => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (currentPage === index) {
			buttonRef.current?.focus();
		}
	}, [currentPage]);

	return (
		<li key={index} className="page">
			<button
				type="button"
				ref={buttonRef}
				className="page__btn"
				onClick={() => {
					setCurrentPage(index);
					if (currentPage === index) {
						buttonRef.current?.focus();
					}
				}}
				onBlur={(e) => {
					if (e.relatedTarget === null) {
						e.target.focus();
					}
				}}
			>
				{index + 1}
			</button>
		</li>
	);
};
