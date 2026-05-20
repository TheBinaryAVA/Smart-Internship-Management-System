import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type InternshipDocument = HydratedDocument<Internship>;

@Schema({ timestamps: true })
export class Internship {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  description!: string;

  @Prop({ required: true })
  tenantId!: string;
}

export const InternshipSchema = SchemaFactory.createForClass(Internship);
