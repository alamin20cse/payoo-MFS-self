

let sum=9400;
document.getElementById('add-button').addEventListener('click',function(event){
   
    event.preventDefault();

   const TakaButton=document.getElementById('taka-button');
   const AmountField=Number(document.getElementById('amount-field').value);

   
   const PinButton=document.getElementById('pin-button').value;

   if(PinButton==='123')
   {
    sum=sum+AmountField;
    TakaButton.innerText=sum;

   }
   else
   {
    alert('pin is wrong');
   }


});



// cash out

let dis=9400;
document.getElementById('cashout-button').addEventListener('click',function(event){
   
    event.preventDefault();

   const TakaButton=document.getElementById('taka-button');
   const AmountField=Number(document.getElementById('cashout-amount-field').value);

   
   const PinButton=document.getElementById('cashout-pin-button').value;

   if(PinButton==='123')
   {
    dis=dis-AmountField;
    TakaButton.innerText=dis;

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