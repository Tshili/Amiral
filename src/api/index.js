import Routes  from './routes'
import Handlers  from './handlers'
import Models  from './models'


export default function(server,db){
    return Routes(server,Handlers(Models(db)))
}