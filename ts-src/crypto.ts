const CryptoJS = require('crypto-js');

export function hash160(buffer: Buffer): Buffer {
  const sha256 = CryptoJS.algo.SHA256.create();
  const sha256Hash = sha256.update(buffer).finalize();
  return CryptoJS.RIPEMD160(sha256Hash);
}

export function hmacSHA512(key: Buffer, data: Buffer): Buffer {
  return CryptoJS.HmacSHA512(data, key);
}


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
