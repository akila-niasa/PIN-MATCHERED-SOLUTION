function getPin(){
    const pin =Math.round(Math.random()*10000)
    const pinString=pin+""
    if(pinString.length==4){
        return pin
    }
    else{
        return getPin
    }
}
function generatePin(){
    const pin=getPin()
    document.getElementById("input-info" ).value=pin
}
document.getElementById("keypad").addEventListener("click",function(event){
const number=event.target.innerText
const calc=document.getElementById("calculatore-field")
if(isNaN(number)){
if(number=='C'){
    calc.value=''
}
}
else{
const previousCalc=calc.value
const newcalc=previousCalc+number
calc.value=newcalc
}
})
function verifyPin(){
    const currentPin=document.getElementById("input-info").value
    const inputPin=document.getElementById("calculatore-field" ).value

    const positiveRetun=document.getElementById("positive-text" )
    const negativeReturn=document.getElementById("negative-text")
    if(currentPin==inputPin){
        positiveRetun.style.display='block'
        negativeReturn.style.display="none"
    }
    else{
        positiveRetun.style.display='none'
        negativeReturn.style.display="block"

    }
}