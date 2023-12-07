
const amountInput = document.querySelector("#amount");
const firstCurrencyOption = document.querySelector("#firstCurrencyOption");
const secondCurrencyOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");
const convertBtn = document.querySelector("#convertButton")

const currency = new Currency();

runEventListeners();

function runEventListeners(){
    convertBtn.addEventListener("click", exchange);
}

async function exchange(){
    const amount = Number(amountInput.value.trim());
    const firstOptionValue = firstCurrencyOption.options[firstCurrencyOption.selectedIndex].textContent;

    const secondOptionValue = secondCurrencyOption.options[secondCurrencyOption.selectedIndex].textContent;

    currency.convert(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
        resultInput.setAttribute("placeholder", result.toFixed(4));
    })

    ;
}