import {Server} from 'hapi'
import Route from './route'
/**
 * 
 * @param {Server} server 
 * @param {Object} handlers 
 * @param {Object} handlers.HeartbeatHandler
 */
export default function(server, {HeartbeatHandler}){
    
    server.route({
        method: 'POST',
        path: '/ping',
        handler: Route(HeartbeatHandler.ping)
      })

}