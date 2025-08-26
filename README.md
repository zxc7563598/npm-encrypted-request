# npm-encrypted-request

一个简单的前端加密助手，用于与 [hejunjie/encrypted-request](https://github.com/hejunjie/encrypted-request) PHP 包配合使用。

## 功能特性

- 🔐 AES 加密数据
- ✍️ MD5 签名生成
- ⏰ 自动时间戳生成
- 🎯 支持可选 token
- 📦 TypeScript 支持
- 🚀 ES 模块支持

## 安装

```bash
npm install hejunjie-encrypted-request
```

## 使用方法

### 基本用法

```typescript
import { encryptRequest, EncryptOptions } from 'hejunjie-encrypted-request';

const options: EncryptOptions = {
  appKey: "your-app-key",
  aesKey: "your-aes-key",
  aesIv: "your-aes-iv",
  token: "optional-token" // 可选
};

const data = { message: "Hello World" };
const encrypted = encryptRequest(data, options);

console.log(encrypted);
// 输出:
// {
//   timestamp: 1756188634,
//   sign: '6a9c8f16757de0f42bd97173eda1393b',
//   en_data: 'a69W6h7/uEQrCyY3wlkwfNxofq75/xgKK8TC8V5zTshrHN7XddY7qSJRmrU1rn0f84RNJ6yi3nj+gTfMHMlXMg==',
//   token: 'optional-token'
// }
```

### 无 token 使用

```typescript
const options: EncryptOptions = {
  appKey: "your-app-key",
  aesKey: "your-aes-key",
  aesIv: "your-aes-iv"
  // 不设置 token
};

const encrypted = encryptRequest(data, options);
// token 字段将为 undefined
```

## API 参考

### EncryptOptions

| 字段 | 类型 | 必需 | 描述 |
|------|------|------|------|
| `appKey` | string | ✅ | 应用密钥，用于生成签名 |
| `aesKey` | string | ✅ | AES 加密密钥 |
| `aesIv` | string | ✅ | AES 加密向量 |
| `token` | string | ❌ | 可选的认证令牌 |

### encryptRequest(data, options)

加密请求数据并生成签名。

**参数:**
- `data: object` - 要加密的数据对象
- `options: EncryptOptions` - 加密选项

**返回值:**
```typescript
{
  timestamp: number;    // Unix 时间戳（秒）
  sign: string;         // MD5 签名
  en_data: string;      // AES 加密后的数据（Base64）
  token?: string;       // 可选的令牌
}
```

## 开发

### 安装依赖

```bash
npm install
```

### 构建

```bash
npm run build
```

### 开发模式（监听文件变化）

```bash
npm run dev
```

### 运行测试

```bash
# 运行基本测试
npm test

# 运行完整测试
npm run test:full

# 监听模式测试
npm run test:watch
```

### 清理构建文件

```bash
npm run clean
```

## 技术细节

- **加密算法**: AES-CBC 模式，PKCS7 填充
- **签名算法**: MD5
- **时间戳**: Unix 时间戳（秒）
- **输出格式**: Base64 编码

## 许可证

MIT License

## 作者

hejunjie
