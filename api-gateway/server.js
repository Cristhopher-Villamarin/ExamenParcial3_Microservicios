const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy para el servicio de clientes
app.use('/clientes', (req, res, next) => {
  console.log('Redirigiendo petición a customers-service:', req.method, req.url);
  createProxyMiddleware({
    target: 'http://customers-service:3001',
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      console.log('Petición proxy a customers-service:', proxyReq.method, proxyReq.path);
    },
    onProxyRes: (proxyRes, req, res) => {
      console.log('Respuesta de customers-service:', proxyRes.statusCode);
    }
  })(req, res, next);
});

// Proxy para el servicio de inventario
app.use('/productos', createProxyMiddleware({
  target: 'http://inventory-service:3003',
  changeOrigin: true,
}));

// Proxy para el servicio de ventas
app.use('/ventas', createProxyMiddleware({
  target: 'http://sales-service:3002',
  changeOrigin: true,
}));

// Puerto en el que corre el API Gateway
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`API Gateway corriendo en el puerto ${PORT}`);
});
