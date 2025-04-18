import React from "react";
import bg from "@/shared/assets/images/img.png";
import { Button } from "@/shared/components/button/Button";
import "./login.scss";

export const LogIn: React.FC = (): React.JSX.Element => {
	return (
		<div className="profile">
			<div className="container">
				<div className="profile__header">
					<img src={bg} alt="bg" className="profile__header_bg" />
					<h2 className="profile__header_title">My Account</h2>
				</div>
				<div className="profile__data">
					<form action="" className="profile__data_form">
						<label htmlFor="email" className="label__input">
							<span>Email address or username *</span>
							<input type="text" className="input"/>
						</label>
						<label htmlFor="Password *" className="label__input">
							<span>Email address or username *</span>
							<input type="text" className="input"/>
						</label>
						<label htmlFor="Password *" className="label__checkbox">
							<input type="checkbox" className="checkbox"/>
							<span>Remember me</span>
						</label>
						<Button text="LOG IN" name="profile__data_form-btn" />
					</form>
				</div>
			</div>
		</div>
	);
};
