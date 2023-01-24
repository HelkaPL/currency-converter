{
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
            const inCurrency = document.querySelector(".js-inputCurrency").value
            const outCurrency = document.querySelector(".js-outputCurrency").value
            checkExchangeRatio(inCurrency, outCurrency)
            const outValue = inValue * exchangeRatio
            const outputValue = document.querySelector(".js-outputValue")
            outputValue.innerText = outValue.toFixed(2)
    }
    const onFormSubmit = e => {
        e.preventDefault();
        const inValue = document.querySelector(".js-inputValue").value
        exchangeCurrency(inValue);
    }
    const init = () => {
        const form = document.querySelector(".exchanger")
        form.addEventListener('submit', onFormSubmit);
    }

    init()
}