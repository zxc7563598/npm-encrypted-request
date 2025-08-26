import { encryptRequest, EncryptOptions } from '../src/index.js';
const options: EncryptOptions = {
  appKey: "JzmiM5jHFlG8qdjb8nSKK58NmSLS2h4Z",
  aesKey: "hpTIDOsgBTJkBDol",
  aesIv: "5EMdiDp6AjwAmUoe",
  token: "tokentokentokentokentokentokentoken",
};

const data = { message: "Hello World" };

const encrypted = encryptRequest(data, options);
console.log("Encrypted request:", encrypted);
