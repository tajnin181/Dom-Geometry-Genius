function calculateEllipseArea(){
    const a = getInputValue('Ellipse-a');
    const b = getInputValue('Ellipse-b')

    const area = 3.1416 * a * b;

    setInnerText('ellipse- area', area);
}

