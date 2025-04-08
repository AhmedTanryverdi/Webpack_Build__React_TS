import "./header.scss";
import icon from "./favicon.png";

export const Header: React.FC = (): React.JSX.Element => {

	return (
		<header className="header">
			<div className="container">
				<div className="header__content">
					<h1 className="header__title">Delivery</h1>
					<img src={icon} alt="favicon" />
				</div>
			</div>
		</header>
	);
};
