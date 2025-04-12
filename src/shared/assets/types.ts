export type ProductType = {
	title: string;
	slug: string;
	price: string;
	description: string;
	images: string[];
	category: {
        id: number,
        name: string,
        image: string,
        slug: string  
    };
	id: number;
	creationAt: string;
	updatedAt: string;
};
