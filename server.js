import readline from "node:readline"

import { getTerminalInput } from "./utils/getTerminalInput.js"

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

r1.question("", (input) => {

  const parsedInput = getTerminalInput(input)
  console.log(parsedInput)
  r1.close()

})