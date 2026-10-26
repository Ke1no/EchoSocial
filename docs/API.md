# Implemented development API

POST `/upload`, JSON fields: `id`, `user`, `message`, `url`, `type`.
Success: 200 text/plain `Post received: <message>` followed by a newline.
Malformed/extra JSON or empty/oversize message: 400. Body over 64 KiB: 413. Unsupported content type: 415. Other methods on the route: 405.

GET `/health`: 200 with scaffold status.

No login, post persistence, search, AI or authorization API is implemented. The Next.js `/backend/*` prefix is a development proxy; Go paths do not include it.
