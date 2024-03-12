let finalResult = document.getElementById("result");

function display(num) {
    finalResult.value = finalResult.value + num
}

function Calculate() {
    try {
        finalResult.value = eval(finalResult.value)
    }
    catch(err) {
        alert("Syntax Error");
        finalResult.value = ""; 
    }
}

function Clear(){
    finalResult.value = ""; 
}
function Delete() {
finalResult.value = finalResult.value.slice(0,-1)

}

