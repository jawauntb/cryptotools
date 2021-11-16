import { youtube } from 'scrape-youtube';
import * as ytdl from 'ytdl-core';


const YoutubeSearch = () => {
    youtube.search('Short Change Hero').then(async (results: {videos:{link:string}[]}) => {
        const target = results.videos[0];
        const info = await ytdl.getInfo(target.link);

        console.log(info.videoDetails.title); // Short Change Hero
        console.log(info.videoDetails.uploadDate); // 2017-02-11
        console.log(info.videoDetails.dislikes); // 8046
        console.log(info.videoDetails.channelId); // UCbGFbVqBTN3aCjUwz3FChFw
    });
}

export default YoutubeSearch;
