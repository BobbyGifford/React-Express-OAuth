const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Message = mongoose.model('messages')

module.exports = (app) => {

    app.get('/api/messages', requireLogin, async (req, res) => {
        const messages = await Message.find({})
        res.send(messages)        
    })

    app.post('/api/messages', requireLogin, async (req, res) => {
        const messageBody = req.body.message;
        console.log(req.user.displayName)

        const message = new Message({
            message: messageBody,
            displayName: req.user.displayName,
            datePosted: Date.now()
        })
        console.log(message);
        await message.save();
        res.send(message);
    })


}