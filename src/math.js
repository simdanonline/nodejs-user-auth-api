const calculateTip = (total, tipPercent = 0.2 ) => total + (total * tipPercent)


const fahrenheitToCelcius = (temp) => (temp - 32) / 1.8

const CelciusToFahrenheit = (temp) =>  (temp * 1.8) + 32

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if(a < 0 || b < 0){
                return reject('Numbers must be positive')
            }
            resolve(a + b)
        }, 2000);
    })
}

module.exports = {
    calculateTip,
    fahrenheitToCelcius,
    CelciusToFahrenheit,
    add
}