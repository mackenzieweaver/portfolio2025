const cursor = document.querySelector('#cursor')

const size = 60
cursor.style.width = size + 'px'
cursor.style.height = size + 'px'
cursor.style.borderRadius = size + 'px'

document.addEventListener('mousemove', e => {
    const { pageX: x, pageY: y } = e
    cursor.style.left = x - (size / 2) + 'px'
    cursor.style.top = y - (size / 2) + 'px'
})
