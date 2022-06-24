let inputBox = document.getElementById('display');

let newNumber = false;

let GLOBALNUMBER = '';

let GLOBALSYMBOL = '';

let afterEquals = false;

let equation = [];

let lastUsedKey = ''


function solveEquation(equation){

    let toSolve = Number(equation[0])
    let operator = ''
    for (let i = 1; i < equation.length; i++){
        if (isNaN(equation[i])){
            operator = equation[i]
        }else{
            let num = Number(equation[i])

            switch (operator){
                case '+':
                    toSolve += num;
                    break;
                case '-':
                    toSolve -=num;
                    break;
                case '/':
                    toSolve = toSolve / num;
                    break;
                case '*':
                    toSolve = toSolve * num;
                    break;
            }
        }
    }
    return(toSolve)
}

function makeNegative(){

    if (inputBox.value.includes('-')){
        inputBox.value = inputBox.value.substring(1);
    }else{
        inputBox.value = '-' + inputBox.value
    }


}
function addPeriod (){
    if (inputBox.value.includes('.') == false){
        inputBox.value += '.'
    }
}


function addNumber (num){
    if (afterEquals){
        inputBox.value = ''
        equation = []
        afterEquals = false
    }

    if (newNumber){
        equation.push(GLOBALNUMBER)

        equation.push(GLOBALSYMBOL)

        inputBox.value = ''
        inputBox.value += `${num}`

        newNumber = false


    }else{
        inputBox.value += `${num}`;

    }
    lastUsedKey = 'num'
}

function deleteChar(){
    let deleted = inputBox.value.slice(0, -1);
    inputBox.value = deleted

}

function eval(symbol){

    if (inputBox.value !== ''){
        
        switch (symbol){

            case "=":
                if (lastUsedKey !== '='){
                    let num = inputBox.value

                    equation.push(num)
    
                    let solution = solveEquation(equation);
    
                    inputBox.value = solution;
    
                    afterEquals = true;
                    lastUsedKey = '='
                }else{   
                }
                break;
    
            case "Clear":
                equation = []
                inputBox.value = ''

                lastUsedKey = 'Clear'
                break;
    
            default:
                GLOBALSYMBOL = symbol
                newNumber = true
                GLOBALNUMBER = inputBox.value
                lastUsedKey = 'operator'

    
        }


    }else{
    }






}





