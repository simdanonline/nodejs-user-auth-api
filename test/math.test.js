const {calculateTip, fahrenheitToCelcius, add} = require('../src/math')

const CelciusToFahrenheit = (temp) =>  (temp * 1.8) + 32

test('should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('should calculate total with default tip', () => {
  const total = calculateTip(10)
  expect(total).toBe(12)
})

test('should convert 32 F to celcius', () => {
    const result = fahrenheitToCelcius(32)
    expect(result).toBe(0)
})

test('should convert celcius to F', () => {
    const result = CelciusToFahrenheit(0)
    expect(result).toBe(32)
})

test('Async test ', (done) => {
  setTimeout(() => {
      expect(1).toBe(1)
      done()
  }, 2000);
})

test('should add', (done) => {
  add(2, 3).then((sum)=>{
      expect(sum).toBe(5)
      done()
  })
})


test('should  add two numbers async/await', async() => {
  const sum = await add(10, 22)
  expect(sum).toBe(32)
})
