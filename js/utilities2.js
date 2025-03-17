function inputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    // console.log(id, inputValue, inputNumber);
    return inputNumber;
}

function textValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
function showSpecificSection(id){
    // hide all the part
    document.getElementById('form-add-money').classList.add('hidden');
    document.getElementById('form-cash-out').classList.add('hidden');
    document.getElementById('form-transaction').classList.add('hidden');
    // show a specific part
    document.getElementById(id).classList.remove('hidden');
}