module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    'rules': {
        "indent": [0], //缩进
           // allow async-await
          'generator-star-spacing': 'off', //函数前后空格
           // allow debugger during development
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
          'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', //不允许debugger
          'no-tabs': 'off', //不允许使用制表符，包括在注释中
          "no-dupe-keys": 'error', //在创建对象字面量时不允许键重复 {a:1,a:1}
          "no-dupe-args": 'error', //函数参数不能重复
          "no-duplicate-case": 'error', //switch中的case标签不能重复
          "no-floating-decimal": 'error', //禁止省略浮点数中的0 .5 3.
          "no-multiple-empty-lines": ['warn', { "max": 100 }], //空行最多不能超过100行
          "no-mixed-spaces-and-tabs": ['off'], //不允许使用混合空格和制表符进行缩进
          "spaced-comment": 'off', //注释风格要不要有空格什么的
          "no-multi-spaces": 'off', //不能用多余的空格
          "no-undef": 'error', //不能有未定义的变量
          "no-unused-vars": ['warn', { "vars": "all", "args": "after-used" }], //不能有声明后未被使用的变量或参数
          "camelcase": 'warn', //强制驼峰法命名
          "comma-dangle": ['off', "never"], //对象字面量项尾不能有逗号
          "comma-spacing": 'off', //逗号前后的空格
          "semi": ["error", "always", { "omitLastInOneLineBlock": true }], //在语句末尾需要分号  忽略块中的最后一个分号 这里我有点不解 import Main from '@/views/Main.vue';会报错  但是现在这样确实是我要的效果
          "space-after-keywords": ['off', "always"], //关键字后面是否要空一格
          "space-before-blocks": ['off', "always"], //不以新行开始的块{前面要不要有空格
          "space-before-function-paren": ['off', "always"], //函数定义时括号前面要不要有空格
          "space-in-parens": ['off', "never"], //小括号里面要不要有空格
          "space-infix-ops": 'off', //中缀操作符周围要不要有空格
          "space-return-throw-case": 'off', //return throw case后面要不要加空格
          "space-unary-ops": ['off', { "words": true, "nonwords": false }], //一元运算符的前/后要不要加空格
          "spaced-comment": 'off', //注释风格要不要有空格什么的
          "quotes": ['off', "single"], //引号类型 
          "no-trailing-spaces": ['off', { "skipBlankLines": true, "ignoreComments": true }], //可以在行尾添加尾随空格
          "keyword-spacing": ['off', { "before": true, "after": true, "overrides": null }], //在关键字前后加空格，overrides允许覆盖指定关键字的间距样式
          "key-spacing": "off", //强制在对象字面量的键和值之间使用一致的空格
          "semi-spacing": ["off", { "before": false, "after": false }], //分号前后空格
          "no-eq-null": "off", //禁止对null使用==或!=运算符
          "eqeqeq": ["off"], //对象比较时不强制考虑类型安全
        "semi": "off",
        "object-curly-spacing": "off",
        "eol-last": "off",
        "padded-blocks": "off",
        "no-unused-vars": "off",
    }

}