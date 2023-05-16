import {getApp} from './app'
import {ping,echo} from './scripts/test' 
import {info} from './scripts/info'
import { greet } from './scripts/greet'
import { getValue ,setValue} from './services/redis'
import { addData } from './scripts/addData'
import { help } from './scripts/help'
import { score } from './scripts/score'



let app = getApp()

ping(app) ; echo(app)
greet(app)
info(app)
addData(app)
help(app)
score(app)


