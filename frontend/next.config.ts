import type { NextConfig } from 'next'
const backend = process.env.NETWORKAI_BACKEND_URL || 'http://127.0.0.1:8080'
const config: NextConfig = {
  async rewrites() { return [{ source: '/backend/:path*', destination: `${backend}/:path*` }] },
}
export default config
