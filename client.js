import { WebSocket } from "ws"
import { PORT, prompt } from "./core/config.js"
import { promptForMessage } from "./utils/promptForMessage.js"

const ws = new WebSocket(`ws://localhost:${PORT}`)

while (true) {

  const clientInput = prompt("")

  if (clientInput.trim().toLowerCase() === "broadcast-server connect") {

    ws.on("open", () => {
      console.log("Connected to the WebSocket server\n")
      promptForMessage(ws)
    })
    
    ws.on("message", (message) => {
      console.log(`Server: ${message}`)
    })
    
    ws.on("error", (error) => {
      console.error("WebSocket error: ", error)
    })
    
    ws.on("close", () => {
      console.log("Disconnected from the server")
      process.exit(0)
    })

  } else {

    console.log("Invalid input\n")

  }
}