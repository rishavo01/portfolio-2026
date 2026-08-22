# Portfolio — Rishav Kumar Singh

Two independent projects, each with its own dependencies and dev server:

```
frontend/   React + TypeScript + Vite site
backend/    Express API that emails contact-form submissions via Gmail SMTP
```

They talk over HTTP only (`frontend` calls `backend`'s `/api/contact`) — neither depends on the other to start.

## Run locally

```bash
# Terminal 1 — frontend (http://localhost:5173)
cd frontend
npm install
npm run dev

# Terminal 2 — backend (http://localhost:5000)
cd backend
npm install
npm run dev
```

See [frontend/README.md](frontend/README.md) for the site itself, and [backend/.env.example](backend/.env.example) for the contact-form API's required environment variables (Gmail App Password setup included).
