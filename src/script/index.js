
let github = document.querySelector('#link');


const link = {
    github: 'https://github.com/eladioclaudio'
};

github.addEventListener('click', () => document.location.assign(link.github));
