// Import the discord.js module
const Discord = require('discord.js');
const auth    = require('../cfg/auth.json');
const moment  = require('moment');

const jailDate = moment([2016, 02, 19]);

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = auth.token;

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '!justice') {
    // Send "pong" to the same channel
    let now = moment();
    let timePassed = now.diff(jailDate, 'days');
    let response = `Эрик в заключении уже ${timePassed} дней...`;
    message.channel.send(response);
  }

  else if (message.content === '!voicedJustice'){
    let now = moment();
    let timePassed = now.diff(jailDate, 'days');
    let response = `Эрик в заключении уже ${timePassed} дней...`;
    message.channel.send(response, {
        tts: true
    });
  }
});

// Log our bot in
client.login(token);