# npm-encrypted-request

<div align="center">
  <a href="./README.md">English</a>｜<a href="./README.zh-CN.md">简体中文</a>
  <hr width="50%"/>
</div>

一个简单的前端加密助手，用于与 [hejunjie/encrypted-request](https://github.com/zxc7563598/php-encrypted-request) PHP 包配合使用，实现前端请求参数的 AES 加密与 MD5 签名生成。

**本项目已经经由 Zread 解析完成，如果需要快速了解项目，可以点击此处进行查看：[了解本项目](https://zread.ai/zxc7563598/npm-encrypted-request)**

## 功能特性

- ♾️ 混合加密，AES 密钥随机生成，前端仅需要配置公钥即可
- 🔐 AES-128-CBC 加密数据，密钥自动生成，不进行存储
- ✍️ 动态 MD5 签名生成
- 📦 TypeScript 支持
- 🚀 支持 ES 模块与 CommonJS
- 🧠 对代码改动极小，配套 php 包无需关注原理即可安全传输数据

## 安装

```bash
npm install hejunjie-encrypted-request
```

## 快速使用

### TypeScript 示例

```typescript
import { encryptRequest, EncryptOptions } from "hejunjie-encrypted-request";

const pubKey: string = `-----BEGIN PUBLIC KEY-----
您的公钥，可以替换为读取pem文件等操作
-----END PUBLIC KEY-----`;

const options: EncryptOptions = {
  rsaPubKey: pubKey,
};

const data = { message: "Hello World" };
const encrypted = encryptRequest(data, options);

console.log(encrypted);
// {
//   timestamp: 1756367390,
//   sign: 'ab4484c2a0743079fb4bcd685f28bdcb',
//   en_data: '6MeWbuNLUrWTCIWImsATcbihd/I/xp7kYyufDSBdJ1g=',
//   enc_payload: 'Z7zoj/bFujKdbbmd1kX0scE/KLwIypAsCsFYA27Gs8L7SbIho1xUOgDl2MAmOSSrloELHdZGdrTred9fwuCGk8HNvDsrWWk0A0r7KHKfm0J9JlnTHSXnc5eK+VExftnc1hRfdRsAFZ6uzO1iFoLQYbb6MKl5SEvFMeI4wGQqDQ44tmPvNJU3GRdtNmFoCotRTzqopH3OSg2PwahxG9JSg+jS82wVco8qnJrx3+E6+3spIHlaMJUMrqAxwQCi+aBxA312hcvwSYUW+9CeeAr0Q1vlOQzcGkhYutf4cmaGXWwh8KUayipw9+uUNER8Q0cOTNjVsieFU4nhgb2kGJVd0A=='
// }
```

### JavaScript 示例

```javascript
const { encryptRequest } = require("hejunjie-encrypted-request");

const pubKey = `-----BEGIN PUBLIC KEY-----
您的公钥，可以替换为读取pem文件等操作
-----END PUBLIC KEY-----`;

const options = {
  rsaPubKey: pubKey,
};

const data = { message: "Hello World" };
const encrypted = encryptRequest(data, options);

console.log(encrypted);
```

## API 参考

### `EncryptOptions`​

| 字段          | 类型   | 必需 | 描述     |
| ------------- | ------ | ---- | -------- |
| ​`rsaPubKey`​ | string | ✅   | RSA 公钥 |

### `encryptRequest(data, options)`​

- **参数**

  - ​`data`：`object`，要加密的请求数据
  - ​`options`：`EncryptOptions`，加密配置

- **返回**：加密后的请求对象：

```typescript
{
  timestamp: number,   // 当前秒级时间戳
  sign: string,        // MD5 签名
  en_data: string,     // AES 加密后的数据
  enc_payload: string  // RSA 加密的参与对称加密的 KEY
}
```

## 开发与构建

- TypeScript 源码位于 `src/`，构建后输出到 `dist/`。
- 构建命令：

```bash
npm run build
```

## 相关仓库

- PHP 解密端：[hejunjie/encrypted-request](https://github.com/zxc7563598/php-encrypted-request)
