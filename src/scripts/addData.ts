import * as type from '../types'
import * as redis from '../services/redis';


export async function addData (app:type.app) {
    app.message(/^sis add user name/, async ({ message , say } : type.appMsg)=> {
        const text : string = JSON.parse(JSON.stringify(message)).text.replace("sis add user name " , '')
        const name = text.split(' email')[0].replace("\"" , "").toLowerCase()
        const email = text.split('email')[1].replace("\"" , "").split('|')[1].replace(">","")
        let info = 
            {
                "name" :name,
                "email" :email,
                "score" :0
            }
        
        let infoarr = JSON.parse( await redis.getValue('info'))
        if (!infoarr) infoarr = []
        if (!JSON.stringify(infoarr).includes(email) && !JSON.stringify(infoarr).includes(name) ) {
            infoarr.push(info)   
            await say ("succesfully added data") 
            await redis.setValue ('info' , JSON.stringify(infoarr))
        }
        else {
            await say ("cannot have same user credentials") 
        }
        
    }
    
)}