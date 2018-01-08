import start from './server'
import {Server} from 'hapi'
/**
 * 
 * @param {Server} server 
 */
function onStart(server){
    console.log(`Server started : 
    -> host : ${server.info.host}
    -> port : ${server.info.port}`)
}
function onCrash(error){
    console.error(error)
    process.exit(1)
}
start().subscribe(onStart,onCrash)
   