import dotenv from 'dotenv';
import {TwitterClient} from 'twitter-api-client';
dotenv.config();

const TwitterClientConf = () => {
    return new TwitterClient({
        apiKey: process.env.TWITTER_API_KEY,
        apiSecret: process.env.TWITTER_API_SECRET,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    })
}
export default TwitterClientConf;