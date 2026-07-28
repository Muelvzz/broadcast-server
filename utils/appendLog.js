// function for formatting client and server message
export const appendLog = (label, message) => {
  const entry = `${new Date().toLocaleTimeString()}, ${label} ${message}\n`
  return entry
}