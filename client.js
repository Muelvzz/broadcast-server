import { WebSocket } from "ws"
import { PORT } from "./core/config.js"
import { promptForMessage } from "./utils/promptForMessage.js"

const ws = new WebSocket(`ws://localhost:${PORT}`)

ws.on("open", () => {
  console.log("Connected to the WebSocket server")
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