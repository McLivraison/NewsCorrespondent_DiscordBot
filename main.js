// Using this tutorial: https://www.writebots.com/how-to-make-a-discord-bot/

// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import auth from './auth.json' assert {type: "json"};
import winston from 'winston';
import axios from 'axios';
const cheerio = require('cheerio');

winston.level = 'debug';

// Initialize Discord Bot
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log('Ready!');
});

// Get the data from the website
let html = null;
const url = 'https://www.theguardian.com/world/live/2022/mar/27/russia-ukraine-war-latest-zelenskiy-calls-on-west-for-planes-and-tanks-biden-says-butcher-putin-cannot-remain-in-power-live';
axios.get(url).then(res => {html = res.data; console.log(res.data);});

// Parse the data received
// TODO: Do stuff here with cheerio


client.on('message', msg => {
	console.log(`Message is: ${msg}`);
	if (msg.content === 'ping') {
		msg.channel.send('pong');
	}
});


client.login(auth.token);