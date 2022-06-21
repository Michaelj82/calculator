let inputBox = document.getElementById('display');


function addNumber (num){
    inputBox.value += `${num}`;
    console.log("bruh")
}

function deleteChar(){
    let deleted = inputBox.value.slice(0, -1);
    inputBox.value = deleted

}

