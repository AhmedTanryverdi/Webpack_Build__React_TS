import React from "react";
import "./button.scss";

export const Button: React.FC<{ text: string; name: string }> = ({
	text,
	name,
}: {
	text: string;
	name: string;
}): React.JSX.Element => {
	return (
		<button className={`button ${name}`}>
			{text}
		</button>
	);
};
