export default function(models){
    const handler = {
        ping: async(request) => {
            return Promise.resolve(true)
        }
    }
    return handler
}