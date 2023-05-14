import {App} from '@slack/bolt';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN,
});


app.message('ping', async ({message, say}) => {
  console.log(message);
  await say('pong');
});

export var bruh = 50;
