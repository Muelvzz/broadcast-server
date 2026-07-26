export function errorSErver(ws) {
  ws.on("error", (error) => {
    console.error("WebSocket error: ", error)
  })
}