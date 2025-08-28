import { aesEncrypt } from "./encryptor.js";
import { generateSign } from "./signer.js";
import forge from "node-forge";

/**
 * 随机生成 16 字节 AES key/IV
 *
 * @returns { key: string, iv: string }
 */
function generateRandomKeyIv() {
  const key = forge.random.getBytesSync(16);
  const iv = forge.random.getBytesSync(16);
  return { key, iv };
}

/**
 * 用 RSA 公钥加密
 *
 * @param key AES Key
 * @param iv AES IV
 * @param pubKeyPem RSA 公钥
 *
 * @returns
 */
function rsaEncrypt(key: string, iv: string, pubKeyPem: string): string {
  const pubKey = forge.pki.publicKeyFromPem(pubKeyPem);
  const payload = forge.util.encode64(key) + forge.util.encode64(iv);
  const encrypted = pubKey.encrypt(payload, "RSA-OAEP");
  return forge.util.encode64(encrypted);
}

export interface EncryptOptions {
  rsaPubKey: string;
}

export function encryptRequest(
  data: object,
  options: EncryptOptions
): Record<string, any> {
  const { key, iv } = generateRandomKeyIv();
  const timestamp = Math.floor(Date.now() / 1000);
  const sign = generateSign(
    forge.util.encode64(key) + forge.util.encode64(iv),
    timestamp
  );
  const en_data = aesEncrypt(data, key, iv);
  const enc_payload = rsaEncrypt(key, iv, options.rsaPubKey);
  return {
    timestamp,
    sign,
    en_data,
    enc_payload,
  };
}
