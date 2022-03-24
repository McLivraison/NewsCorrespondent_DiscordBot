// Using this tutorial: https://www.writebots.com/how-to-make-a-discord-bot/

// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import auth from './auth.json' assert {type: "json"};
import winston from 'winston';
// const projectPackage = require('./package.json');

winston.level = 'debug';

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