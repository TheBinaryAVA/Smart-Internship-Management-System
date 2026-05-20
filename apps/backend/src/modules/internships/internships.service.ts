import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Internship, InternshipDocument } from "./internship.schema";

@Injectable()
export class InternshipsService {
  constructor(
    @InjectModel(Internship.name)
    private model: Model<InternshipDocument>,
  ) {}

  create(title: string, description: string, tenantId: string) {
    return this.model.create({ title, description, tenantId });
  }

  list(tenantId: string) {
    return this.model.find({ tenantId }).sort({ createdAt: -1 }).exec();
  }
}
