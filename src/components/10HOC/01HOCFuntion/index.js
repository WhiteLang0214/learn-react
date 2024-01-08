
/**
 * 
 * @param {高阶函数复习} username 
 */

// 定义一个登陆和登出的函数
function Login(username) {
  console.log(username + "登陆了")
}

function Logout(username) {
  console.log(username + "登陆了")
}

Login()
Logout()

// 优化：写一个中间函数，中间函数的功能就是读取 username ，这个函数还需要负责把 username 传递给两个函数
// 函数作为参数
// 返回一个函数
function propUsernmae(callback) {
  function getUserName() {
    const username = "admin";
    callback(username)
  }
  return getUserName
}

const newLogin = propUsernmae(Login);
const newLogout = propUsernmae(Logout);
newLogin()
newLogout()