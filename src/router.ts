import {getApp} from './app'
import {ping,echo} from './scripts/test' 
import {info} from './scripts/info'
import { greet } from './scripts/greet'
import { addData } from './scripts/addData'
import { help } from './scripts/help'
import { score } from './scripts/score'



let app = getApp()

//testing
ping(app) ; echo(app)

//greet the user
greet(app)

//display info of a user
info(app)

//add user to database
addData(app)

//display help commands
help(app)

//increase or decrease score of a user
score(app)


