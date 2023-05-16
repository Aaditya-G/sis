import * as type from '../types'
import * as redis from '../services/redis';

export function info(app: type.app) {
  app.message(/^sis info/, async ({message, say}: type.appMsg) => {
    const name:  string = JSON.parse(JSON.stringify(message)).text.replace("sis info " , "")
    const userInfo = JSON.parse(await redis.getValue('info'));
    const userArr = (Object.values(userInfo))
    let c = 0;
    for (let i = 0 ; i < userArr.length ; i++)
    {
      const userObj = JSON.parse(JSON.stringify((userArr[i])))
      if(userObj.name.toLowerCase() == name.toLowerCase())
      {
        await say({
          blocks: [
            {
              type: 'header',
              text: {
                type: 'plain_text',
                text: `${userObj.name}`,
                emoji: true,
              },
            },
            {
              type: 'divider',
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `email: ${userObj.email}`,
              },
            },
            {
              type: 'divider',
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `score: ${userObj.score}`,
              },
            },
          ],
        });
        c= 1;
      }
    }
    if ( c == 0) await say ("no such user found")
  });
}