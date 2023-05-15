import {getApp} from './app'
import {ping} from './scripts/ping' 
import {info} from './scripts/test'
import { greet } from './scripts/greet'
let app = getApp()

ping(app)
greet(app)



