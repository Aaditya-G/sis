export function greet(app:any) {
    app.message(/^hello sis$/, async({message, say} : {message: {user: string}; say: Function}) =>{
            const timeNow: Date = new Date();
            const hoursNow: number = timeNow.getHours();
            let greetText : string = '';  
            if(hoursNow >5 && hoursNow < 12) greetText = ` Good Morning! <@${message.user}>`;
            else if(hoursNow >12 && hoursNow <18) greetText = ` Good Afternoon! <@${message.user}>`;
            else greetText = `Good Evening! <@${message.user}>`;        
            await say(greetText)

        }
    )}