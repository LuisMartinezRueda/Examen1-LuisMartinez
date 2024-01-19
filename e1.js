function OnClick(row, col) {
    marcarBoton(row, col);
    marcarBoton(row-1, col);
    marcarBoton(row+1, col);
    marcarBoton(row, col-1);
    marcarBoton(row, col+1);

}

function marcarBoton(row, col) {
    if (row >= 0 && row < 8 && col >= 0 && col < 8) {
        const buttonId = `${row}.${col}`;
        const boton = document.getElementById(buttonId);
        boton.innerHTML = 'X';
    }
}



main();
