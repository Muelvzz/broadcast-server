import { randomUUID } from "crypto"

export function connectedClient(ws, connectedCount, userList) {
  ws.id = randomUUID()
  ws.userName = `User ${connectedCount}`
  userList.push(ws.userName)

  return ws.userName
}