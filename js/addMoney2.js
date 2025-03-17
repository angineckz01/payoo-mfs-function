document.getElementById('button-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = inputValueById('input-add-money');
    const pin = inputValueById('input-pin');
    // console.log('input er result holo', addMoney, pin);


    

    // check wheather user input number or not
    if(isNaN(addMoney)){
        alert('Failed to Add Money');
        return;
    }
    if(pin === 1234){
        const balance = textValueById('account-balance');
        const updateBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = updateBalance;

        // ADD TO TRANSACTION HISTORY HERE
        const p = document.createElement('p');
        p.classList.add('bg-gray-400');
        p.innerHTML = `
            <h3 class="text-2xl font-bold">Add Money</h3>
            <p>Added ${addMoney} taka. New Balance ${updateBalance} taka</P>
        `
        const addMoneyHistory = document.getElementById('add-money-history');
        // addMoneyHistory.classList.add('space-y-4');
        addMoneyHistory.appendChild(p);
    }
    else{
        alert('Failed to add the money. Please try again later.')
    }
})