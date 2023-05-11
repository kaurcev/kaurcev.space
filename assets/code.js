console.clear();
console.log('%cСТОП СТОП СТОП!!!', 'color: red; background: #212529; font-size: 32px');
console.log('%cТут тебе явно делать нечего', 'color: yellow; background: #212529; font-size: 16px');
console.log('%cДумаю, что после старта работы сайта, тебе стоит посетить эту страницу -> https://kaurcev.space/jops', 'color: white; background: #212529; font-size: 12px');


window.onload = function() {
window.YaAuthSuggest.init({
 client_id: '3a9f4adda4d54c2aaaae6e282bdd2873',
    response_type: 'token',
    redirect_uri: 'https://kaurcev.space'
 },
 'https://kaurcev.space', {
    view: 'button',
    parentId: 'container',
    buttonView: 'main',
    buttonTheme: 'light',
    buttonSize: 'm',
    buttonBorderRadius: 8
 }
)
.then(function(result) {
 return result.handler()
})
.then(function(data) {
 console.log('Message with the token: ', data);
 document.getElementById("yandex").innerHTML += `Message with the token: ${JSON.stringify(data)}`;
})
.catch(function(error) {
 console.log('Something went wrong: ', error);
 document.getElementById("yandex").innerHTML += `Something went wrong: ${JSON.stringify(error)}`;
});
};