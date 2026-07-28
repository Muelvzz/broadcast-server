import { WebSocket } from "ws"
import { appendLog } from "./utils/appendLog.js"
import { prompt, displayMessage } from "./utils/prompt.js"

// create the socket client
const socket = new WebSocket("ws://localhost:8080")
let userName

// client is connected to the server
socket.on("open", () => {
  console.log("CONNECTED: ws://localhost:8080")
  console.log(appendLog("[SYSTEM]", "Tunnel Established"))
})

// client receives the message
socket.once("message", (data) => {
  const parsedData = JSON.parse(data.toString())

  // setting the username
  if (parsedData.type === "[INIT_USERNAME]") {
    userName = parsedData.username
    console.log("Username successfully set once: ", userName)
  }

  // receiving the message
  socket.on("message", (data) => {
    displayMessage(data.toString())
  })

  prompt(socket, userName)
})


// Client closes the connection
socket.on("close", () => {
  console.log("Connection closed.")
  process.exit(0)
})