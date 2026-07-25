import { r1 } from "../core/config.js";

export function promptForMessage(ws) {
  r1.question("Enter a message: ", (message) => {
    if (message.toLowerCase() === "exit") {
      ws.close()
      r1.close()
      return
    }
    ws.send(message)
    promptForMessage()
  })
}