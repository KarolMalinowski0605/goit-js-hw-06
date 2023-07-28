
let counterValue = 0;

const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");
const span = document.querySelector('#value');

function updateValue(){
    span.textContent = counterValue;
}

decrementButton.addEventListener('click',handleClick);
incrementButton.addEventListener('click', handleClick);


function handleClick(event){
    const change = event.target.dataset.action;

    if(change === 'increment'){
        counterValue +=1;
    }else if(change === 'decrement'){
        counterValue -=1;
    }
    updateValue()
}



