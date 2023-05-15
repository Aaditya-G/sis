import * as dotenv from 'dotenv';
dotenv.config();

import {App} from '@slack/bolt';
import {setValue, getValue ,redisInit} from './services/redis';
import { addData } from './scripts/addData';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN,
});

export function getApp() {
  return app;
}

async function init() {
  await app.start(process.env.PORT || 3000);
  console.log('[APP] app is running');
  await redisInit();
}


import './router'
init();


