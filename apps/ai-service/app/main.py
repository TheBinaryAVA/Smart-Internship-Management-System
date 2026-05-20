from fastapi import FastAPI
from app.models import ResumeScoreRequest, ResumeScoreResponse
from app.scoring import score_resume

app = FastAPI(title="AI Resume Service", version="1.0.0")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/resume-score", response_model=ResumeScoreResponse)
def resume_score(payload: ResumeScoreRequest) -> ResumeScoreResponse:
    score, matched = score_resume(payload.resume_text, payload.role)
    summary = (
        f"Resume matched {len(matched)} core skills for role: {payload.role}."
    )
    return ResumeScoreResponse(
        score=score,
        summary=summary,
        matched_keywords=matched,
    )
