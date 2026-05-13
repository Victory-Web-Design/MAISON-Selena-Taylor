import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/** Lock `Turbopack` to this app when a parent folder (e.g. Desktop) also has a `package-lock.json`. */
const turbopackRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
  images: {
    /** Bypass `/_next/image` so dev / restricted networks never hang on optimizer fetches. */
    unoptimized: true,
  },
  /** 允许手机 / 局域网 IP 访问 dev 时的 HMR、字体等资源 */
  allowedDevOrigins: ["192.168.0.7", "127.0.0.1", "localhost"],
};

export default nextConfig;
