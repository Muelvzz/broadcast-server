import { WebSocketServer, WebSocket } from "ws"
import { appendLog } from "./utils/appendLog.js"

// create the server socket
const wss = new WebSocketServer({ port:8080 })

wss.on("connection", (socket, request) => {
  const ip = request.socket.remoteAddress
  appendLog("[SYSTEM]", `Client ${ip} is connected`)
})