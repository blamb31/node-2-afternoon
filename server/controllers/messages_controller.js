let messages = []

id = 2

module.exports = {
    create: (req, res) => {
        let newMessage = req.body
        newMessage.id = id++
        

        messages.push(newMessage) 


        res.send(messages)
    },

    read: (req, res) => {
        res.send(messages)
    },

    update: (req, res) => {
        let {text} = req.body
        let index = req.params.id

        let messageIndex = messages.findIndex( message => +message.id === +index)

        let message = messages[messageIndex]
        
        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time : message.time
        }


        res.send(messages)
    },

    delete: (req,res) => {
        let deleteId = req.params.id
        let messageIndex = messages.findIndex( (message) => +message.id === +deleteId)

        messages.splice(messageIndex, 1)

        res.send(messages)
    }
} 
