const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => { 
    console.log("socket.io connection", socket.id);
    
    socket.on("chat", (data) => { 
        io.sockets.emit("chat", data);
    });

    socket.on("typing", (data) => { 
        socket.broadcast.emit("typing",data);
    })
})

server.listen(3000, (data) => { 
    console.log(`listen 3000,${data}`);
});

app.use(express.static("public"));


