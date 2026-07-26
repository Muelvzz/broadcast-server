import { WebSocket } from "ws"
import { PORT, prompt } from "./core/config.js"
import { promptForMessage } from "./utils/promptForMessage.js"

import { connectToServer } from "./client/connectToServer.js"
import { msgFromServer } from "./client/msgFromServer.js"
import { errorSErver } from "./client/errorServer.js"
import { closeServer } from "./client/closeServer.js"

const ws = new WebSocket(`ws://localhost:${PORT}`)

const clientInput = prompt("")

if (clientInput.trim().toLowerCase() === "broadcast-server connect") {

  connectToServer(ws)
  msgFromServer(ws)
  errorSErver(ws)
  closeServer(ws)
  
}