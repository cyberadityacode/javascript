const light = document.querySelector('.light')
const dark = document.querySelector('.dark')

document.addEventListener('mousemove', (e) => {
    const lightRadius = light.offsetWidth / 2;
    light.style.left = (e.clientX - lightRadius) + 'px';
    light.style.top = (e.clientY - lightRadius) + 'px';
});