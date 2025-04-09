import "./header.scss";
import facebook from "./assets/icons/facebook.png";
import instagram from "./assets/icons/instagram.png";
import twitter from "./assets/icons/twitter.png";
import search from "./assets/icons/search.png";
import user from "./assets/icons/user.png";
import shoppingCart from "./assets/icons/shopping-cart.png";
import bgLogo from './assets/icons/bg.png';
import shoe from "./assets/icons/shoe.png";
import { Navigate } from "./ui/navigate/Navigate";

const socials = [facebook, instagram, twitter];
const iconsBlock = [search, user, shoppingCart];

export const Header: React.FC = (): React.JSX.Element => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__content">
					<div className="header__top-row">
						<div className="header__social">
							{socials.map((item, index) => {
								return (
									<img
										key={index}
										src={item}
										alt="facebook image"
										className="header__social_icon"
									/>
								);
							})}
						</div>
						<div className="header__logo">
							<img
								src={bgLogo}
								alt="logo image"
								className="header__logo_bg"
							/>
							<img
								src={shoe}
								alt="logo image"
								className="header__logo_shoe"
							/>

							<h1 className="header__logo_title">BEST SHOP</h1>
						</div>
						<div className="header__icons">
							{iconsBlock.map((item, index) => {
								return (
									<img
										key={index}
										src={item}
										alt="icon"
										className="header__icons_item"
									/>
								);
							})}
						</div>
					</div>
					<div className="navigate-menu">
						<Navigate />
					</div>
				</div>
			</div>
		</header>
	);
};
