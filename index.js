let operations = prompt("perform Addition,multiplication,division and subtraction")
let num1 = parseInt(prompt("Enter the first number"))
let num2 = parseInt(prompt("Enter the second number"))
let result
function calculator(operation){
    if(num1 && num2 !== null){
        if(operation.toLowerCase() ==="addition"){
            result= num1 + num2
        }
        if(operation.toLowerCase() ==="subtraction"){
            result= num1 - num2
        }
        if(operation.toLowerCase() ==="multiplication"){
            result= num1 * num2
        }
        if(operation.toLowerCase() ==="division"){
            result= num1 / num2
        }
    }
    alert(result)
}
calculator(operations)