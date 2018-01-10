import Routes  from './routes'
import Handlers  from './handlers'
import Models  from './models'
import KeysWorker from './workers/key'

export default function(server,db){
    const handlers = Handlers(Models(db))
    KeysWorker(handlers)
        .subscribe(
            keys => console.log('new key created : ',keys),
            err  => console.error('error while generate key', err)
        )
    return Routes(server,handlers)
}