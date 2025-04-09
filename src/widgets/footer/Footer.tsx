import React from "react";
import { Slab } from "./ui/slab/Slab";
import phoneIcon from './assets/icons/phone.png';
import messageIcon from "./assets/icons/message.png";
import clockIcon from "./assets/icons/clock.png";
import locationIcon from "./assets/icons/location.png";
import "./footer.scss";

const arr = [
	{ "About Us": ["Organisation", "Partners", "Clients"] },
	{ "Interesting Links": ["Photo Gallery", "Our Team", "Socials"] },
	{ Achievements: ["Winning Awards", "Press", "Our Amazing Clients"] },
];
arr;

export const Footer: React.FC = (): React.JSX.Element => {
	return (
		<div className="footer">
			<Slab />
			<div className="footer__body">
				<div className="footer__left">
					<div className="footer__left_counter">
						{arr.map((obj, index) => {
							return (
								<div
									key={index}
									className="footer__left_counter-item"
								>
									<h3 className="footer__left_counter-title">
										{Object.keys(obj)[0]}
									</h3>

									<ul className="footer__left_counter-group">
										{Object.values(obj)[0].map(
											(item: string, index: number) => {
												return (
													<li key={index}>{item}</li>
												);
											}
										)}
									</ul>
								</div>
							);
						})}
					</div>

					<div className="footer__left_information">
						<h2 className="footer__left_information-title">
							Shipping Information
						</h2>
						<div className="footer__left_information-text">
							<p>
								Nulla eleifend pulvinar purus, molestie euismod
								odio imperdiet ac. Ut sit amet erat nec nibh
							</p>
							<p>
								rhoncus varius in non lorem. Donec interdum,
								lectus in convallis pulvinar, enim elit porta
								sapien,
							</p>
							<p>
								vel finibus erat felis sed neque. Etiam aliquet
								neque sagittis erat tincidunt aliquam.
							</p>
						</div>
					</div>
				</div>
				<div className="footer__right">
					<div className="footer__right-top">
						<h3 className="footer__right-top-title">Contact Us</h3>
						<div className="footer__right-top-desc">
							<p>
								Bendum dolor eu varius. Morbi fermentum
								velitsodales
							</p>
							<p>
								egetonec. volutpat orci. Sed ipsum felis,
								tristique
							</p>
							<p>
								egestas et, convallis ac velitn consequat nec
								luctus.
							</p>
						</div>
					</div>

					<div className="footer__right_bottom">
						<div className="footer__right_bottom-icon">
							<img src={phoneIcon} alt="phone icon" />
							<p>Phone: (+63) 236 6322</p>
						</div>
						<div className="footer__right_bottom-icon">
							<img src={messageIcon} alt="phone icon" />
							<p>Phone: (+63) 236 6322</p>
						</div>
						<div className="footer__right_bottom-icon">
							<img src={clockIcon} alt="phone icon" />
							<p>Phone: (+63) 236 6322</p>
						</div>
						<div className="footer__right_bottom-icon">
							<img src={locationIcon} alt="phone icon" />
							<p>Phone: (+63) 236 6322</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
