import Discord from 'discord.js';

import Command from '../api/command';

import { commands } from './index';

function run(
  args: string[],
  msg: Discord.Message,
  client: Discord.Client
): void {
  const embedMsg: Discord.RichEmbed = new Discord.RichEmbed()
    .setColor('DARK_RED')
    .setTitle('Help Message');

  for (const command of commands) {
    embedMsg.addField(
      command.help().aliases.join(', '),
      `${command.help().admin ? 'Needs Admin Perms\n' : ''}
      ${command.help().desc}`
    );
  }

  msg.channel.send(embedMsg);
}

export const help = new Command(
  ['help', 'h'],
  'sends help message',
  false,
  run
);
