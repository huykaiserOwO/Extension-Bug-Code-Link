const currentUrl = window.location.href
const currentDomain = new URL(currentUrl).hostname
if (currentDomain === 'traffic24h.net') {
  let validDomain = false
  let userInput
  while (!validDomain) {
    userInput = prompt('Vui lòng nhập đúng miền cần lấy ( ví dụ: b52.com ):')
    if (userInput === null) {
      alert('Bạn đã hủy bỏ.')
      break
    }
    if (/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userInput)) {
      validDomain = true
      const userAgent = navigator.userAgent
      fetch('https://traffic24h.net/assets/ajaxs/Getcode.php', {
        method: 'POST',
        body: new URLSearchParams({
          type: 'Updatecodez',
          website: 'https://' + userInput + '/',
        }),
      })
        .then((_0x4aa25c) => _0x4aa25c.text())
        .then((_0x2f519a) => {
          console.log(_0x2f519a)
        })
        .catch((_0x2166c5) => {
          console.error('Lỗi:', _0x2166c5)
        })
      fetch('https://traffic24h.net/assets/ajaxs/Getcode.php', {
        method: 'POST',
        headers: {
          authority: 'traffic24h.net',
          accept: '*/*',
          'accept-language':
            'vi-VN,vi;q=0.9,en;q=0.8,en-US;q=0.7,fr-FR;q=0.6,fr;q=0.5',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          origin: 'https://traffic24h.net',
          referer:
            'https://traffic24h.net/public/client/Embed.php?w=https://' +
            userInput +
            '/&v=0',
          'sec-ch-ua':
            '"(Not(A:Brand";v="99", "Chromium";v="115", "Google Chrome";v="115"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5756.197 Safari/537.36',
          'x-requested-with': 'XMLHttpRequest',
        },
        body:
          'type=Getcodeazbzza&website=https%3A%2F%2F' +
          userInput +
          '%2F&useragent=' +
          encodeURIComponent(userAgent),
      })
        .then((_0x365de8) => _0x365de8.text())
        .then((_0x2d5282) => {
          alert(userInput + 'Mã của bạn là: ' + _0x2d5282)
        })
        .catch((_0x1bea34) => {
          console.error('Lỗi:', _0x1bea34)
        })
    } else {
      alert('Domain không hợp lệ. Vui lòng nhập lại.')
    }
  }
} else {
  alert('Vui lòng nhập khi đang ở traffic24h.net!!')
}
