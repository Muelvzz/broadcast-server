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

  console.log("---------------------")
  console.log(appendLog("[SYSTEM]", `New user connected as ${name}`))
  console.log(appendLog("[SYSTEM]", `List of connected clients: ${activeUsernames}`))

  // Server sends the username
  socket.send(JSON.stringify({
    type: "[INIT_USERNAME]",
    username: name
  }))

  // Server receives the message
  socket.on("message", (data) => {
    const parsedData = data.toString()
    
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(parsedData)
      }
    })
  })

  // Closed event
  socket.on("close", () => {
    activeUsernames = activeUsernames.filter(name => name !== socket.userName)
    console.log("---------------------")
    console.log(appendLog("[SYSTEM]", `${name} is disconnected`))

    if (activeUsernames.length === 0) {
      console.log(appendLog("[SYSTEM]", "List of connected clients: None"))
    } else {
      console.log(appendLog("[SYSTEM]", `List of connected clients: ${activeUsernames}`))
    }
  })

  // Error event
  socket.on("error", (error) => {
    console.log(appendLog("[SYSTEM]", `Server error: ${error}`))
  })
})
