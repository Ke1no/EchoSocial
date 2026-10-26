# NetworkAI

Course-aligned AI social-network project — **scaffold / work in progress**.

Go (`socialai`) · Gorilla Mux · Next.js · React · TypeScript · Tailwind CSS

## Current status

The provided course document currently reaches Lesson 30 (Go Handlers). This repository implements that local upload acknowledgement and provides a small Next.js UI shell based on the project overview.

| Included now | Planned later |
| --- | --- |
| `socialai` module; `model.Post`; `handler.InitRouter`; POST `/upload` | Signup, JWT login, persistent posts and ownership |
| Bounded JSON parsing, error responses and handler tests | Elasticsearch recent/personal search |
| Next.js development page and upload test form | OpenAI image generation; full feed/editor UI |
| No credentials required for the local demo | App Engine + GCE deployment |

**The upload endpoint only acknowledges the message. It does not save or publish a post, upload a file, authenticate a user or generate an image.** It listens on loopback by default. Do not deploy it as a production social service.

## Run locally

Prerequisites: Go 1.25+, Node 22.12+, npm.

```sh
cd backend
go mod download
go test ./...
go run .
```

In another terminal:

```sh
cd frontend
npm ci
npm run dev
```

Open http://localhost:3000. `/backend/upload` is proxied server-side to Go at `http://127.0.0.1:8080/upload`. If QuickBite is running on port 8080, stop it first or change Go's `LISTEN_ADDR` and the frontend `NETWORKAI_BACKEND_URL` together.

```sh
curl -X POST http://127.0.0.1:8080/upload -H 'Content-Type: application/json' -d '{"id":"demo-1","user":"demo","message":"Hello NetworkAI","url":"","type":"image"}'
```

Expected: `Post received: Hello NetworkAI`. No database write occurs.

See [development roadmap](docs/NEXT_STEPS.md), [course mapping](docs/COURSE_MAP.md) and [architecture](docs/ARCHITECTURE.md).
