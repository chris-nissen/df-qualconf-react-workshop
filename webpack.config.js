var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('site.css');
var merge = require('webpack-merge');
var fs = require('fs');

function DummyFilePlugin(options) {
	this.files = options.files || [];
}

DummyFilePlugin.prototype.apply = function(compiler) {
	this.files.map(function(fileName) {
		fs.writeFile(fileName, '');
	});
};

// Configuration in common to both client-side and server-side bundles
var sharedConfig = () => ({
	resolve: {
		extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
		root: [
			path.resolve('./ClientApp'),
			path.resolve('./node_modules')
		]
	},
	output: {
		filename: '[name].js',
		publicPath: '/dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
	},
	module: {
		loaders: [
			{ test: /\.tsx?$/, include: /ClientApp/, loader: 'babel-loader' },
			{ test: /\.tsx?$/, include: /ClientApp/, loader: 'ts-loader', query: { silent: true } }
		]
	}
});

// Configuration for client-side bundle suitable for running in browsers
var clientBundleOutputDir = './wwwroot/dist';
var clientBundleConfig = merge(sharedConfig(),
{
	entry: { 'main-client': './ClientApp/boot-client.tsx' },
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: isDevBuild
					? 'style-loader!css-loader!sass-loader'
					: extractCSS.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
			},
			{ test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader', query: { limit: 25000 } },
			{
				test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
				loader: 'file'
			}
		]
	},
	output: { path: path.join(__dirname, clientBundleOutputDir) },
	plugins: [
		new ExtractTextPlugin('site.css'),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('./wwwroot/dist/vendor-manifest.json')
		})
	].concat(isDevBuild
		? [
			// Plugins that apply in development builds only
			new webpack.SourceMapDevToolPlugin({
				filename: '[file].map', // Remove this line if you prefer inline source maps
				moduleFilenameTemplate: path
					.relative(clientBundleOutputDir, '[resourcePath]')
// Point sourcemap entries to the original file locations on disk
			}),
			new DummyFilePlugin({
				files: ['./wwwroot/dist/site.css'] // this prevents a bunch of 404s when we are injecting our styles in dev.
			}),
			new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
		]
		: [
			// Plugins that apply in production builds only
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
		])
});

// Configuration for server-side (prerendering) bundle suitable for running in Node
var serverBundleConfig = merge(sharedConfig(),
{
	resolve: { packageMains: ['main'] },
	entry: { 'main-server': './ClientApp/boot-server.tsx' },
	plugins: [
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('./ClientApp/dist/vendor-manifest.json'),
			sourceType: 'commonjs2',
			name: './vendor'
		})
	],
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, './ClientApp/dist')
	},
	target: 'node',
	devtool: 'inline-source-map'
});

module.exports = [clientBundleConfig, serverBundleConfig];