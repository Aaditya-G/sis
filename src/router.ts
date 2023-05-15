import {getApp} from './app'
import {ping,echo} from './scripts/test' 
import {info} from './scripts/info'
import { greet } from './scripts/greet'
import { getValue ,setValue} from './services/redis'
import { addData } from './scripts/addData'



let app = getApp()

ping(app) ; echo(app)
greet(app)
info(app)
addData(app)


