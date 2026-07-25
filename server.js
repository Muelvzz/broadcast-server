import { WebSocketServer } from "ws"

import { PORT, prompt } from "./core/config.js"

const wss = new WebSocketServer({ port: PORT })

console.log("Server initialized\n")

while (true) {

  const serverInput = prompt("")
  
  if (serverInput.trim().toLowerCase() === "broadcast-server start") {
    console.log("Broadcast Server started\n")
  
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
  
  } else if (serverInput.length === 0) {
  
    console.log("Server stop")
    process.exit(0)
  
  } else {

    console.log("Invalid input\n")

  }

}
