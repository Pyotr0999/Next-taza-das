import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const NextConfig = {
  // Անջատում է Turbopack-ը development-ում
  experimental: {
    turbo: false,
  },
};

module.exports = NextConfig;
