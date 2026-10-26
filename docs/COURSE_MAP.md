# Course alignment

Source: user-provided [September 2026 Project Course Archive 2 (NetworkAI)](https://docs.google.com/document/d/1s6NmhrRue31JVLkQzwpn_ZFW-_ctMEkPcCBRmvNiyIY/edit), read 2026-10-26.

The readable document contains Lessons 23, 25, 29 and 30. Later implementation lessons were not present.

| Section | Used here |
| --- | --- |
| Project introduction | Target Next.js/React/TypeScript/Tailwind/shadcn, Go/JWT, Elasticsearch, OpenAI, App Engine/GCE architecture |
| Lesson 23 / 25 | Go language foundation |
| Lesson 29 | Environment and GCE setup retained as deployment notes, not executed |
| Lesson 30 | `socialai`, `main.go`, `model/model.go`, `handler/post.go`, `handler/router.go`, Gorilla Mux, POST `/upload` |

Changes around the lesson example: malformed JSON returns an error instead of panic; body size is limited; empty/oversize messages are rejected; the HTTP server has timeouts and defaults to loopback.
The Next.js screen is a newly authored scaffold, not a claim that a frontend lesson was present. Acknowledgement text and the Post JSON field names match the lesson.
The overview names an OpenAI image model; no provider is called and no model availability is assumed here. Select and verify a model when integrating the provider.
