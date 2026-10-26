# Architecture

Current: Next.js upload form → same-origin `/backend/upload` rewrite → Go Gorilla Mux → bounded JSON decoder → plaintext acknowledgement.

Planned: Next.js feed/editor/auth → Go handlers → JWT middleware → post/search/image service adapters. Elasticsearch will serve recent/personal search. Provider keys remain server-side. Go is planned for App Engine; Elasticsearch for GCE.

Keep the course `socialai` module and `model` / `handler` structure. Add packages as later lessons define them. Never treat the unauthenticated `Post.User` demo field as proof of identity. The current handler does not fetch the supplied URL, store data or execute user text.
