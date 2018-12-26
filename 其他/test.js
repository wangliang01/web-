class Event {
  constructor() {
    this.eventList = []
  }
  on(eventName, handler) {
    if (!this.eventList[eventName]) {
      this.eventList[eventName] = []
    }
    this.eventList[eventName].push(handler)
    return this
  }
  off(eventName, handler) {
    this.eventList[eventName] = this.eventList[eventName].filter(item => item != handler)
    return this
  }
  emit(eventName, data) {
    this.eventList[eventName].forEach(item => item.call(this, data))
    return this
  }
}

var event = new Event()

const handler = function (data) {
  console.log('我被点击啦', data)
}

event.on('click', handler)

event.emit('click', 'haha')

event.off('click', handler)

event.emit('click', '哈哈')