import { encryptRequest, EncryptOptions } from "../src/index.js";

const pubKey: string = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvsu8OaVsMQ6bYZBvN8tN
swhxRB5giPfMH7es3VqUVBZe/mBivLRGrNLr0FQx4HclfLpw96zh68FXMBfo8ZjF
vBQxdfPlvRUiKfmXAGHDgv6pQBSnSE+WNBDgYEqOA9qYYpQSgNqR5vib76dkpwry
ci43/RqKdSa68RD694jumdM5Uv1ZZIsboEn3rq+FhPwnz1c/0d6J/SroXwHQZpKf
muYmbLtd8MKtIuLHXOX5Uq3AzECEydGcIJnlMhsbpzrStXdSLl+FYXuGHjbSo9x+
Fir3bpaB/+0DJaB63/7R6hI/WVnRXv0HI+Pu1+VgSyiTxOriL85tkt+1KdXZdvqL
xwIDAQAB
-----END PUBLIC KEY-----`;

const options: EncryptOptions = {
  rsaPubKey: pubKey,
};

const data = { message: "Hello World" };

const payload = encryptRequest(data, options);

console.log(payload);
