var p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject('fail')
  }, 3000);
})

var p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(p1)
  }, 1000);
})

p2.then(res => {
  console.log('resolved', res)
}).catch(err => {
  console.log('rejected', err)
})
