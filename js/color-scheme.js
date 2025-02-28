const root = document.querySelector(':root')

document.querySelector('#color-scheme')
    .addEventListener('change', e => {
        switch(e.target.value) {
            case 'light': {
                root.style['color-scheme'] = 'light'
                break
            }
            case 'dark': {
                root.style['color-scheme'] = 'dark'
                break
            }
            default: {
                root.style['color-scheme'] = 'light dark'
            }
        }
    })
    