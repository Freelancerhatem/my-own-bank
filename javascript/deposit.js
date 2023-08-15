document.getElementById('home').addEventListener('click',function(){
    window.location.href='index.html'
});
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput =document.getElementById('deposit-amount');
    const prevoiusDepositValueString = depositInput.value; 
    
    if(prevoiusDepositValueString <=0 ){
        alert('enter positive value')
    }
    else{
        const prevoiusDepositValue=parseFloat(prevoiusDepositValueString); //input value
    
    const depositTotalId=document.getElementById('deposit-value') ;
    const depositTotalString = depositTotalId.innerText; 
    const depositTotal=parseFloat(depositTotalString); //total deposit value
    // add the input + balance 
    const currentBalance = prevoiusDepositValue + depositTotal;
    depositTotalId.innerText=currentBalance;
    
    //update the current balance
    const balanceString = document.getElementById('balance-value').innerText;
    const balance = parseFloat(balanceString);
    const updateBalance = balance + prevoiusDepositValue;
    document.getElementById('balance-value').innerText = updateBalance;


    // clear the value
    depositInput.value ='';
    }
})