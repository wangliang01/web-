var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}`)
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}`)
    return Reflect.set(target, key, value, receiver)
   }
})

var proxy = new Proxy(target, handler)

var proxy = new Proxy({}, {
  get: function (target, property) {
    return 35
  }
})

// proxy接受两个参数。第一个参数是所要代理的目标对象（上例是一个空对象），即如果没有proxy介入，操作原来要访问的就是这个对象；第二个参数就是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作。

// 同一个拦截函数，可以设置拦截多个操作

// Proxy支持的拦截操作一共有13种
get(target, propKey, receiver)
set(target, propKey, value, receiver)
has(target, propKey)
deleteProperty(target, propKey)
ownKeys(target)
getOwnPropertyDescriptor(target, propKey)
defineProperty(target, propKey, propDesc)
preventExtensions(target)
getPrototypeOf(target)
isExtensible(target)
setPrototypeOf(target, proto)
apply(target, object, args)
construct(target, args)
proxy.time
