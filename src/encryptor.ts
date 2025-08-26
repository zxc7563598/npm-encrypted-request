import CryptoJS from "crypto-js";

export function aesEncrypt(data: object, key: string, iv: string): string {
  const text = JSON.stringify(data);
  const encrypted = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}
