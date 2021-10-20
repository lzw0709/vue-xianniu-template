import mitt from 'mitt'

const emitter = mitt()
const Bus = {}

Bus.$on = emitter.on
Bus.$emit = emitter.emit
Bus.$off = emitter.off

export default Bus
