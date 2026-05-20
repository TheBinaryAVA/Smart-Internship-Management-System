import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { InternshipsModule } from "./modules/internships/internships.module";
import { ApplicationsModule } from "./modules/applications/applications.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { ChatModule } from "./modules/chat/chat.module";
import { AiModule } from "./modules/ai/ai.module";
import { RedisProvider } from "./config/redis.provider";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri:
          config.get<string>("MONGO_URI") ||
          "mongodb://mongo:27017/smart_internship",
      }),
    }),
    AuthModule,
    UsersModule,
    InternshipsModule,
    ApplicationsModule,
    NotificationsModule,
    ChatModule,
    AiModule,
  ],
  providers: [RedisProvider],
})
export class AppModule {}
