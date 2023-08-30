var con = document.querySelector('.container')
var love = document.querySelector('i')
var hrt = document.querySelector('#ht')

con.addEventListener('dblclick',function(){
    love.style.transform = 'translate(-50%,-50%) scale(1)'
    love.style.opacity = 0.9;
    setTimeout(function(){
        //love.style.display = 'none'
        love.style.transform = 'translate(-50%,-50%) scale(0)'
        love.style.opacity = 0
    },1500)
    hrt.style.color = 'red'
})

hrt.addEventListener('click',function(){
    hrt.style.color = 'white'
})

