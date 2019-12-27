import Discord from 'discord.js';
import * as config from '../config.json';

export default class Command {
  readonly aliases: string[];
  readonly desc: string;
  readonly admin: boolean;
  run: (args: string[], msg: Discord.Message, client: Discord.Client) => void;

  constructor(
    aliases: string[],
    desc: string,
    admin: boolean,
    run: (args: string[], msg: Discord.Message, client: Discord.Client) => void
  ) {
    this.aliases = aliases;
    this.desc = desc;
    this.admin = admin;
    this.run = run;
  }

  help(): HelpMessage {
    return new HelpMessage(this.aliases, this.desc, this.admin);
  }

  isTargetCommand(targetCommand: string): boolean {
    return this.aliases.includes(targetCommand);
  }

  canUseCommand(id: string): boolean {
    return config.ids.admins.includes(id);
  }
}

class HelpMessage {
  readonly aliases: string[];
  readonly desc: string;
  readonly admin: boolean;

  constructor(aliases: string[], desc: string, admin: boolean) {
    this.aliases = aliases;
    this.desc = desc;
    this.admin = admin;
  }
}
