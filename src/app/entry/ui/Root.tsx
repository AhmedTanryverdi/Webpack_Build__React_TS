import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";

export const Root: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
