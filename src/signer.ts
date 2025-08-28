import CryptoJS from "crypto-js";

export function generateSign(appKey: string, timestamp: number): string {
  return CryptoJS.MD5(CryptoJS.MD5(appKey).toString() + timestamp).toString();
}
