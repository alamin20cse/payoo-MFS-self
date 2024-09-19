

document.getElementById('add-button').addEventListener('click', function(event) {
    event.preventDefault();

    const TakaButton = document.getElementById('taka-button'); // The HTML element
    let TakaButtonnumber = Number(TakaButton.innerText); // The number from innerText

    const AmountField = Number(document.getElementById('amount-field').value);
    const PinButton = document.getElementById('pin-button').value;

    if (PinButton === '123') {
        TakaButtonnumber = TakaButtonnumber + AmountField; // Add the amount
        TakaButton.innerText = TakaButtonnumber; // Update the innerText of the element
    } else {
        alert('pin is wrong');
    }
});



// cash out


document.getElementById('cashout-button').addEventListener('click',function(event){
   
    event.preventDefault();

   const TakaButton=document.getElementById('taka-button');
   const AmountField=Number(document.getElementById('cashout-amount-field').value);

   let TakaButtonnumber = Number(TakaButton.innerText); // The number from innerText

   
   const PinButton=document.getElementById('cashout-pin-button').value;

   if(PinButton==='123')
   {
    TakaButtonnumber = TakaButtonnumber - AmountField; // Add the amount
    TakaButton.innerText = TakaButtonnumber; // Update the innerText of the element

   }
   else
   {
    alert('pin is wrong');
   }


});


// =======================================
// feature

document.getElementById('show-cashout').addEventListener('click',function(){

    document.getElementById('cashout-section').classList.remove('hidden');
    document.getElementById('cashin-section').classList.add('hidden');
});

document.getElementById('show-cashin').addEventListener('click',function(){

    
    document.getElementById('cashout-section').classList.add('hidden');
    document.getElementById('cashin-section').classList.remove('hidden');


});