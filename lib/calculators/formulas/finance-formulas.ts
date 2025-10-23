export const financeFormulas = {
  loan: (inputs: Record<string, number | string>) => {
    const principal = Number(inputs.principal)
    const rate = Number(inputs.rate) / 100 / 12
    const years = Number(inputs.years)
    const n = years * 12
    const payment = (principal * (rate * Math.pow(1 + rate, n))) / (Math.pow(1 + rate, n) - 1)
    return payment.toFixed(2)
  },
  compound: (inputs: Record<string, number | string>) => {
    const principal = Number(inputs.principal)
    const rate = Number(inputs.rate) / 100
    const years = Number(inputs.years)
    const compounds = Number(inputs.compounds)
    const amount = principal * Math.pow(1 + rate / compounds, compounds * years)
    return amount.toFixed(2)
  },
  savings: (inputs: Record<string, number | string>) => {
    const initial = Number(inputs.initial)
    const monthly = Number(inputs.monthly)
    const rate = Number(inputs.rate) / 100 / 12
    const years = Number(inputs.years)
    const months = years * 12
    const futureValue = initial * Math.pow(1 + rate, months) + (monthly * (Math.pow(1 + rate, months) - 1)) / rate
    return futureValue.toFixed(2)
  },
  mortgage: (inputs: Record<string, number | string>) => {
    const homePrice = Number(inputs.homePrice)
    const downPayment = Number(inputs.downPayment)
    const principal = homePrice - downPayment
    const rate = Number(inputs.rate) / 100 / 12
    const years = Number(inputs.years)
    const n = years * 12
    const payment = (principal * (rate * Math.pow(1 + rate, n))) / (Math.pow(1 + rate, n) - 1)
    return payment.toFixed(2)
  },
  roi: (inputs: Record<string, number | string>) => {
    const investment = Number(inputs.investment)
    const gain = Number(inputs.gain)
    return ((gain / investment) * 100).toFixed(2)
  },
  breakeven: (inputs: Record<string, number | string>) => {
    const fixedCosts = Number(inputs.fixedCosts)
    const variableCost = Number(inputs.variableCost)
    const price = Number(inputs.price)
    return Math.ceil(fixedCosts / (price - variableCost))
  },
  discount: (inputs: Record<string, number | string>) => {
    const originalPrice = Number(inputs.originalPrice)
    const discountPercent = Number(inputs.discountPercent)
    return (originalPrice * (1 - discountPercent / 100)).toFixed(2)
  },
  tip: (inputs: Record<string, number | string>) => {
    const billAmount = Number(inputs.billAmount)
    const tipPercent = Number(inputs.tipPercent)
    const people = Number(inputs.people)
    const tip = billAmount * (tipPercent / 100)
    const total = billAmount + tip
    const perPerson = total / people
    return `Tip: $${tip.toFixed(2)}, Total: $${total.toFixed(2)}, Per Person: $${perPerson.toFixed(2)}`
  },
  inflation: (inputs: Record<string, number | string>) => {
    const amount = Number(inputs.amount)
    const years = Number(inputs.years)
    const rate = Number(inputs.rate) / 100
    return (amount * Math.pow(1 + rate, years)).toFixed(2)
  },
}
