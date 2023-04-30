// const pinataApiKey = "1f9b86f0be256b9d8e24";
// const pinataSecretApiKey = "YOURS01fad4b0ceca6d66c6fa2193b91cea549dceb308cb4d11135a5d831f85c81986ECRETKEY";
// const axios = require("axios");
// const fs = require("fs");
// const FormData = require("form-data");
// const pinFileToIPFS = async () => {
//   const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
//   let data = new FormData();
//   data.append("file", fs.createReadStream("./pathtoyourfile.png"));
//   const res = await axios.post(url, data, {
//     maxContentLength: "Infinity", 
//     headers: {
//       "Content-Type": `multipart/form-data; boundary=${data._boundary}`
//       pinata_api_key: pinataApiKey, 
//       pinata_secret_api_key: pinataSecretApiKey,
//     },
//   });
//   console.log(res.data);
// };
// pinFileToIPFS();