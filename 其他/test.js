function Foo() {
  // 私有方法
  getName = function () {
    console.log(1)
  }
  return this
}


// 静态方法，不需要new， 可以直接调用
Foo.getName = function () {
  console.log(2)
}

// 公有方法，需要创建实例，才可以调用
Foo.prototype.getName = function () {
  console.log(3)
}

var getName = function () {
  console.log(4)
}

function getName() {
  console.log(5)
}

Foo.getName()

getName()

Foo().getName()

getName()

new Foo().getName()

