import WebSocket from "ws"

const socket = new WebSocket(`ws://localhost:3000`)

socket.on("open", () => {
  console.log("Connected to server")
  socket.send("Hello everyone")
})

socket.on("message", (event) => {
  console.log("Message: ", event.data)
})
