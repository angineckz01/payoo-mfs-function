

document.getElementById('button-add-money').addEventListener('click', function(event){
    event.preventDefault();


    // console.log('add money button clicked');
    // getInputFieldValueById();


    // const addMoney = getInputFieldValueById();
    // console.log('add money added', addMoney);


    const addMoney = getInputValueById('input-add-money');
    console.log('add money is', addMoney);
    const pin = getInputValueById('input-pin');
    console.log('input pin is', pin);

    
    const inputAddMoney = document.getElementById('input-add-money').value;
    const inputAddMoneyNumber = parseFloat(inputAddMoney);
    const inputPin = document.getElementById('input-pin').value;
    if(inputPin === "1234"){
        const accountBalance = document.getElementById('account-balance').innerText;
        const accountBalanceNumber = parseFloat(accountBalance);
        // update balance kept in a variable
        const updateBalance = accountBalanceNumber + inputAddMoneyNumber;
        // update balance here
        document.getElementById('account-balance').innerText = updateBalance;
    }
    else{
        alert('falied to add money. Please try again later.')
    }
})