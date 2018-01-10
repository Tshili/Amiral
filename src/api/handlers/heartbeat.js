import uuid from 'uuid/v4'
import {or} from 'ramda'
import {matches} from 'z'

let keys = {
    current:null,
    old: null,
    past: []
}

export default function(models){
    const handler = {
        ping: async(request) => {
            const key = request.payload.key
            // first key : old will be null
            const isCurrentOrOld = matches(key)(
                (x=null) => false,
                (x) => or(x === keys.current,x === keys.old)
            )
            return Promise.resolve(isCurrentOrOld)
        },
        generateKey : async(request) => {
            const newKey = uuid()
            keys.old = keys.current
            keys.current = newKey
            keys.past.push(newKey)
            return Promise.resolve(keys)
        }

    }
    return handler
}