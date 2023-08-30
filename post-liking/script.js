var con = document.querySelector('.container>img')
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
var jig = 0
hrt.addEventListener('click',function(){
    if (jig==0){
        hrt.style.color = 'white'
        jig=1
    }
    else{
        hrt.style.color = 'red'
        jig = 0
    }
})

