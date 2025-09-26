const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 静态文件服务
app.use(express.static(path.join(__dirname, 'dist/static')));

// 重定向根路径到 contact.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/static/contact.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see your app`);
});