import * as redis from '../services/redis';

export async function score(app:any) {
    app.message(/^sis/, async ({message ,say} : {message:string , say: Function}) => {
        const text:  string = JSON.parse(JSON.stringify(message)).text.replace("sis " , "")
        const name = text.split(" ")[0];
        const func = text.split(" ")[1];
        const userInfo = JSON.parse(await redis.getValue('info'));
    const userArr = (Object.values(userInfo))
    let c = 0;
    for (let i = 0 ; i < userArr.length ; i++)
    {
      const userObj = JSON.parse(JSON.stringify((userArr[i])))
      if(userObj.name.toLowerCase() == name.toLowerCase())
      {
        if(func == "++"){
            userObj.score ++
            const index = (userArr.indexOf(userArr[i]))
            userArr.splice(index,1)
            userArr.push(userObj)
            await redis.setValue ('info' , JSON.stringify(userArr))
            break;
        } 
        if(func == "--"){
            userObj.score--;
            const index = (userArr.indexOf(userArr[i]))
            userArr.splice(index,1)
            userArr.push(userObj)
            await redis.setValue ('info' , JSON.stringify(userArr))
            break;
        } 
      }
      
    }
    })}