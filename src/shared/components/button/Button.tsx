import React from "react";
import "./button.scss";

export const Button: React.FC<{ text: string; name: string }> = ({
	text,
	name,
}): React.JSX.Element => {
	return <button className={`button ${name}`}>{text}</button>;
};
