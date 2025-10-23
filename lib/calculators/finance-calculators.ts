import type { Calculator } from "./types"

export const financeCalculators: Calculator[] = [
  {
    slug: "loan-calculator",
    titleKey: "finance.loan.title",
    category: "Finance",
    descriptionKey: "finance.loan.desc",
    inputs: [
      { label: "finance.loan.principal", name: "principal", type: "number", unit: "$" },
      { label: "finance.loan.rate", name: "rate", type: "number", unit: "%" },
      { label: "finance.loan.years", name: "years", type: "number", unit: "years" },
    ],
    formulaId: "loan",
    sections: [
      {
        id: "intro",
        title: "finance.loan.about",
        content: "finance.loan.aboutText",
      },
      {
        id: "formula",
        title: "finance.loan.formula",
        content: "finance.loan.formulaText",
      },
    ],
  },
  {
    slug: "compound-interest-calculator",
    titleKey: "finance.compound.title",
    category: "Finance",
    descriptionKey: "finance.compound.desc",
    inputs: [
      { label: "finance.compound.principal", name: "principal", type: "number", unit: "$" },
      { label: "finance.compound.rate", name: "rate", type: "number", unit: "%" },
      { label: "finance.compound.years", name: "years", type: "number", unit: "years" },
      { label: "finance.compound.compounds", name: "compounds", type: "number", unit: "times/year" },
    ],
    formulaId: "compound",
    sections: [
      {
        id: "intro",
        title: "finance.compound.about",
        content: "finance.compound.aboutText",
      },
      {
        id: "formula",
        title: "finance.compound.formula",
        content: "finance.compound.formulaText",
      },
    ],
  },
  {
    slug: "savings-calculator",
    titleKey: "finance.savings.title",
    category: "Finance",
    descriptionKey: "finance.savings.desc",
    inputs: [
      { label: "finance.savings.initial", name: "initial", type: "number", unit: "$" },
      { label: "finance.savings.monthly", name: "monthly", type: "number", unit: "$" },
      { label: "finance.savings.rate", name: "rate", type: "number", unit: "%" },
      { label: "finance.savings.years", name: "years", type: "number", unit: "years" },
    ],
    formulaId: "savings",
    sections: [
      {
        id: "intro",
        title: "finance.savings.about",
        content: "finance.savings.aboutText",
      },
      {
        id: "formula",
        title: "finance.savings.formula",
        content: "finance.savings.formulaText",
      },
    ],
  },
  {
    slug: "mortgage-calculator",
    titleKey: "finance.mortgage.title",
    category: "Finance",
    descriptionKey: "finance.mortgage.desc",
    inputs: [
      { label: "finance.mortgage.homePrice", name: "homePrice", type: "number", unit: "$" },
      { label: "finance.mortgage.downPayment", name: "downPayment", type: "number", unit: "$" },
      { label: "finance.mortgage.rate", name: "rate", type: "number", unit: "%" },
      { label: "finance.mortgage.years", name: "years", type: "number", unit: "years" },
    ],
    formulaId: "mortgage",
    sections: [
      {
        id: "intro",
        title: "finance.mortgage.about",
        content: "finance.mortgage.aboutText",
      },
      {
        id: "formula",
        title: "finance.mortgage.formula",
        content: "finance.mortgage.formulaText",
      },
    ],
  },
  {
    slug: "roi-calculator",
    titleKey: "finance.roi.title",
    category: "Finance",
    descriptionKey: "finance.roi.desc",
    inputs: [
      { label: "finance.roi.investment", name: "investment", type: "number", unit: "$" },
      { label: "finance.roi.gain", name: "gain", type: "number", unit: "$" },
    ],
    formulaId: "roi",
    sections: [
      {
        id: "intro",
        title: "finance.roi.about",
        content: "finance.roi.aboutText",
      },
      {
        id: "formula",
        title: "finance.roi.formula",
        content: "finance.roi.formulaText",
      },
    ],
  },
  {
    slug: "breakeven-calculator",
    titleKey: "finance.breakeven.title",
    category: "Finance",
    descriptionKey: "finance.breakeven.desc",
    inputs: [
      { label: "finance.breakeven.fixedCosts", name: "fixedCosts", type: "number", unit: "$" },
      { label: "finance.breakeven.variableCost", name: "variableCost", type: "number", unit: "$" },
      { label: "finance.breakeven.price", name: "price", type: "number", unit: "$" },
    ],
    formulaId: "breakeven",
    sections: [
      {
        id: "intro",
        title: "finance.breakeven.about",
        content: "finance.breakeven.aboutText",
      },
      {
        id: "formula",
        title: "finance.breakeven.formula",
        content: "finance.breakeven.formulaText",
      },
    ],
  },
  {
    slug: "discount-calculator",
    titleKey: "finance.discount.title",
    category: "Finance",
    descriptionKey: "finance.discount.desc",
    inputs: [
      { label: "finance.discount.originalPrice", name: "originalPrice", type: "number", unit: "$" },
      { label: "finance.discount.discountPercent", name: "discountPercent", type: "number", unit: "%" },
    ],
    formulaId: "discount",
    sections: [
      {
        id: "intro",
        title: "finance.discount.about",
        content: "finance.discount.aboutText",
      },
      {
        id: "formula",
        title: "finance.discount.formula",
        content: "finance.discount.formulaText",
      },
    ],
  },
  {
    slug: "tip-calculator",
    titleKey: "finance.tip.title",
    category: "Finance",
    descriptionKey: "finance.tip.desc",
    inputs: [
      { label: "finance.tip.billAmount", name: "billAmount", type: "number", unit: "$" },
      { label: "finance.tip.tipPercent", name: "tipPercent", type: "number", unit: "%" },
      { label: "finance.tip.people", name: "people", type: "number", unit: "people" },
    ],
    formulaId: "tip",
    sections: [
      {
        id: "intro",
        title: "finance.tip.about",
        content: "finance.tip.aboutText",
      },
      {
        id: "formula",
        title: "finance.tip.formula",
        content: "finance.tip.formulaText",
      },
    ],
  },
  {
    slug: "inflation-calculator",
    titleKey: "finance.inflation.title",
    category: "Finance",
    descriptionKey: "finance.inflation.desc",
    inputs: [
      { label: "finance.inflation.amount", name: "amount", type: "number", unit: "$" },
      { label: "finance.inflation.years", name: "years", type: "number", unit: "years" },
      { label: "finance.inflation.rate", name: "rate", type: "number", unit: "%" },
    ],
    formulaId: "inflation",
    sections: [
      {
        id: "intro",
        title: "finance.inflation.about",
        content: "finance.inflation.aboutText",
      },
      {
        id: "formula",
        title: "finance.inflation.formula",
        content: "finance.inflation.formulaText",
      },
    ],
  },
  {
    slug: "currency-converter",
    titleKey: "finance.currency.title",
    category: "Finance",
    descriptionKey: "finance.currency.desc",
    inputs: [
      { label: "finance.currency.amount", name: "amount", type: "number", unit: "amount" },
      { label: "finance.currency.fromCurrency", name: "fromCurrency", type: "text" },
      { label: "finance.currency.toCurrency", name: "toCurrency", type: "text" },
    ],
    formulaId: "currency",
    sections: [
      {
        id: "intro",
        title: "finance.currency.about",
        content: "finance.currency.aboutText",
      },
      {
        id: "formula",
        title: "finance.currency.formula",
        content: "finance.currency.formulaText",
      },
    ],
  },
]
