const express = require('express');
const router = require('./router/route'); // require router
const app = express();
const port = process.env.PORT || 5000;
// const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');


require('./db/db');

app.use(router); // using router

// app.use(cors({ origin: true, credentials: true }));
// module.exports = function(app) {
//   app.use(
//     '/router',
//     createProxyMiddleware({
//       target: 'https://pubdemy-server.onrender.com',
//       changeOrigin: true,
//     })
//   );
// // };


const corsOpts = {
  origin: '*',
  credentials: true,
  methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
  allowedHeaders: ['Content-Type'],
  exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(port, ()=>{
  console.log(`starting server at http://localhost:${port}`);
});