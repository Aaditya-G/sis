export function ping(app : any){
    app.message(/^sis ping$/, async ({ message , say } : {message: string; say: any})=> {
        await say('pong');
    });
}

export function echo(app : any){
    app.message(/^sis echo/, async ({ message , say } : {message: string; say: any})=> {
        const msg = JSON.parse(JSON.stringify(message)).text.replace('sis echo ' , '')
        await say(msg);
    });
}