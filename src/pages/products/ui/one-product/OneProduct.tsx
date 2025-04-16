import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Slider } from "./ui/slider/Slider";
import { ProductType } from "@/shared/assets/types";
import { Parameters } from "./ui/parameters/Parameters";
import { ProductDescription } from "./ui/product-description/ProductDescription";
import "./oneproduct.scss";
import { AddToCart } from "./ui/addtocart/AddToCart";
import { ProductCard } from "@/shared/components/product-card/ProductCard";

export const OneProduct: React.FC = (): React.JSX.Element => {
	const { id } = useParams();
	const [product, setProduct] = useState<ProductType>();
	const [products, setProducts] = useState<ProductType[]>();

	useEffect(() => {
		fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
			.then((response) => response.json())
			.then((data) => setProduct(data));

		fetch(`https://api.escuelajs.co/api/v1/products?offset=10&limit=4`)
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div className="one-product">
			<div className="container">
				<div className="one-product__top-row">
					<div className="one-product__top-row_slider">
						<Slider images={product?.images} />
					</div>
					<div className="one-product__top-row_desc">
						<h2 className="title">{product?.title}</h2>
						<p className="price">$ {product?.price}</p>
						<ProductDescription />
						<Parameters />
						<AddToCart />
					</div>
				</div>
				<div className="details">
					<p>
						Vestibulum commodo sapien non elit porttitor, vitae
						volutpat nibh mollis. Nulla porta risus id neque tempor,
						in efficitur justo imperdiet. Etiam a ex at ante
						tincidunt imperdiet. Nunc congue ex vel nisl viverra,
						sit amet aliquet lectus ullamcorper. Praesent luctus
						lacus non lorem elementum, eu tristique sapien suscipit.
						Sed bibendum, ipsum nec viverra malesuada, erat nisi
						sodales purus, eget hendrerit dui ligula eu enim. Ut non
						est nisi. Pellentesque tristique pretium dolor eu
						commodo. Proin iaculis nibh vitae lectus mollis
						bibendum. Quisque varius eget urna sit amet luctus.
						Suspendisse potenti. Curabitur ac placerat est, sit amet
						sodales risus. Pellentesque viverra dui auctor,
						ullamcorper turpis pharetra, facilisis quam.
					</p>
				</div>

				<div className="advertisement">
					<h2 className="advertisement__title">You May Also Like</h2>
					<div className="advertisement__products">
						{products?.map((item) => {
							return (
								<ProductCard
									key={item.id}
									title={item.title}
									price={item.price}
									img={item.images[0]}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
