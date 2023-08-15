document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInputString=document.getElementById('withdraw-amount').value;
    
    if(withdrawInputString <= 0){
        alert ("inuput positive  value")

    }
    else{
        const withdrawInput=parseFloat(withdrawInputString);

    // 02 access withdrawTotal
    const withdrawValueString= document.getElementById('withdraw-value').innerText;
    const withdrawValue=parseFloat(withdrawValueString);
    // console.log(withdrawValue,typeof withdrawValue)

    // total value of withdraw
    const totalWithdrawValue = withdrawInput + withdrawValue;
// update the withdraw value
    document.getElementById('withdraw-value').innerText = totalWithdrawValue;
//update balance with withdraw
const balanceString = document.getElementById('balance-value').innerText;
    const balance = parseFloat(balanceString);
    const updateBalance = balance - withdrawInput;
    document.getElementById('balance-value').innerText = updateBalance;


// clear the input value
    document.getElementById('withdraw-amount').value ='';
    }


    
})