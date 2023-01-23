const inputValue = document.querySelector(".js-inputValue")
const outputValue = document.querySelector(".js-outputValue")
const form = document.querySelector(".exchanger")

const checkExchangeRatio = (inCurrency, outCurrency) => {
    if(inCurrency == outCurrency){
        exchangeRatio = 1
    } else {
    exchangeDirection = `${inCurrency}->${outCurrency}`
    switch(exchangeDirection) {
        case 'EUR->PLN':
            exchangeRatio = 4.7186
            break;
        case 'PLN->EUR':
            exchangeRatio = 1 / 4.7186
            break;
    }
    }
}

const exchangeCurrency = (inValue) => {
    inCurrency = document.querySelector(".js-inputCurrency").value
    outCurrency = document.querySelector(".js-outputCurrency").value
    checkExchangeRatio(inCurrency, outCurrency)
    const outValue = inValue * exchangeRatio 
    outputValue.value = outValue.toFixed(2)
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const inValue = inputValue.value
    exchangeCurrency(inValue);
});