'use client'
import { useState, type FormEvent } from 'react'
import { acknowledgePost } from '@/lib/api'
export default function Home() {
  const [message, setMessage] = useState('Hello NetworkAI')
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true); setResult(''); setError('')
    try { setResult(await acknowledgePost({ id: 'demo-1', user: 'demo', message, url: '', type: 'image' })) }
    catch (e) { setError(e instanceof Error ? e.message : 'Request failed') }
    finally { setBusy(false) }
  }
  return <main><header><strong>Network<span>AI</span></strong><small>COURSE PROJECT / IN PROGRESS</small></header>
    <section className="hero"><p className="eyebrow">SOCIAL, WITH A LITTLE MORE POSSIBILITY</p><h1>A place for ideas.<br/><span>A foundation to build on.</span></h1><p>Go backend. Next.js frontend. Your next project starts here.</p></section>
    <div className="columns"><section className="panel"><p className="eyebrow">LESSON 30 · LIVE API TEST</p><h2>Send a test message</h2><p>This form tests the Go upload handler. It acknowledges your message without storing or publishing a post.</p><form onSubmit={submit}><label htmlFor="message">Message</label><textarea id="message" value={message} onChange={e => setMessage(e.target.value)} minLength={1} maxLength={2000} required rows={4}/><button disabled={busy || !message.trim()}>{busy ? 'Sending…' : 'Test /upload →'}</button></form>{result && <div role="status" className="result"><strong>API acknowledgement</strong><p>{result}</p><small>No post was saved.</small></div>}{error && <p role="alert" className="error">{error}</p>}</section>
    <aside className="panel"><p className="eyebrow">DEVELOPMENT ROADMAP</p><h2>What comes next</h2><ol><li><strong>Accounts & JWT</strong><span>Registration, login and verified ownership</span></li><li><strong>Posts & search</strong><span>Persistence and Elasticsearch queries</span></li><li><strong>AI-assisted editor</strong><span>Server-side image generation</span></li><li><strong>Cloud deployment</strong><span>App Engine + GCE</span></li></ol></aside></div><footer>Local development scaffold · No authentication or AI service is connected.</footer></main>
}
