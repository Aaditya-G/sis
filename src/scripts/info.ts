import * as redis from '../services/redis';

export function info(app: any) {
  app.message(/^sis info/, async ({message, say}: {message: string; say: Function}) => {
    const msgObject: {text: string} = JSON.parse(JSON.stringify(message));
    const textMsg: string = msgObject.text.toLowerCase();
    console.log(textMsg)
    const user = textMsg.replace('sis info ', '').split(' ');
    console.log(user)
    const userInfo = (await redis.getValue('info:name'));
    console.log(userInfo);

    // await say({
    //   blocks: [
    //     {
    //       type: 'header',
    //       text: {
    //         type: 'plain_text',
    //         text: `${userInfo[user].realName}`,
    //         emoji: true,
    //       },
    //     },
    //     {
    //       type: 'divider',
    //     },
    //     {
    //       type: 'section',
    //       text: {
    //         type: 'mrkdwn',
    //         text: `email: ${userInfo[user].email}`,
    //       },
    //     },
    //   ],
    // });
  });
}