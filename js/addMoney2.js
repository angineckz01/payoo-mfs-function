document.getElementById('button-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = inputValueById('input-add-money');
    const pin = inputValueById('input-pin');
    // console.log('input er result holo', addMoney, pin);

    if(pin === 1234){
        const balance = textValueById('account-balance');
        const updateBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = updateBalance;
    }
    else{
        alert('Failed to add the money. Please try again later.')
    }
})