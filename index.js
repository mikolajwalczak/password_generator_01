const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let change = "I made a change"


function generatePasswords() {
    let generated1 = ""
    let generated2 = ""
    for ( let i = 0; i < 15; i++) {
        generated1 += characters[Math.floor(Math.random() * characters.length)]
        generated2 += characters[Math.floor(Math.random() * characters.length)]
    }
    password1.textContent = generated1
    password2.textContent = generated2
    
}


