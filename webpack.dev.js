const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src/app/entry/main.tsx"),

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},

	resolve: {
		extensions: [".js", ".ts", "jsx", "tsx"],
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},

	devServer: {
		port: 5000,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new CleanWebpackPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: "/node_models/",
				use: ["babel-loader"],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: "/node_models/",
				use: ["babel-loader"],
			},
			{
				test: /\.css$/,
				exclude: "/node_models/",
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/,
				exclude: "/node_models/",
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},

	devtool: "inline-source-map",
};
