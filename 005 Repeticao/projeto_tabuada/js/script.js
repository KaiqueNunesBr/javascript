function calcularTabuada() {
    let num = document.getElementById('txtNum').value;

    if (num.trim() === "") {
        alert("Por favor, digite um número!");
    } else {
        num = Number(num);
        let tab = document.getElementById('seltab');
        tab.innerHTML = ""; // Limpar opções anteriores, se houver

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${num} x ${c} = ${num * c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
        }
    }
}
