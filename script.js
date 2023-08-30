var crsr = document.querySelector('.cursor')
var  main = document.querySelector('*')

main.addEventListener('mousemove',function(h){
    console.log(h.x)
    crsr.style.left = h.x + 'px'
    crsr.style.top = h.y + 'px'
})
