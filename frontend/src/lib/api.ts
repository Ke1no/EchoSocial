import type { Post } from './types'
export async function acknowledgePost(post: Post): Promise<string> {
  const response = await fetch('/backend/upload', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(post), signal: AbortSignal.timeout(15000) })
  if (!response.ok) throw new Error(`Upload test failed (${response.status}). Check the Go server and request.`)
  return response.text()
}
