import { WebSocket, WebSocketServer } from "ws"

const server = new WebSocketServer({ port: 3000 })

server.on("connection", (socket) => {
  console.log("A new user is connected")

  socket.on("message", (message) => {
    const text = message.toString()
    console.log("Received: ", text)

    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) client.send(text)
    })
  })
})