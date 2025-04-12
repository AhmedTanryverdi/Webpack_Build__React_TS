import React from "react";
import img from "./assets/images/img.png";
import "./arrival.scss";
import { Button } from "@/shared/components/button/Button";

export const Arrival: React.FC = (): React.JSX.Element => {
	return (
		<div className="arrival">
			<img src={img} alt="image" />
			<div className="arrival__left">
				<div className="arrival__left_title">
					<h2 className="title">New Arrivals Every Week</h2>
					<div className="desc">
						<p>
							Duis vestibulum elit vel neque pharetra vulputate.
							Quisque scelerisque nisi urna. Duis rutrum non risus
							in imperdiet. Proin molestie accumsan nulla
							sit.Quisque scelerisque nisi urnauis rutrum.
						</p>
						<p>
							Vitrumuis vestibulum elit vel neque pharetra
							vulputate. Quisque scelerisque nisi urna. Duis
							vestibulum elit vel neque pharetra vulputateuisque
							scelerisque nisi urna.
						</p>
					</div>

					<Button text="See All Models" name="arrival__btn"/>
				</div>
			</div>
		</div>
	);
};
