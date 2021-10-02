
let arrLinks = [];

let links = [
    './src/pages/burger-menu/index.html',
    './src/pages/chat-icon/index.html',
    './src/pages/landing-page/index.html',
    './src/pages/transition/index.html'
]


for (let i = 1; i <= 4; i++) {
    let val = document.querySelector(`.link${i}`);
    arrLinks.push(val);
}


arrLinks.forEach((e, index) => {
    e.addEventListener('click', function () {
        window.location.assign(links[index]);
    })
})


