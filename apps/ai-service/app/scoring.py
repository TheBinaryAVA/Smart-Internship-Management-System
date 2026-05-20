from typing import Tuple


def score_resume(resume_text: str, role: str) -> Tuple[float, list[str]]:
    keywords = ["python", "react", "node", "mongodb", "docker", "api"]
    lowered = resume_text.lower()
    matched = [k for k in keywords if k in lowered]
    base = min(len(matched) / len(keywords), 1.0)
    role_boost = 0.1 if "intern" in role.lower() else 0.0
    score = min((base + role_boost) * 100, 100)
    return round(score, 2), matched
