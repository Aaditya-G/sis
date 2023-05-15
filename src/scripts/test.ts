import {redisInit, setValue,getValue} from '../services/redis';
export async function info(name:string){
   await setValue("foo","bar")
  let info:string=await getValue(name);
  if(info!==null){
    return info;
  }
  else{
    return "No user with name "+name;
  }

}