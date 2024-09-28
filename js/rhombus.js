//Rhombus

function calculateRhombusArea(){
    const d1Input = document.getElementById('rhombus-d1');
    const d1Text = d1Input.value
    const d1 = parseFloat(d1Text);

    const d2Input = document.getElementById('rhombus-d1');
    const d2Text = d2Input.value
    const d2 = parseFloat(d2Text);
   

    //calculate
    const area = d1 * d2;

    const final = document.getElementById('rhombus-area');
    final.innerHTML = area;
}