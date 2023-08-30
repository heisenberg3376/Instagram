/* var a = document.querySelector("button")
var blb = document.querySelector(".bulb")

var flag = 0;

a.addEventListener('click',function(){
    if(flag == 0){
    blb.style.backgroundColor = 'yellow';
    flag = 1;
    console.log('ON')
    }
    else{
    blb.style.backgroundColor = 'transparent';
    flag = 0;
    console.log('OFF')
    }
}) */
var check = 0
var h = document.querySelector('h5')
btn = document.querySelector('button')
btn.addEventListener('click',function(){
    if(check==0){
        h.innerHTML = 'Friends'
        h.style.color = 'green'
        btn.innerHTML = 'Unfollow'
        btn.style.backgroundColor = 'red'
        check = 1
    }
    else{
        h.innerHTML = 'Stranger'
        h.style.color = 'red'
        btn.innerHTML= 'Follow'
        btn.style.backgroundColor = 'green' 
        check = 0
    }
})