from pydantic import BaseModel, Field


class ResumeScoreRequest(BaseModel):
    resume_text: str = Field(min_length=1)
    role: str = Field(default="Software Engineering Intern")


class ResumeScoreResponse(BaseModel):
    score: float
    summary: str
    matched_keywords: list[str]
