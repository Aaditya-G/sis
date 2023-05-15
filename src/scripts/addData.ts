import * as redis from '../services/redis';


export async function addData (app:any) {
    app.message(/^sis add user name/, async ({ message , say } : {message: string; say: Function})=> {
        const text : string = JSON.parse(JSON.stringify(message)).text.replace("sis add user name " , '')
        const name = text.split(' email')[0].replace("\"" , "")
        const email = text.split('email')[1].replace("\"" , "").split('|')[1].replace(">","")
        let info = 
            {
                "name" :name,
                "email" :email,
                "score" :0
            }
        
        let infoarr = JSON.parse( await redis.getValue('info'))
        if (!infoarr) infoarr = []
        if (!JSON.stringify(infoarr).includes(email)) {
            infoarr.push(info)   
            await say ("succesfully added data") 
            await redis.setValue ('info' , JSON.stringify(infoarr))
        }
        else {
            await say ("email already exists") 
        }
        
    }
    
)}