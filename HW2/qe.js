function findingRoots(a, b, c) {
    var d = b * b - 4 * a * c;
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    var newRow = document.createElement("tr");
    newRow.addEventListener('click', () => {
        newRow.remove();
    });

    if (a == 0) {
        newRow.innerHTML = "<td style='color : red' colspan='2'>Error</td><td style='color : red'>a can't be 0 !</td>";

    } else if (b == 0 && c == 0) {
        newRow.innerHTML = "<td>" + a + "x<sup>2</sup></td>" + "<td colspan='2'>" + '0' + "</td>";


    } else if (b == 0) {
        newRow.innerHTML = "<td>" + a + "x<sup>2</sup> +" + c + "</td>";

        if (isNaN(x1)) {
            newRow.innerHTML += "<td colspan='2'>" + "Нет корней" + "</td>";
        } else {
            if (x1 > x2) newRow.innerHTML += "<td width=50%>" + x1 + "</td>" + "<td width=50%>" + x2 + "</td>";
            else newRow.innerHTML += "<td width=50%>" + x2 + "</td>" + "<td width=50%>" + x1 + "</td>";
        }

    } else if (c == 0) {
        newRow.innerHTML = "<td>" + a + "x<sup>2</sup> +" + b + "x </td>";

        if (isNaN(x1)) {
            newRow.innerHTML += "<td colspan='2'>" + "Нет корней" + "</td>";
        } else if (x1 == x2) newRow.innerHTML += "<td colspan='2'>" + x1 + "</td>";

        else {
            if (x1 > x2) newRow.innerHTML += "<td width=50%>" + x1 + "</td>" + "<td width=50%>" + x2 + "</td>";
            else newRow.innerHTML += "<td width=50%>" + x2 + "</td>" + "<td width=50%>" + x1 + "</td>";
        }

    } else {
        newRow.innerHTML = "<td>" + a + "x<sup>2</sup> +" + b + "x +" + c + "</td>";
        if (isNaN(x1)) newRow.innerHTML += "<td colspan='2'>" + "Нет корней" + "</td>";
        else if (x1 == x2) newRow.innerHTML += "<td colspan='2'>" + x1 + "</td>";

        else {
            if (x1 > x2) newRow.innerHTML += "<td width=50%>" + x1 + "</td>" + "<td width=50%>" + x2 + "</td>";
            else newRow.innerHTML += "<td width=50%>" + x2 + "</td>" + "<td width=50%>" + x1 + "</td>";
        }
    }

    return newRow;
}

let table = document.getElementById('result');
let tbody = table.children[1];

function enter() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var solution = findingRoots(a, b, c);
    tbody.insertBefore(solution, tbody.firstElementChild);
}