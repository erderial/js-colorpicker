const button = document.getElementById("getscheme-button")
const dropdown = document.getElementById("scheme-name")
const picker = document.getElementById("color")
let colorPallet = document.getElementById("colorpallet")
let chooseArr = []

fetch("https://www.thecolorapi.com/scheme?hex=582222")
.then(ra => ra.json())
.then(data=>{
    let newdata= data._links.schemes
    console.log(Object.keys(newdata))
    for (obj of Object.keys(newdata)){
         chooseArr += `<option>${obj[0].toUpperCase()+obj.slice(1)}</option>`
        
    }
    console.log(chooseArr)
    dropdown.innerHTML = chooseArr
})



button.addEventListener("click",()=>{
    let newPick = picker.value
    let schemeName = dropdown.value
    console.log(schemeName)
    console.log(newPick.substr(1))
    fetch(`https://www.thecolorapi.com/scheme?hex=${newPick.substr(1)}&mode=${schemeName.toLowerCase()}&count=5&format=json`)
    .then(res => res.json())
    .then(data => {
        console.log("asda")
        for (x=0;x<5;x++){
            document.getElementById("one-"+x).style.backgroundColor = data.colors[x].rgb.value
            console.log(data.colors[x].rgb.value)
            document.getElementById("text-"+x).innerText = data.colors[x].hex.value
        }
                
    })
})