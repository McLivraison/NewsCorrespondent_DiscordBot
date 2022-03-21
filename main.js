// Using this tutorial: https://www.writebots.com/how-to-make-a-discord-bot/

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const logger = require('winston');
const auth = require('./auth.json');
// const projectPackage = require('./package.json');

logger.level = 'debug';

// Initialize Discord Bot
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', msg => {
	console.log(`Message is: ${msg}`);
	if (msg.content === 'ping') {
		msg.channel.send('pong');
	}
});


client.login(auth.token);