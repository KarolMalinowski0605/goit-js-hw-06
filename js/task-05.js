const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input',() => {
    const name = inputName.value;
    if( name.length > 0 ) {
        outputName.textContent = name;
    } else {
        outputName.textContent = 'Anonymous';
    }
} );






