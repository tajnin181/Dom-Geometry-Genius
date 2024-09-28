function calculatePentagonArea(){
    const pInput = document.getElementById('Pentagon-p');
    const pText = pInput.value
    const p = parseFloat(pText);

    const bInput = document.getElementById('Pentagon-b');
    const bText = bInput.value
    const b = parseFloat(bText);
   

    //calculate
    const area = 0.5 * p * b;

    const final = document.getElementById('Pentagon-area');
    final.innerHTML = area;
}