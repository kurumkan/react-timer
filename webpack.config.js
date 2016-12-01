var webpack = require('webpack');

module.exports = {
	//starting point of our app
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx',

	],
	externals:{
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	//where to put the output
	output: {
		path: __dirname,		
		filename: './public/bundle.js'
	},
	resolve: {
		//where to lookup the files
		root:__dirname,
		alias: {		
			Main: "app/components/Main.jsx",
			Navigation: "app/components/Navigation.jsx",
			applicationStyles: 'app/styles/app.scss',
		},		
		//what file extensions?
		extensions: ['', '.js','.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'inline-source-map'
};	