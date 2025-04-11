import React from "react";
import img from "../../assets/images/img.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import bg from "../../assets/images/bg.png";
import lines from "../../assets/images/vector_lines.png"
import "./slab.scss";

const images = [img, img1, img2, img3];

export const Slab: React.FC = (): React.JSX.Element => {
	return (
		<div className="slab">
			<div className="contaner">
				<div className="slab__content">
					<img src={bg} alt="bg image" className="slab__bg" />
					<img src={lines} alt="bg image" className="slab__bg" />
					<h3 className="slab__content_title">Popular Today</h3>
					<div className="slab__content_block">
						{images.map((item, index) => {
							return (
								<div key={index} className="block-item">
									<img src={item} alt="image" />
									<div className="text">
										<p>Velit nisl sodales eget </p>
										<p>donec quis. volutpat orci.</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
