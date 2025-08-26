# npm-encrypted-request

<div align="center">
  <a href="./README.md">English</a>｜<a href="./README.zh-CN.md">简体中文</a>
  <hr width="50%"/>
</div>

A simple frontend encryption helper designed to work with the [hejunjie/encrypted-request](https://github.com/zxc7563598/php-encrypted-request) PHP package, enabling AES encryption of request parameters and generation of MD5 signatures on the frontend.

**This project has been parsed by Zread. If you need a quick overview of the project, you can click here to view it：[Understand this project](https://zread.ai/zxc7563598/npm-encrypted-request)**

## Features

- 🔐 AES-128-CBC data encryption
- ✍️ MD5 signature generation
- ⏰ Automatic timestamp generation (in seconds)
- 🎯 Optional token passthrough
- 📦 TypeScript support
- 🚀 Supports both ES Modules and CommonJS

## Installation

```bash
npm install hejunjie-encrypted-request
```

## Quick Start

### TypeScript Example

```typescript
import { encryptRequest, EncryptOptions } from "hejunjie-encrypted-request";

const options: EncryptOptions = {
  appKey: "your-app-key", // Signature key for API verification (32 characters, letters or digits)
  aesKey: "your-aes-key", // AES encryption key (16 characters)
  aesIv: "your-aes-iv", // AES encryption initialization vector (16 characters)
  token: "optional-token", // Optional authentication token, which can be used for user verification on the PHP side
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

### JavaScript Example

```javascript
const { encryptRequest } = require("hejunjie-encrypted-request");

const options = {
  appKey: "your-app-key", // Signature key for API verification (32 characters, letters or digits)
  aesKey: "your-aes-key", // AES encryption key (16 characters)
  aesIv: "your-aes-iv", // AES encryption initialization vector (16 characters)
  token: "optional-token", // Optional authentication token, which can be used for user verification on the PHP side
};

const data = { message: "Hello World" };
const encrypted = encryptRequest(data, options);

console.log(encrypted);
```

## API 参考

### `EncryptOptions`​

| Field      | Type   | Required | Description                                                                            |
| ---------- | ------ | -------- | -------------------------------------------------------------------------------------- |
| ​`appKey`​ | string | ✅       | Application key for signature generation (32 characters, letters or digits)            |
| ​`aesKey`​ | string | ✅       | AES encryption key (16 characters, letters or digits)                                  |
| ​`aesIv`​  | string | ✅       | AES initialization vector (16 characters, letters or digits)                           |
| ​`token`​  | string | ❌       | Optional authentication token, which can be used for user verification on the PHP side |

### `encryptRequest(data, options)`​

- **Parameters**

  - ​`data`：`object` — The request data to be encrypted
  - ​`options`：`EncryptOptions` — Encryption configuration

- **Returns**：The encrypted request object：

```typescript
{
  timestamp: number,  // Current timestamp (in seconds)
  sign: string,       // MD5 signature
  en_data: string,    // AES-encrypted data
  token?: string      // Optional token
}
```

## Notes

1. AES encryption uses **AES-128-CBC**; the key and IV must be exactly 16 bytes.
2. The frontend timestamp is in seconds, and the allowable time difference with the PHP backend is configurable.
3. Ensure the `appKey` appKey matches the PHP backend; otherwise, signature verification will fail.
4. The token is optional, and the PHP backend can decide whether to verify it based on whitelisted paths.

## Development & Build

- TypeScript source code is located in `src/` and outputs to `dist/` after building.
- Build command:

```bash
npm run build
```

## Related Repositories

- PHP Decryption Server：[hejunjie/encrypted-request](https://github.com/zxc7563598/php-encrypted-request)
