import { store } from "@/app/store";
import { useDispatch } from "react-redux";

export type ProductType = {
	title: string;
	slug: string;
	price: string;
	description: string;
	images: string[];
	category: {
		id: number;
		name: string;
		image: string;
		slug: string;
	};
	id: number;
	creationAt: string;
	updatedAt: string;
};

export type CartProductType = {
	product: ProductType;
	quantity: number;
};

export type SubTitleType = {
	title: string;
	text: string[];
};

export type ImageType = {
	title: string;
	name: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
