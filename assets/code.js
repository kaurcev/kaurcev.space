console.clear();
console.log('%cСТОП СТОП СТОП!!!', 'color: red; background: #212529; font-size: 32px');
console.log('%cТут тебе явно делать нечего', 'color: yellow; background: #212529; font-size: 16px');
console.log('%cДумаю, что после старта работы сайта, тебе стоит посетить эту страницу -> https://kaurcev.space/jops', 'color: white; background: #212529; font-size: 12px');

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
  
  function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }

  var user = fetch('https://login.yandex.ru/info?&oauth_token='+getCookie("auth")+'&format=json&jwt_secret=186f264107af4850b33ea302ef19f2a7')
  .then(response => response.json())
  .then( json => console.log(JSON.stringify(json)))
  .catch( error => console.error(error))

document.getElementById("avatar").src = "https://avatars.yandex.net/get-yapic/29310/yP7dESD3PFOEWV7JivFwnG8CM-1/islands-retina-50";