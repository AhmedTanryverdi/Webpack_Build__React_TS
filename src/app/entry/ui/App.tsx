import { Route, Routes } from "react-router-dom";
import { Root } from "./Root";
import {Home} from '@/pages/home/Home';
import { AboutUs } from "@/pages/about-us/AboutUs";
import { ContactUs } from "@/pages/contact-us/ContactUs";


export const App: React.FC = (): React.JSX.Element => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Root />}>
					<Route path="" element={<Home />} />
					<Route path="about" element={<AboutUs />} />
					<Route path="contacts" element={<ContactUs />} />
				</Route>
			</Routes>
		</div>
	);
};
