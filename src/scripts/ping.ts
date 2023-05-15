export function ping(app : any){
    app.message('ping', async ({ message , say } : {message: any; say: any})=> {
        await say('pong');
    });
}