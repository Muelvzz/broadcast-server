import { WebSocketServer, WebSocket } from "ws"
import { appendLog } from "./utils/appendLog.js"
import { randomUsername } from "./utils/randomUsername.js"

// create the server socket
const wss = new WebSocketServer({ port:8080 })
let activeUsernames = []

// Connection event
wss.on("connection", (socket, request) => {
  const ip = request.socket.remoteAddress
  
  const name = randomUsername(activeUsernames)
  activeUsernames.push(name)
  socket.userName = name

  // Server sends the username
  socket.send(JSON.stringify({
    type: "[INIT_USERNAME]",
    username: name
  }))

  // Closed event
  socket.on("close", (ws) => {
    activeUsernames = activeUsernames.filter(name => name !== socket.userName)
    console.log(appendLog("[SYSTEM]", `${name} is disconnected`))
  })
})
