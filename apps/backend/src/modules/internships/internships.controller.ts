import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateInternshipDto } from "./dto";
import { InternshipsService } from "./internships.service";

@Controller("internships")
@UseGuards(JwtAuthGuard)
export class InternshipsController {
  constructor(private readonly internshipsService: InternshipsService) {}

  @Get()
  list(@Req() req: { user: { tenantId: string } }) {
    return this.internshipsService.list(req.user.tenantId);
  }

  @Post()
  create(
    @Body() dto: CreateInternshipDto,
    @Req() req: { user: { tenantId: string } },
  ) {
    return this.internshipsService.create(
      dto.title,
      dto.description,
      req.user.tenantId,
    );
  }
}
