const path = require('path');

module.exports = {
    name : "javascript30-setting", 
    mode: "development", //실서비스 production
    devtool : "eval",   //빠르게하겠다 개발땐 hidden-source-map
    resolve: {
        extensions: ['.js']
    },
    entry:{
        app: ['./src/Main']
    },  //입력
    
    module: {
        rules: [{
            test:/\.jsx?/,              // js, jsx파일에 바벨 룰을적용
            loader:'babel-loader',
            options: {
                presets:['@babel/preset-env', '@babel/preset-react'],
                plugins:[
                    '@babel/plugin-proposal-class-properties', 
                    'react-hot-loader/babel'
                ]
            }
        }]
    },
    
    output:{
        path:path.join(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/dist'      //index js 경로정할때
    }, //출력
};