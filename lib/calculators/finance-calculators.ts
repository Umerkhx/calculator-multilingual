import type { Calculator } from "./types"

export const financeCalculators: Calculator[] = [
  {
    slug: "loan-calculator",
    titleKey: "calculators.loanCalculator.title",
    category: "Finance",
    descriptionKey: "calculators.loanCalculator.description",
    inputs: [
      {
        label: "inputs.principal",
        name: "principal",
        type: "number",
        unit: "$",
      },
      { label: "inputs.rate", name: "rate", type: "number", unit: "%" },
      { label: "inputs.years", name: "years", type: "number", unit: "years" },
    ],
    formulaId: "loan",
    sections: [
      {
        id: "intro",
        title: "sections.loan.intro.title",
        content: "sections.loan.intro.content",
      },
      {
        id: "formula",
        title: "sections.loan.formula.title",
        content: "sections.loan.formula.content",
      },
    ],
  },
]
