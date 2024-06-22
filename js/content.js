
var script1 = document.createElement('script')
script1.textContent = 'var traffic_wait_time = 1;'
;(document.head || document.documentElement).appendChild(script1)
script1.remove()
var script6 = document.createElement('script')
script6.textContent = 'var link123swait_time = 1;'
;(document.head || document.documentElement).appendChild(script6)
script6.remove()
const scriptUrl = chrome.runtime.getURL('main.js')
var _0x4807a4 = {}
_0x4807a4.function = injectScript
_0x4807a4.args = [scriptUrl]
chrome.scripting.executeScript(_0x4807a4)
function injectScript(_0x2a7920) {
  const _0x4c9bb1 = document.createElement(_0x55d463.SczLT)
  _0x4c9bb1.src = _0x2a7920
  document.head.appendChild(_0x4c9bb1)
}
