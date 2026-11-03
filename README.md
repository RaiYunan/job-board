# Job Board

A full-stack job board where employers post openings and candidates search and apply.

> **Status:** early development. The backend is being set up first.

## Tech stack

| Layer    | Tech                                            |
| -------- | ----------------------------------------------- |
| Backend  | Node.js, Express 5, TypeScript (ESM)            |
| Database | Prisma ORM (planned)                            |
| Tooling  | tsx, ESLint, Prettier, Vitest, Zod              |
| Frontend | To be decided                                   |

## Project structure

```
job-board/
  server/    # Express + TypeScript API
  client/    # Frontend (coming later)
```

## Getting started

**Requirements:** Node.js 22 or newer (24 LTS recommended)

```bash
git clone https://github.com/RaiYunan/job-board.git
cd job-board/server
npm install
npm run dev
```

The server starts on `http://localhost:3000`. Check that it's running:

```bash
curl http://localhost:3000/health
# {"status":"ok"}
```

## Planned features

- [ ] User authentication (employers and candidates)
- [ ] Create, edit, and delete job postings
- [ ] Browse, search, and filter jobs
- [ ] Apply to jobs and track applications
- [ ] Employer dashboard for managing postings and applicants
- [ ] Database layer with Prisma

## License

Released under the [MIT License](LICENSE).
