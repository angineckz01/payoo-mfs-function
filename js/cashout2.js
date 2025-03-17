document.getElementById('button-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const inputCashoutMoney = inputValueById('input-cash-out-money');
    const inputCashoutPin = inputValueById('input-cash-out-pin');
    if(inputCashoutPin === 1234){
        const balance = textValueById('account-balance');
        const updateBalance = balance - inputCashoutMoney;
        // update the new balance
        document.getElementById('account-balance').innerText = updateBalance;
    }
    else{
        alert('failed to cash out money. please try again later.');
    }
})