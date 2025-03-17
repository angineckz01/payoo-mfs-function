document.getElementById('button-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const inputCashoutMoney = inputValueById('input-cash-out-money');
    const inputCashoutPin = inputValueById('input-cash-out-pin');




    // check wheather user input number or not
    if(isNaN(inputCashoutMoney)){
        alert('Failed to Cash Out');
        return;
    }
    if(inputCashoutPin === 1234){
        const balance = textValueById('account-balance');



        // conditionally cashout balance
        if(inputCashoutMoney > balance){
            alert('You have insufficient money to Cash Out');
            return;
        }
        const updateBalance = balance - inputCashoutMoney;
        // update the new balance
        document.getElementById('account-balance').innerText = updateBalance;

        // TRANSACTION HISTORY BEGINS HERE
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h2 class="text-2xl font-bold">Cash Out</h2>
            <p>${inputCashoutMoney} cashout. New balance ${updateBalance}</p>
        `
        const cashoutHistory = document.getElementById('cash-out-history');
        cashoutHistory.appendChild(div);
    }
    else{
        alert('failed to cash out money. please try again later.');
    }
})