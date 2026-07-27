import { WebSocket } from "ws"
import { appendLog } from "./utils/appendLog.js"

// create the socket client
const socket = new WebSocket("ws://localhost:8080")

// client is connected to the server
socket.on("open", () => {
  console.log("CONNECTED: ws://localhost:8080")
  appendLog("[SYSTEM]", "Tunnel Established")
})