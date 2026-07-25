import { WebSocketServer } from "ws"
import { randomUUID } from "crypto"

import { PORT, prompt } from "./core/config.js"

const wss = new WebSocketServer({ port: PORT })
let connectedCount = 0
let userList = []

console.log("Server initialized\n")
  
const serverInput = prompt("")

if (serverInput.trim().toLowerCase() === "broadcast-server start") {

  console.log("Broadcast Server started\n")

  wss.on("connection", (ws) => {
    connectedCount++

    ws.id = randomUUID()
    ws.userName = `User ${connectedCount}`
    userList.push(ws.userName)

    console.log(`New client connected as ${ws.userName}`);
  
    ws.on("message", (message) => {
      console.log(`Received: ${message}`)
    })
  
    ws.on("close", () => {
      console.log("Client disconnected")
    })
  })

}
