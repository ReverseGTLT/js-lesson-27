const form = document.forms.myForm;
const table = document.querySelector("#table");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const elements = form.elements;
    const [name, surname, birthday, male, female, city, eng, uk, address] =
        elements;
    console.log(elements);
    const infoArgs = [name, surname, birthday, city, address];
    const radCheckArgs = [male, female, eng, uk];
    for (const arg of infoArgs) {
        const row = table.insertRow();
        const cell = row.insertCell();
        cell.innerText = `${arg.name}: ${arg.value}`;
    }
    for (const arg of radCheckArgs) {
        if (arg.checked === true) {
            const row = table.insertRow();
            const cell = row.insertCell();
            cell.innerText = `${arg.name}: ${arg.nextElementSibling.innerText}`;
        }
    }
    form.style.visibility = "hidden";
});