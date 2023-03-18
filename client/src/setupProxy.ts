import { createProxyMiddleware } from 'http-proxy-middleware'

// module.exports = (app: any) => {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://ec2-52-78-230-225.ap-northeast-2.compute.amazonaws.com',
//       changeOrigin: true,
//     })
//   )
// }