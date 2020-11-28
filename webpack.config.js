
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"production",
    entry:{
        index:"./lib/index.tsx"
    },
    output:{
      path:path.resolve(__dirname,"dist/lib"),
      library:"sea-ui",
      libraryTarget:"umd"//  库最终导出的模块格式。umd是amd和cmd的兼容处理
    },
    resolve:{
      "extensions":[".tsx",".ts",".jsx",".js"]
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:"awesome-typescript-loader"
            }
        ]
    },

    // plugins:[
    //     new HtmlWebpackPlugin({
    //         title:"sea-ui",
    //         template:"index.html"
    //     })
    // ],
    // externals:{
    //   "react":{
    //     "commonjs":"react",
    //     "commonjs2":"react",
    //     "amd":"react",
    //     "root":"React"
    //   },
    //   "react-dom":{
    //     "commonjs":"react-dom",
    //     "commonjs2":"react-dom",
    //     "amd":"react-dom",
    //     "root":"ReactDOM"
    //   },
    // }
}
