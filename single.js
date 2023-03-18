let num1 = document.querySelector('.num-1')
let num2 = document.querySelector('.num-2')
let choice= document.querySelector('.choice')
let choice1= document.querySelector('.choice1 ')
let choice2= document.querySelector('.choice2 ')
let choice3= document.querySelector('.choice3 ')
let choice4= document.querySelector('.choice4 ')
let choice5= document.querySelector('.choice5 ')
let answer = document.querySelector('.answer')
let btn = document.querySelector(".btn")
let close = document.querySelector(".close")
let boxRed = document.querySelectorAll(".box-red")
let boxOrange = document.querySelectorAll(".box-orange")
let arrOrange = Array.prototype.slice.call(boxOrange)
let arrRed = Array.prototype.slice.call(boxRed)

arrRed.sort((a , b) => b - a)

function open(){
    document.body.classList += ' open';
}

function closed(){
    document.body.classList -= " open";
}


btn.addEventListener('click', () => {
    open()
})

close.addEventListener('click', () => {
    closed()
})




function sub(){
    let x = Math.floor(Math.random()*10)
    num1.innerHTML= x
    let y = Math.floor(Math.random()*10)
    num2.innerHTML= y
    if(x > y){
        num1.innerHTML= x
        num2.innerHTML= y
    }
    else{
        num1.innerHTML= y
        num2.innerHTML= x
    }
    z = num1.innerHTML - num2.innerHTML
    answer.innerHTML = z
    let newRed = []
    for(i = arrRed.length - 1; i >= 0; i--){
        newRed.push(arrRed[i])
    }
    newRed.forEach((e)=>{
        e.style.background = 'lightgrey'
    })
    for(i = 0; i <(10-num1.innerHTML); i++){
        newRed.pop()
    }
    arrNew = []
    for(i = newRed.length - 1; i >= 0; i--){
        arrNew.push(newRed[i])
    }
    for(i = 0; i <(num1.innerHTML-num2.innerHTML); i++){
        arrNew.pop()
    }
    newRed.forEach((e)=>{
        e.style.background = 'red'
    })
    arrNew.forEach((e)=>{
        e.style.background = 'pink'
    })
   
    let a = z - 1
    let b = z + 3
    let c = z + 2
    let d = z + 1
    let arr = [a , b, c, d, z]
    arr.sort((a,b)=>Math.random()-0.5)
    choice1.innerHTML = arr[0]   
    choice2.innerHTML = arr[1]
    choice3.innerHTML = arr[2]
    choice4.innerHTML = arr[3]
    choice5.innerHTML = arr[4]
    return z
}

function colorSwitch(){
    document.body.classList -= ' correct'
    document.body.classList -= ' wrong'
}

choice1.addEventListener('click', () => {
    if(choice1.innerHTML == answer.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'
    }
    setTimeout(sub,2500)
    setTimeout(colorSwitch,2500)

})

choice2.addEventListener('click', () => {
    if(choice2.innerHTML == answer.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'

    }
    setTimeout(sub,2500)
    setTimeout(colorSwitch,2500)
    
})

choice3.addEventListener('click', () => {
    if(choice3.innerHTML == answer.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'

    }
    setTimeout(sub,2500)
    setTimeout(colorSwitch,2500)
})

choice4.addEventListener('click', () => {
    if(choice4.innerHTML == answer.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'

    }
    setTimeout(sub,2500)
    setTimeout(colorSwitch,2500)

})

choice5.addEventListener('click', () => {
    if(choice5.innerHTML == answer.innerHTML){
        document.body.classList += ' correct'
    }
    else{
        document.body.classList += ' wrong'

    }
    setTimeout(sub,2500)
    setTimeout(colorSwitch,2500)

})


