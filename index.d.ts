declare module "*.svg" {
	const content: DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>;
	export default content;
}

declare module "*.png" {
	const content: DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>;
	export default content;
}
