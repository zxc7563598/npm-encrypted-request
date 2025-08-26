# npm-encrypted-request

<div align="center">
  <a href="./README.md">English</a>｜<a href="./README.zh-CN.md">简体中文</a>
  <hr width="50%"/>
</div>

一个简单的前端加密助手，用于与 [hejunjie/encrypted-request](https://github.com/zxc7563598/php-encrypted-request) PHP 包配合使用，实现前端请求参数的 AES 加密与 MD5 签名生成。

**本项目已经经由 Zread 解析完成，如果需要快速了解项目，可以点击此处进行查看：[了解本项目](https://zread.ai/zxc7563598/npm-encrypted-request)**

## 功能特性

- 🔐 AES-128-CBC 加密数据
- ✍️ MD5 签名生成
- ⏰ 自动时间戳生成（秒级）
- 🎯 可选 token 透传
- 📦 TypeScript 支持
- 🚀 支持 ES 模块与 CommonJS

## 安装

```bash
npm install hejunjie-encrypted-request
```

## 快速使用

### TypeScript 示例

```typescript
import { encryptRequest, EncryptOptions } from "hejunjie-encrypted-request";

const options: EncryptOptions = {
  appKey: "your-app-key", // 签名密钥，用于接口签名校验（32位字母或数字）
  aesKey: "your-aes-key", // AES 加密的密钥（16位）
  aesIv: "your-aes-iv", // AES 加密的初始化向量（16位）
  token: "optional-token", // 可选的认证令牌，PHP 端可用于用户验证
};

const data = { message: "Hello World" };
const encrypted = encryptRequest(data, options);

console.log(encrypted);
// {
//   timestamp: 1756188634,
//   sign: '6a9c8f16757de0f42bd97173eda1393b',
//   en_data: 'a69W6h7/uEQrCyY3wlkwfNxofq75/xgKK8TC8V5zTshrHN7XddY7qSJRmrU1rn0f84RNJ6yi3nj+gTfMHMlXMg==',
//   token: 'optional-token'
// }
```

### JavaScript 示例

```javascript
const { encryptRequest } = require("hejunjie-encrypted-request");

const options = {
  appKey: "your-app-key", // 签名密钥，用于接口签名校验（32位字母或数字）
  aesKey: "your-aes-key", // AES 加密的密钥（16位）
  aesIv: "your-aes-iv", // AES 加密的初始化向量（16位）
  token: "optional-token", // 可选的认证令牌，PHP 端可用于用户验证
};

const data = { message: "Hello World" };
const encrypted = encryptRequest(data, options);

console.log(encrypted);
```

## API 参考

### `EncryptOptions`​

| 字段       | 类型   | 必需 | 描述                                      |
| ---------- | ------ | ---- | ----------------------------------------- |
| ​`appKey`​ | string | ✅   | 应用密钥，用于生成签名（32 位字母或数字） |
| ​`aesKey`​ | string | ✅   | AES 加密密钥（16 位字母或数字）           |
| ​`aesIv`​  | string | ✅   | AES 初始化向量（16 位字母或数字）         |
| ​`token`​  | string | ❌   | 可选的认证令牌，PHP 端可用于用户验证      |

### `encryptRequest(data, options)`​

- **参数**

  - ​`data`：`object`，要加密的请求数据
  - ​`options`：`EncryptOptions`，加密配置

- **返回**：加密后的请求对象：

```typescript
{
  timestamp: number,  // 当前秒级时间戳
  sign: string,       // MD5 签名
  en_data: string,    // AES 加密后的数据
  token?: string      // 可选 token
}
```

## 注意事项

1. AES 加密使用 **AES-128-CBC**，密钥与向量需严格为 16 字节。
2. 前端时间戳为秒级，与 PHP 后端默认时间差允许范围可配置。
3. 确保 `appKey` 与 PHP 后端一致，否则签名校验会失败。
4. token 为可选字段，PHP 端可根据白名单路径决定是否校验。

## 开发与构建

- TypeScript 源码位于 `src/`，构建后输出到 `dist/`。
- 构建命令：

```bash
npm run build
```

## 相关仓库

- PHP 解密端：[hejunjie/encrypted-request](https://github.com/zxc7563598/php-encrypted-request)
