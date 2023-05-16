import * as type from '../types'


export function ping(app : type.app){
    app.message(/^sis ping$/, async ({ message , say } : type.appMsg)=> {
        await say('pong');
    });
}

export function echo(app : type.app){
    app.message(/^sis echo/, async ({ message , say } : type.appMsg)=> {
        const msg = JSON.parse(JSON.stringify(message)).text.replace('sis echo ' , '')
        await say(msg);
    });
}