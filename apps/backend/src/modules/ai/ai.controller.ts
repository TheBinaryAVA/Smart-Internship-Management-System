import { Body, Controller, Post } from "@nestjs/common";

@Controller("ai")
export class AiController {
  @Post("resume-score")
  async resumeScore(
    @Body() body: { resume_text: string; role?: string },
  ) {
    const baseUrl = process.env.AI_SERVICE_URL || "http://ai-service:8000";
    const response = await fetch(`${baseUrl}/resume-score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        resume_text: body.resume_text,
        role: body.role || "Software Engineering Intern",
      }),
    });

    if (!response.ok) {
      throw new Error("AI service request failed");
    }

    return response.json();
  }
}
