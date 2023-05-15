import * as redis from '../services/redis';


export async function addData (app:any) {
    app.message('sis add user', async ({ message , say } : {message: any; say: any})=> {
        await redis.setValue("info:name" , "sample")
    }
    
)}