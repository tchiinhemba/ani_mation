
let github = document.querySelector('#link');


const link = {
    github: 'https://github.com/tchiinhemba'
};

github.addEventListener('click', () => document.location.assign(link.github));
