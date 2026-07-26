export function closeServer(ws) {
  ws.on("close", () => {
    console.log("Disconnected from the server")
    process.exit(0)
  })
}