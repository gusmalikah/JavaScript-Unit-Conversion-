/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const btn = document.getElementById("btn")
const number = document.querySelector("#number")
const lengthTxt = document.querySelector("#length-txt")
const volumeTxt = document.querySelector("#volume-txt")
const massTxt = document.querySelector("#mass-txt")
const defaultText = "Click Convert to see the dimensions"
lengthTxt.textContent = defaultText
volumeTxt.textContent = defaultText
massTxt.textContent = defaultText

btn.addEventListener("click", function(){
    if(number.value === ""){
        lengthTxt.textContent = defaultText
        volumeTxt.textContent = defaultText
        massTxt.textContent = defaultText
    } else{
        const userInput = number.value
        lengthTxt.textContent = 
        `${userInput} meters = ${(userInput*3.281).toFixed(3)} feet |
        ${userInput} feet = ${(userInput/3.281).toFixed(3)} meters`
    
        volumeTxt.textContent = 
        `${userInput} liters = ${(userInput*0.264).toFixed(3)} gallons |
        ${userInput} gallons = ${(userInput/0.264).toFixed(3)} liters`
        
        massTxt.textContent = 
        `${userInput} kilos = ${(userInput*2.204).toFixed(3)} pounds |
        ${userInput} pounds = ${(userInput/2.204).toFixed(3)} kilos`
        
    }
})
