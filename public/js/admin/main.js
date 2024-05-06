const targets = document.querySelectorAll('.choice')

const currentUrl = new URL(window.location.href).pathname
const targetTag = currentUrl.split('/')[2]

re = {
    'undefined': 2,
    'event': 3,
    'competition': 4
}

const token = re[targetTag]
targets[token].style.backgroundColor = 'var(--secondary-color-3)'
targets[token].style.color = 'var(--main-color-1)'


