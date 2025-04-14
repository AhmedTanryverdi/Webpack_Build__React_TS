import React from "react";
import { Button } from "@/shared/components/button/Button";
import "./feedback.scss";

export const FeedBack: React.FC = (): React.JSX.Element => {
	return (
		<div className="feedback">
			<img src={require("./group.png").default} alt="image" />
			<div className="form-block">
				<h2 className="form-block__title">
					<p className="title">Your Feedback Is Much Appreciated!</p>
					<p className="subtitle">
						We will contact you when you complete the following
						form!
					</p>
				</h2>
				<form action="" className="feedback__form">
					<label htmlFor="user-name">
						<p>
							Your Name<span>*</span>
						</p>
						<input type="text" id="user-name" className="input" />
					</label>
					<label htmlFor="address">
						<p>
							Your Email Address<span>*</span>
						</p>
						<input type="text" id="address" className="input" />
					</label>
					<label htmlFor="topic">
						<p>
							Topic<span>*</span>
						</p>
						<input type="text" id="topic" className="input" />
					</label>

					<label htmlFor="textarea">
						<p>
							Your Message <span>*</span>
						</p>
						<textarea name="feedback" id="textarea"></textarea>
					</label>

					<Button text="SEND" name="feedback__form_btn"/>
				</form>
			</div>
		</div>
	);
};
