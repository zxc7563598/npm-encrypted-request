import CryptoJS from "crypto-js";

function forgeBytesToWordArray(bytes: string) {
  const words: any = [];
  for (let i = 0; i < bytes.length; i++) {
    words[i >>> 2] |= (bytes.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
  }
  return CryptoJS.lib.WordArray.create(words, bytes.length);
}

export function aesEncrypt(data: object, key: string, iv: string): string {
  const text = JSON.stringify(data);
  const keyWA = forgeBytesToWordArray(key);
  const ivWA = forgeBytesToWordArray(iv);
  const encrypted = CryptoJS.AES.encrypt(text, keyWA, {
    iv: ivWA,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString(); // Base64
}
