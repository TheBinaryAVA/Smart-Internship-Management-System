import { Provider } from "@nestjs/common";
import Redis from "ioredis";

export const REDIS_CLIENT = "REDIS_CLIENT";

export const RedisProvider: Provider = {
  provide: REDIS_CLIENT,
  useFactory: () => {
    const host = process.env.REDIS_HOST || "redis";
    const port = Number(process.env.REDIS_PORT || 6379);
    return new Redis({ host, port, lazyConnect: true });
  },
};
