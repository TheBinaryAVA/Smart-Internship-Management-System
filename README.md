# Smart Internship Platform

Production-ready starter monorepo for an AI-powered multi-tenant Internship and Talent Allocation SaaS platform.

## Stack

- **Frontend:** React, Vite, TypeScript, TailwindCSS, React Router, React Query
- **Backend:** NestJS, MongoDB, Redis, Socket.IO, JWT
- **AI Service:** FastAPI, PDF parsing stub, resume scoring
- **Infra:** Docker Compose, Nginx config, Kubernetes placeholder

## Quick Start

```bash
cd smart-internship-platform
cp .env.example .env
docker compose -f infra/docker-compose.yml up --build
```

## URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:3000/api |
| AI Service docs | http://localhost:8000/docs |
| AI health | http://localhost:8000/health |

## Test Auth Flow

1. Open http://localhost:5173/signup
2. Create account (email, password, tenant id)
3. You are redirected to dashboard
4. Create internships from dashboard

## Test Resume Scoring

Direct AI service:

```bash
curl -X POST http://localhost:8000/resume-score \
  -H "Content-Type: application/json" \
  -d "{\"resume_text\":\"Experienced in python react mongodb docker api\",\"role\":\"Software Engineering Intern\"}"
```

Via backend proxy:

```bash
curl -X POST http://localhost:3000/api/ai/resume-score \
  -H "Content-Type: application/json" \
  -d "{\"resume_text\":\"Experienced in python react mongodb docker api\"}"
```

## Project Structure

```
smart-internship-platform/
├── apps/
│   ├── frontend/
│   ├── backend/
│   └── ai-service/
├── packages/shared/
├── infra/
│   ├── docker-compose.yml
│   ├── nginx/
│   └── kubernetes/
├── README.md
└── .env.example
```
