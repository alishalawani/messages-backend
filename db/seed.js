const Message = require('./models/Message');

Message.deleteMany({}).then(()=>{
    Message.create({
        subject: "First board message",
        message: "The debute board message, welcome to message board"
    })

    Message.create({
        subject: "Second board message",
        message: "I think it is time to start the frontend portion or message board"
    })
}).catch(console.error)