const ImageKit = require("@imagekit/nodejs");
const fs = require("fs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

module.exports = client;
