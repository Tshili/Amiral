import {Server} from 'hapi'
import Api from './api'
import {Observable} from 'rxjs'
export default function start(){
    const server = new Server({
        host: '0.0.0.0',
        port: 3000
    })
    Api(server)
    
    return Observable.fromPromise(server.start())
        .mapTo(server)
}