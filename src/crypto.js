"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require('crypto-js');
function hash160(buffer) {
    // const sha256 = CryptoJS.algo.SHA256.create();
    // const sha256Hash = sha256.update(buffer).finalize();
    // const RIPEMD160 = CryptoJS.RIPEMD160(sha256Hash);
    const sha256Hash = CryptoJS.SHA256(buffer).words;
    const RIPEMD160 = CryptoJS.RIPEMD160(sha256Hash);
    return RIPEMD160.words;
}
exports.hash160 = hash160;
function hmacSHA512(key, data) {
    const HmacSHA512 = CryptoJS.HmacSHA512(data, key);
    return HmacSHA512.words;
}
exports.hmacSHA512 = hmacSHA512;
// const createHash = require('create-hash');
// const createHmac = require('create-hmac');
// export function hash160(buffer: Buffer): Buffer {
//   const sha256Hash: Buffer = createHash('sha256')
//     .update(buffer)
//     .digest();
//   try {
//     return createHash('rmd160')
//       .update(sha256Hash)
//       .digest();
//   } catch (err) {
//     return createHash('ripemd160')
//       .update(sha256Hash)
//       .digest();
//   }
// }
// export function hmacSHA512(key: Buffer, data: Buffer): Buffer {
//   return createHmac('sha512', key)
//     .update(data)
//     .digest();
// }
