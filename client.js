import { WebSocket } from "ws"
import { appendLog } from "./utils/appendLog.js"

// create the socket client
const socket = new WebSocket("ws://localhost:8080")
let userName

// client is connected to the server
socket.on("open", () => {
  console.log("CONNECTED: ws://localhost:8080")
  console.log(appendLog("[SYSTEM]", "Tunnel Established"))
  
})

// client receives a message
socket.once("message", (data) => {
  const parsedData = JSON.parse(data.toString())
  if (parsedData.type === "[INIT_USERNAME]") {
    userName = parsedData.username
    console.log("Username successfully set once: ", userName)
  }
})