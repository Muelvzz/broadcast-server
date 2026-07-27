// function for generating random Username with ID's
export function randomUsername(listOfUsername) {
  let userName

  do {
    const index = Math.floor(Math.random() * 9999999)
    userName = `User${index}`
  } while (listOfUsername.includes(userName))

  return userName
}