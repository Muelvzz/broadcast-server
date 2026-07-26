import { WebSocketServer } from "ws"

import { PORT, prompt } from "./core/config.js"

import { connectedClient } from "./server/connectedClient.js"
import { msgToClient } from "./server/msgToClient.js"
import { close } from "./server/close.js"

const wss = new WebSocketServer({ port: PORT })
let connectedCount = 0
let userList = []

console.log("Server initialized\n")
  
const serverInput = prompt("")

if (serverInput.trim().toLowerCase() === "broadcast-server start") {

  console.log("Broadcast Server started\n")

  wss.on("connection", (ws) => {
    connectedCount++

    const newClient = connectedClient(ws, connectedCount, userList)
    console.log(`New client connected as ${newClient}`);

    msgToClient(ws)
    close(ws)

  })

}
