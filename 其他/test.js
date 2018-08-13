var qcArray = function (arr) {
  let res = []
  console.log('qcArray')
  for (let i = 0; i < arr.length; i++) {
    let flag = true
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        flag = false
        break;
      }
    }
    if (flag) {
      res.push(arr[i])
    }
  }
  console.log(res)
  return res
 }

 qcArray([1, 4, 3, 2, 2, 3, 4, 5])
