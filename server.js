import { WebSocketServer, WebSocket } from "ws"
import { appendLog } from "./utils/appendLog.js"
import { randomUsername } from "./utils/randomUsername.js"

// create the server socket
const wss = new WebSocketServer({ port:8080 })
const activeUsernames = []

// Connection event
wss.on("connection", (socket, request) => {
  const ip = request.socket.remoteAddress
  
  const userName = randomUsername(activeUsernames)
  activeUsernames.push(userName)

  appendLog("[SYSTEM]", `Client ${ip} connected as ${userName}`)

  console.log("Connected users: ", activeUsernames)
})