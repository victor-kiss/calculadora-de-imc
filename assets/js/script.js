let sendButton = document.querySelector(".send-button")
       
sendButton.addEventListener("click",()=>{

    let weight = parseFloat(document.querySelector("#weight-input").value)

    let height = parseFloat(document.querySelector("#height-input").value)

    let message = ""

    let calc = weight / (height * height)
    
    let result = calc.toFixed(2)


    function verifyValueNull(){
        if(document.querySelector("input").value == ""){

            message += "Preencha com um valor válido para eu calcular =)"

            document.querySelector(".result").innerHTML = message

        }
    }
    verifyValueNull()

   function verifyIMC(){
       if(result < 18.5){
           message = `De acordo com o seu IMC você está abaixo do peso: ${result}`

           document.querySelector(".result").innerHTML = message
       }
       if(result > 18.5 && result < 24.9){
           message = `De acordo com o seu IMC você está com o peso normal: ${result}`

           document.querySelector(".result").innerHTML = message
       }
       if(result > 25 && result < 29.9){
           message = `De acordo com o seu IMC você está com sobrepeso: ${result}`

           document.querySelector(".result").innerHTML = message
       }
       if(result > 30 && result < 34.9){
           message = `De acordo com o seu IMC você está com obesidade grau 1: ${result}`

           document.querySelector(".result").innerHTML = message
       }
       if(result > 35 && result < 39.9){
           message = `De acordo com o seu IMC você está com obesidade grau 2: ${result}`

           document.querySelector(".result").innerHTML = message
       }
       if(result >=40){
           message = `De acordo com o seu IMC você está com obesidade grau 3: ${result}`

           document.querySelector(".result").innerHTML = message
       }
   }
   verifyIMC()
})

let clearButton = document.querySelector(".clear-button")

clearButton.addEventListener("click",()=>{
    function clear(){
        let weight =document.querySelector("#weight-input").value = ""

        let height =document.querySelector("#height-input").value = ""

        let message = "Resultado:"

        document.querySelector(".result").innerHTML = message
    }
    clear()
})