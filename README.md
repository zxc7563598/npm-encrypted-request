# npm-encrypted-request

<div align="center">
  <a href="./README.md">English</a>｜<a href="./README.zh-CN.md">简体中文</a>
  <hr width="50%"/>
</div>

A simple frontend encryption helper designed to work with the [hejunjie/encrypted-request](https://github.com/zxc7563598/php-encrypted-request) PHP package, enabling AES encryption of frontend request parameters and dynamic MD5 signature generation.

**This project has been analyzed and summarized by Zread. To quickly understand it, you can view it here:** **[Learn About This Project](https://zread.ai/zxc7563598/npm-encrypted-request)**

## Features

- ♾️ Hybrid encryption: AES key is generated randomly; frontend only needs to configure the public key
- 🔐 AES-128-CBC encryption with automatically generated keys (not stored)
- ✍️ Dynamic MD5 signature generation
- 📦 TypeScript support
- 🚀 Supports both ES Modules and CommonJS
- 🧠 Minimal code changes required; paired PHP package can securely transmit data without understanding the internal principles

## Installation

```bash
npm install hejunjie-encrypted-request
```

## Quick Start

### TypeScript Example

```typescript
import { encryptRequest, EncryptOptions } from "hejunjie-encrypted-request";

const pubKey: string = `-----BEGIN PUBLIC KEY-----
Your public key here, can also read from a PEM file
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

### JavaScript Example

```javascript
const { encryptRequest } = require("hejunjie-encrypted-request");

const pubKey = `-----BEGIN PUBLIC KEY-----
Your public key here, can also read from a PEM file
-----END PUBLIC KEY-----`;

const options = {
  rsaPubKey: pubKey,
};

const data = { message: "Hello World" };
const encrypted = encryptRequest(data, options);

console.log(encrypted);
```

## API Reference

### `EncryptOptions`​

| Field         | Type   | Required | Description    |
| ------------- | ------ | -------- | -------------- |
| ​`rsaPubKey`​ | string | ✅       | RSA public key |

### `encryptRequest(data, options)`​

- **Parameters**:

  - ​`data`: `object` – the request data to encrypt
  - ​`options`: `EncryptOptions` – encryption configuration

- **Returns**: Encrypted request object:

```typescript
{
  timestamp: number,   // current timestamp in seconds
  sign: string,        // MD5 signature
  en_data: string,     // AES encrypted data
  enc_payload: string  // RSA-encrypted key used for AES
}
```

## Development & Build

- TypeScript source code is in `src/`; built files are output to `dist/`.
- Build command:

```bash
npm run build
```

## Related Repository

- PHP decryption backend: [hejunjie/encrypted-request](https://github.com/zxc7563598/php-encrypted-request)
