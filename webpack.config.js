var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

module.exports = {

	entry: {
		/*多入口ID分配例子*/
	 	index: ['./src/js1/entry.js'],   
		index2: ['./src/js1/entry2.js']

        /*单入口文件例子*/
		// index: ['./src/js2/entry.js'],   
		
	},
	output: {
		path: path.resolve(__dirname, './dist/static'),
		publicPath: 'static/',
		filename: '[name].[chunkhash].js'
	},
	resolve: {
		extensions: ['', '.js', '.less', '.swig', '.html']
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				// loader: 'style!css'
				loader: ExtractTextPlugin.extract('style-loader', ['css-loader'])
			},
			{
				test: /\.less$/,
				// loader: 'style!css!less'
				loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'less-loader'])
			},
			{
				test: /\.swig/,
				loader: 'swig'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].[chunkhash].css'),

		new webpack.optimize.CommonsChunkPlugin('common.js'), //提取所有入口的公共资源,
                                                       //新的定义为common.js入口
		/**
		 * 把chunks入口文件的资源导出到html中
		 * 资源可能是 css 或者 js等
		 * css的话 使用配合ExtractTextPlugin使用
		 */
		new HtmlWebpackPlugin({
			chunks: ['index', 'index2', 'common.js'], //放入口文件的key即可 因为每个key对应一个输出对象js
			                             // 这样配置话，会把index index2连个入口的输出js css都打包进html
			                             // 再提醒一下 每个入口对应的 js css都会插入进html哦
			                             // 必须还加入入口公共入口的部分 common 它会自动把它对应的 js css加入html
			filename: '../index.html',  //这个路径是相对于path
			template: './src/tpl/index.html',
			inject: true
		})
	]
}
