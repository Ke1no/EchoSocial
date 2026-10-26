# Next steps: continue from the current course material

1. Run the Go service and test POST /upload in Postman or the frontend. It currently returns an acknowledgement without saving posts.
2. Add API paths and database implementations as subsequent course material becomes available. Do not assume features listed on a resume are already implemented.
3. Implement signup and JWT verification. Derive the user field from the verified identity instead of trusting a username in the request body.
4. Integrate Elasticsearch for recent and personal post searches. Define the primary storage design for accounts and posts, along with update and deletion rules.
5. Complete the Next.js feed, editor and authentication pages, adding shadcn/ui components as covered in the course.
6. Integrate OpenAI image generation on the server. Never place API keys in NEXT_PUBLIC variables. Add timeouts, error handling and usage limits.
7. Complete the local workflow before deploying to App Engine / GCE, then add a working demo and test results.

## Checklist
- [ ] Authentication and post ownership
- [ ] Persistence and retrieval
- [ ] AI generation and content editing
- [ ] Frontend state, errors and pagination
- [ ] Cloud deployment and cost review
