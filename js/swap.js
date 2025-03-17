document.getElementById('swap-button-cash-out').addEventListener('click',function(){
    const swapButtonAddMoney = document.getElementById('form-add-money');
    swapButtonAddMoney.classList.add('hidden');
    const swapButtonCashout = document.getElementById('form-cash-out');
    swapButtonCashout.classList.remove('hidden');
})
document.getElementById('swap-button-add-money').addEventListener('click',function(){
    const swapButtonAddMoney = document.getElementById('form-add-money');
    swapButtonAddMoney.classList.remove('hidden');
    const swapButtonCashout = document.getElementById('form-cash-out');
    swapButtonCashout.classList.add('hidden');
})