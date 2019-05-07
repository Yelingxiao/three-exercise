import './main.less'
import show from './show'
// 通过 CommonJS 规范导入 CSS 模块
// 执行 show 函数
show('Webpack')
function test() {
  setTimeout(() => {
    console.log(123)
  }, 1000)
}
test()
class A {
  b() {
    console.log('class')
  }
}
let a = new A()
a.b()
