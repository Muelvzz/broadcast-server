import { promptForMessage } from "../utils/promptForMessage.js";

export function connectToServer(ws) {
  ws.on("open", () => {
    console.log("Connected to the WebSocket server")
    promptForMessage(ws)
  })
}