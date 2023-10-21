import { Elysia } from "elysia";

const app = new Elysia()
  .ws("/ws", {
    message(ws, message) {
      console.log(message);
      ws.send({ message, date: new Date() });
    },
  })
  .listen(3000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
