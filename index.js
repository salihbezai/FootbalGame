var ball = document.getElementById('ball')

const shot = ()=>{
    ball.classList.add('animate')
    console.log('hello')
}

setInterval(()=>{
console.log(parseInt(window.getComputedStyle(ball).getPropertyValue('top')))

},1)