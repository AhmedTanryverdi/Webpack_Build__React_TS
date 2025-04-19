import "./header.scss";
import { Navigate } from "./ui/navigate/Navigate";
import { Social } from "./ui/social/Social";
import { Logo } from "./ui/logo/Logo";
import { Direct } from "./ui/direct/Direct";

export const Header: React.FC = (): React.JSX.Element => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__content">
					<div className="header__top-row">
						<Social />
						<Logo />
						<Direct />
					</div>
					<div className="navigate-menu">
						<Navigate />
					</div>
				</div>
			</div>
		</header>
	);
};
