import { WebSocketServer } from "ws"

import { PORT, prompt } from "./core/config.js"

const wss = new WebSocketServer({ port: PORT })

console.log("Server initialized")

const startInput = prompt("")
console.log(startInput)

if (startInput.trim().toLowerCase() === "broadcast-server start") {
  console.log("Broadcast Server started")

  wss.on("connection", (ws) => {
    console.log("New client connected");
    ws.send("Welcome to the 'broadcast-server' Server")
  
    ws.on("message", (message) => {
      console.log(`Received: ${message}`)
      ws.send(`Server received: ${message}`)
    })
  
    ws.on("close", () => {
      console.log("Client disconnected")
    })
  })

} else {

  console.log("Server stop")
  process.exit(0)

}
