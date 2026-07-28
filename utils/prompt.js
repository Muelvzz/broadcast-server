import readline from "readline"
import { appendLog } from "./appendLog.js"
import { WebSocket } from "ws"

// setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export function displayMessage(msg) {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);

  console.log(msg);

  process.stdout.write("> ");
}

export function prompt(socket, userName) {
  rl.question("> ", (input) => {
    const trimmedInput = input.trim().toLowerCase()

    if (trimmedInput === "exit") {
      console.log("Disconnecting...")
      rl.close()
      socket.close()
      return
    }

    if (trimmedInput.length > 0) {
      socket.send(appendLog(`[${userName}]`, trimmedInput))
    }

    prompt(socket, userName)
  })

}