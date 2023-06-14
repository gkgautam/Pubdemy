const express = require('express');
const router = require('./router/route'); // require router
const app = express();
const port = process.env.PORT || 5000;
const { createProxyMiddleware } = require('http-proxy-middleware');

require('./db/db');

app.use(router); // using router


// module.exports = function(app) {
  app.use(
    '/router',
    createProxyMiddleware({
      target: 'https://pubdemy-server.onrender.com',
      changeOrigin: true,
    })
  );
// };

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(port, ()=>{
  console.log(`starting server at http://localhost:${port}`);
});