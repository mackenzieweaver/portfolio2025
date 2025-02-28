const root = document.querySelector(':root')

document.querySelector('#color-scheme')
    .addEventListener('change', e => {
        root.style['color-scheme'] = e.target.value
    })
    