// import modules
const { Socket } = require("dgram")
const express  = require("express")
const {createServer} = require("http")
const {Server} = require("socket.io")

//events to use
const EVENTS = {
    connection: "connection",
    CLIENT:{
        JOIN_ROOM: "JOIN_ROOM",
        SEND_MESSAGE: "SEND_MESSAGE"
    },
    SERVER:{
        JOINED_ROOM: "JOINED_ROOM",
        MESSAGE_SENT:"MESSAGE_SENT"
    }
}


//create express server
const app = express()
const httpServer = createServer(app)



//create the socket server
const io = new Server(httpServer, {
    cors:{
        origin: "http://localhost:3000",
        credentials: true,
    }
})

   
io.on(EVENTS.connection, (socket)=>{
    console.log(socket.id);
 
})


app.get("/", (req, res)=>{
    res.send("Socket Server is up and running")
})

httpServer.listen(4000,"localhost", ()=>{
    console.log(`socket server is running`);
 
    
    
}) 
