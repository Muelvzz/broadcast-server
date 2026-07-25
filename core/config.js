import PromptSync from "prompt-sync"
import readline from "readline"

export const PORT = 8080
export const prompt = PromptSync({ sigint: true })
export const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})