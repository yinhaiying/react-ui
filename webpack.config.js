
const path = require("path");
module.exports = {
    entry:{
        index:"./lib/index.tsx"
    },
    output:{
      path:path.resolve(__dirname,"dist/lib"),
      library:"sea-ui",
      libraryTarget:"umd"//  库最终导出的模块格式。umd是amd和cmd的兼容处理
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:"awesome-typescript-loader"
            }
        ]
    }
}