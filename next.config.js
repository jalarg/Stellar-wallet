require("dotenv").config();

/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    STELLAR_HORIZON_URL: process.env.NEXT_PUBLIC_STELLAR_HORIZON_URL,
    FRIENDBOT_URL: process.env.FRIENDBOT_URL,
  },
};
