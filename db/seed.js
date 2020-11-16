const Message = require('./models/Message');

Message.deleteMany({}).then(()=>{
    Message.create({
        subject: "First board message",
        message: "The debute board message, welcome to message board"
    })

    Message.create({
        subject: "A reply to First board message",
        message: "This is the second board message"
    })
}).catch(console.error)