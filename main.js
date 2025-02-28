const root = document.querySelector(':root')

document.querySelector('select#color-scheme')
    .addEventListener('change', e => {
        switch(e.target.value) {
            case 'light': {
                document.documentElement.classList.remove('dark')
                document.documentElement.classList.add('light')
                break
            }
            case 'dark': {
                document.documentElement.classList.remove('light')
                document.documentElement.classList.add('dark')
                break
            }
            default: {
                document.documentElement.classList.remove('light')
                document.documentElement.classList.remove('dark')
            }
        }
    })