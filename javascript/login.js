document.getElementById('button').addEventListener('click',function(){
    const email =document.getElementById('email-input').value;
    const password =document.getElementById('pass-input').value;
    if(email === 'hatem' && password==='hatem'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }
})
