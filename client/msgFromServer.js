export function msgFromServer(ws) {
  ws.on("message", (message) => {
    console.log(`Server: ${message}`)
  })
}