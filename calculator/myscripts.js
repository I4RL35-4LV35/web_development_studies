function _action() {
    let n1 = document.getElementById("tn1");
    let n2 = document.getElementById("tn2");
    let op = document.getElementById("opt");
    let re = document.getElementById("res");

    if (n1.value.length == "" || n2.value.length == "") {
        alert("please provide the values!");
    } else {
        let nu1 = Number(n1.value);
        let nu2 = Number(n2.value);

        if (op.value == "+") {
            re.innerHTML = `<p>result: <mark>${nu1} + ${nu2} = ${nu1 + nu2
                }</mark></p>`;
        } else if (op.value == "-") {
            re.innerHTML = `<p>result: <mark>${nu1} - ${nu2} = ${nu1 - nu2
                }</mark></p>`;
        } else if (op.value == "*") {
            re.innerHTML = `<p>result: <mark>${nu1} x ${nu2} = ${nu1 * nu2
                }</mark></p>`;
        } else if (op.value == "/") {
            re.innerHTML = `<p>result: <mark>${nu1} / ${nu2} = ${nu1 / nu2
                }</mark></p>`;
        }
    }
}
