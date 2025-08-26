import { aesEncrypt } from "./encryptor.js";
import { generateSign } from "./signer.js";

export interface EncryptOptions {
  appKey: string;
  aesKey: string;
  aesIv: string;
  token?: string;
}

export function encryptRequest(
  data: object,
  options: EncryptOptions
): Record<string, any> {
  const timestamp = Math.floor(Date.now() / 1000);
  const sign = generateSign(options.appKey, timestamp);
  const en_data = aesEncrypt(data, options.aesKey, options.aesIv);
  if (options.token) {
    return {
      timestamp,
      sign,
      en_data,
      token: options.token,
    };
  } else {
    return {
      timestamp,
      sign,
      en_data,
    };
  }
}
