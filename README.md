## WebSocket Server Project using ws library

### About the project

This project is a CLI WebSocket server that generates random usernames to clients upon connection. The server handles client connections, broadcasts messages, and ensures each client has a unique temporary username.

This project is from the project guide by roadmapsh https://roadmap.sh/projects/broadcast-server

---

### Features

- **Temporary Username Assignment:** Every client that is connected to the server is being given an immediate username. The created username will follow the format of _User[random_number]_
- **Broadcast Messaging:** Messages sent by any client are broadcasted to all other connected clients, prefixed with the sender's username.
- **Graceful error handlings:** Client disconnections, and sudden server shutdown will be handled gracefully.

---

### How to install

```
git clone https://github.com/Muelvzz/broadcast-server
cd broadcast-server
```

**How to install the dependencies**

```
npm install
```

---

### How to start the Server

Start the Server:

```
npm run server
```

Join as a Client:

```
npm run client
```

_How to exit the connection as a Client:_

```
exit
```
