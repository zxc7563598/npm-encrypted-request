import CryptoJS from "crypto-js";

export function generateSign(appKey: string, timestamp: number): string {
  return CryptoJS.MD5(appKey + timestamp).toString();
}
