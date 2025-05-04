const myName = 'Matías Stebé';

document.addEventListener('DOMContentLoaded', () => {
    const titleText = document.querySelector('.contact-info__header')
    titleText.innerHTML = ''
    let index = 0;
    const interval = setInterval(() => {
        titleText.innerHTML += myName[index]
        index++;

        if (index === myName.length) {
            clearInterval(interval)
        }
    }, 150)
    
    
})