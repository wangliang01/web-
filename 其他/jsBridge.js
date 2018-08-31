/**
 * 函数描述：js调用webview事件
 *
 * jsBridge.callHandler(method, data, callBack(response));
 * @param method {string} 方法名
 * @param data {Object} 参数
 * @return {Object} 回调
 */

/**
 * 函数描述：webView调用JS事件
 *
 * jsBridge.registerHandler(method, callBack(response));
 * @param method {string} 方法名
 * @return {Object} 回调
 */

const jsBridge = {
  init: function (callback) {
    var isIOS = /\b(iPad|iPhone|iPod)(?=;)/.test(navigator.userAgent)
    if (!isIOS) {
      if (window.WebViewJavascriptBridge) {
        callback(window.WebViewJavascriptBridge)
      } else {
        document.addEventListener(
          '__WebViewJavascriptBridgeReady__',
          function () {
            callback(window.WebViewJavascriptBridge)
          },
          false
        )
      }
    } else {
      if (window.WebViewJavascriptBridge) {
        return callback(window.WebViewJavascriptBridge)
      }
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
      }
      window.WVJBCallbacks = [callback]
      var WVJBIframe = document.createElement('iframe')
      WVJBIframe.style.display = 'none'
      WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
      document.documentElement.appendChild(WVJBIframe)
      setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe)
      }, 0)
    }
  },

  registerHandler: function (name, fun) {
    // 检测对应的app
    var isHrt = navigator.userAgent.match(/hrtbrowser/)
    let isRx = navigator.userAgent.match(/rxbrowser/)
    if (!isHrt && !isRx) {
      console.log('register js method ' + name + '......')
    }
    this.init(function (bridge) {
      bridge.registerHandler(name, fun)
    })
  },
  callHandler: function (name, data, fun) {
    // 检测对应的app
    var isHrt = navigator.userAgent.match(/hrtbrowser/)
    let isRx = navigator.userAgent.match(/rxbrowser/)
    if (!isHrt && !isRx) {
      console.log('calling native method ' + name + '......')
    }
    this.init(function (bridge) {
      bridge.callHandler(name, data, fun)
    })
  }
}

export default jsBridge
