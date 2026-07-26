export function msgToClient(ws) {
  ws.on("message", (message) => {
    console.log(`Received: ${message}`)
  })
}