
export function close(ws) {
  ws.on("close", () => {
    console.log("Client disconnected")
  })
}