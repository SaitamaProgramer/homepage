const myName = 'Matías Stebé';
party.confetti(document.body);
party.confetti(document.body, {
    count: party.variation.range(120, 180),
});


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

