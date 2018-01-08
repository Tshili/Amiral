import HeartbeatModel from './heartbeat'

export default function(db){
    return {
        HeartbeatModel: HeartbeatModel(db)
    }
}