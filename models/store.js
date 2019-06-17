const crypto = require("crypto");

let store = {
  posts: [
    {
      id: crypto.randomBytes(16).toString("hex"),
      name: 'Top 10 ES6 Features every Web Developer must know',
      url: 'https://webapplog.com/es6',
      text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
      comments: [
        {
          commentId: crypto.randomBytes(16).toString("hex"),
          text: 'Cruel…..var { house, mouse} = No type optimization at all'
        },
        {
          commentId: crypto.randomBytes(16).toString("hex"),
          text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'
        },
        {
          commentId: crypto.randomBytes(16).toString("hex"),
          text: '(p1,p2)=>{ … } ,i understand this ,thank you !'
        }
      ]
    }
  ]
};

module.exports = store;