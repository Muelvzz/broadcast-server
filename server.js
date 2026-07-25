import { WebSocketServer } from "ws"

import { PORT, prompt } from "./core/config.js"

const wss = new WebSocketServer({ port: PORT })

console.log("Server initialized\n")
  
const serverInput = prompt("")

if (serverInput.trim().toLowerCase() === "broadcast-server start") {
  console.log("Broadcast Server started\n")

  wss.on("connection", (ws) => {
    console.log("New client connected");
  
    ws.on("message", (message) => {
      console.log(`Received: ${message}`)
    })
  
    ws.on("close", () => {
      console.log("Client disconnected")
    })
  })

}
