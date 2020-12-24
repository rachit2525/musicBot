module.exports = {
    name: 'ping',
    description: 'ping command',
    execute(message, args) {
        message.channel.send('Hey There! You pinged me!!');
        
    }
}