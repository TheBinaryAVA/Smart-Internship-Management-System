import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from "@nestjs/websockets";

@WebSocketGateway({ cors: { origin: "*" } })
export class ChatGateway {
  @SubscribeMessage("ping")
  handlePing(@MessageBody() body: string) {
    return { event: "pong", data: body || "ok" };
  }
}
