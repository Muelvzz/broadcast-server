import { WebSocketServer } from "ws"

import { PORT } from "./core/config.js"

const wss = new WebSocketServer({ port: PORT })

console.log("Server started")

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

// How to create a server using WebSocket
//    1. Import the WebSocketServer library
//    2. Setup the port number
//    3. Setup the WebSocketServer
//    4. Create the WebSocketServer connection
//        a. Initialize the connection
//        b. create a function that receives the client request
//        a. create a function that closes the server