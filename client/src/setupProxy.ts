import { createProxyMiddleware } from 'http-proxy-middleware'
//
// module.exports = (app: any) => {
//   app.use(
//     '/login',
//     createProxyMiddleware({
//       target: 'https://center.gbsw.hs.kr',
//       changeOrigin: true,
//     })
//   );
// };