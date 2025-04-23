import React from "react";
import "./button.scss";

export const Button: React.FC<{ text: string; name: string; handleClick?: ()=>void }> = ({
	text,
	name,
	handleClick,
}): React.JSX.Element => {
	return (
		<button className={`button ${name}`} onClick={handleClick}>
			{text}
		</button>
	);
};
