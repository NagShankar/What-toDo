//entry -> output
//here we specify the entry and output for webpack to bundle
const path=require('path');
//console.log(path.join(__dirname,'public'));

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//switching from returning an object directly to function which which returns an object so that we can have "env" variable

module.exports = (env) => {
    //console.log('env', env);
    
    //deciding whether to run dev script or prod script using env
    
    const isProduction = env === 'production'; //checking the script mode i.e webpack build mode
    const MiniCssExtract = new MiniCssExtractPlugin({
      filename: 'styles.css'  
    }) //extracting all css files to one file styles.css by creating new instance of MiniCssExtractPlugin
    
    
    return   {
    entry: './src/app.js',
    output:{
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
module: {
  rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
  },
   {
     test: /\.s?css$/,
     use: [MiniCssExtractPlugin.loader, 
           {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
           },
           {
               
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
               
           },
            
           ]
   }]        
        
},
    plugins:[MiniCssExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map', //cheap-module-eval-source-map -> are for dev purpose we dont need in prod, inline-source-map -> are for dev purpose, instead we can opt for slower source map i.e -> source-map, and it shold work when someone opens dev tools, DOING ALL THIS TO REDUCE SIZE OF THE BUNDLE.JS in the final production
    devServer:{
        contentBase: path.join(__dirname, 'public')
    }
    
};
    
}
    
    
    
  