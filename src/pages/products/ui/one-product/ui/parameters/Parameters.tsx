import React from 'react';
import "./parameters.scss";

export const Parameters: React.FC = (): React.JSX.Element => {
  return (
		<div className="one-product__top-row_parameters">
			<label htmlFor="size">
				<span>Size</span>
				<select name="size" id="size" className="select">
					<option value="38">38</option>
					<option value="39">39</option>
					<option value="40">40</option>
					<option value="41">41</option>
					<option value="42">42</option>
				</select>
			</label>
			<label htmlFor="color">
				<span>Color</span>
				<select name="color" id="color" className="select">
					<option value="blue">blue</option>
					<option value="red">red</option>
					<option value="green">green</option>
					<option value="grey">grey</option>
				</select>
			</label>
			<label htmlFor="category">
				<span>Category</span>
				<select name="color" id="category" className="select">
					<option value="category">category</option>
					<option value="category">category</option>
					<option value="category">category</option>
					<option value="category">category</option>
					<option value="category">category</option>
				</select>
			</label>
		</div>
  );
}
