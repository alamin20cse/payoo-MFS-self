

document.getElementById('add-button').addEventListener('click',function(event){
    let sum=9400;
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