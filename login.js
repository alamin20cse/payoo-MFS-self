

document.getElementById('btn-login').addEventListener('click',function(event){

    event.preventDefault();


    const PhoneNumber=document.getElementById('phone-number').value;
   

    const PinNumber=document.getElementById('pin-number').value;
    

    if(PhoneNumber==='017' && PinNumber==='123')
    {
        
        console.log("correct");
        window.location.href='home.html'
    }
    else
    {
        alert("wrong");
    }




});