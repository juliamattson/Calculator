
// Funktion för att vald siffra syns i fältet
function chooseNumber(num) {
    var input = document.getElementById("input")
    switch(num){
        case 1:
            input.value += '1';
            break;
        case 2:
            input.value += '2';
            break;
        case 3:
            input.value += '3';
            break;
        case 4:
            input.value += '4';
            break;
        case 5:
            input.value += '5';
            break;
        case 6:
            input.value += '6';
            break;
        case 7:
            input.value += '7';
            break;
        case 8:
            input.value += '8';
            break;
        case 9:
            input.value += '9';
            break;
    }
}

// Funktion för att välja metod (addera, subtrahera, multiplera, dividera)
function chooseMethod(operand) {
    var input = document.getElementById("input")
    switch(operand) {
        case "+":
            input.value += "+";
            break;
        case "-":
            input.value += "-";
            break;
        case "*":
            input.value += "*";
            break;
        case "/":
            input.value += "/";
            break;
    }
}

// Funktion för att få resultat av uträkning
function solve() {
    var input = document.getElementById("input")
    svar = Math.floor(+eval(input.value))
    document.getElementById("answer").value = "= " + svar
}

// Funktion för att rensa fältet om det står något där 
function empty() {
    document.getElementById("input").value = ""
    document.getElementById("answer").value = ""
}

