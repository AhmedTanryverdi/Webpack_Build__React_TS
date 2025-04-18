import { Route, Routes } from "react-router-dom";
import { Root } from "./Root";
import { Home } from "@/pages/home/Home";
import { AboutUs } from "@/pages/about-us/AboutUs";
import { ContactUs } from "@/pages/contact-us/ContactUs";
import { Products } from "@/pages/products/Products";
import { OneProduct } from "@/pages/products/ui/one-product/OneProduct";
import { Profile } from "@/pages/profile/Profile";

export const App: React.FC = (): React.JSX.Element => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Root />}>
					<Route index element={<Home />} />
					<Route path="about" element={<AboutUs />} />
					<Route path="contacts" element={<ContactUs />} />
					<Route path="products" element={<Products />} />
					<Route path="products/:id" element={<OneProduct />}/>
					<Route path="profile" element={<Profile />} />
				</Route>
			</Routes>
		</div>
	);
};
