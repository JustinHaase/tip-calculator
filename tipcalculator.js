//create variable for bill amount
function calculateTip(){
let billamt = document.getElementById('billamt').Value;
let serviceQual = document.getElementById('serviceQual').Value;
let peopleamt = document.getElementById('peopleamt').Value;

if (billamt === "" || serviceQual == 0) {
    alert('please enter bill amount and quality of service!');
    return;
}

//check to see if input is empty or less than or <= 1
if(peopleamt === "" || peopleamt < 1){
    alert('Please enter how many people are splitting the bill!')
}

//calculate tip
let total = (billamt * serviceQual) / peopleamt;
document.getElementById('tip').innerHTML = total;
}