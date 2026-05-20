import { IsString } from "class-validator";

export class CreateInternshipDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;
}
