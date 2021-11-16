import { Client, Intents, Message } from 'discord.js';
import {youtube} from 'scrape-youtube';


const DiscordBot = () => {
    const client = new Client({ intents: Intents.FLAGS.GUILD_MESSAGES });
    const prefix = '~';

    client.on('message', (message: Message) => {
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.split(' ');
        const first = args.shift()
        const cmd = first? first.replace(prefix, ''): '';
        if (cmd === 'youtube' && args.length) {
            youtube.search(args.join(' ')).then((results:{videos:{link:string}[]}) => {
                const { videos } = results;

                if (videos.length) message.channel.send('Here you go:\n' + videos[0].link);
                else message.channel.send('No results for that query');
            });
        }
    });
    client.login('token');
}

export default DiscordBot;
