import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = (app: any) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://ec2-3-36-90-121.ap-northeast-2.compute.amazonaws.com:8080',
      changeOrigin: true,
    })
  )
}