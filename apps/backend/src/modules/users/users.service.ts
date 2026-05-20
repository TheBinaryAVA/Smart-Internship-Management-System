import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./user.schema";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  create(email: string, passwordHash: string, tenantId: string) {
    return this.userModel.create({ email, passwordHash, tenantId });
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
}
