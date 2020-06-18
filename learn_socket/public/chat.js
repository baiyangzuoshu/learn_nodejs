var socket = io.connect("http://localhost:3000");

var message = document.getElementById("message");
var handle = document.getElementById("handle");
var btn = document.getElementById("send");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");

btn.addEventListener("click", () => { 
    socket.emit("chat", {
        message:message.value,
        handle: handle.value
    });
    message.value = "";
})

socket.on("chat", (data) => {
    feedback.innerHTML = "";
    output.innerHTML+=`<p><strong>${data.handle}:${data.message}</strong></p>`
})

message.addEventListener("keypress", () => { 
   //socket.emit("typing", handle.value); 
})

socket.on("typing", (data) => { 
    feedback.innerHTML=`<p><em>${data}正在输入...</em></p>`
})

document.onkeypress = function (e) { 
    console.log(e.target.id);
    if (e.target.id == "message") { 
        socket.emit("typing", handle.value);
    }
}