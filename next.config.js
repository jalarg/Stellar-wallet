require("dotenv").config();

/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    STELLAR_HORIZON_URL: process.env.STELLAR_HORIZON_URL,
  },
};
