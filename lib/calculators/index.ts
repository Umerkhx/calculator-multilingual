import { healthCalculators } from "./health-calculators"
import { financeCalculators } from "./finance-calculators"
import type { Calculator, CalculatorCategory } from "./types"

export type { Calculator, CalculatorInput, CalculatorSection } from "./types"

export const allCalculatorCategories: CalculatorCategory[] = [
  {
    id: "health",
    name: "categories.health.name",
    calculators: healthCalculators,
    description: "categories.health.description"
  },
  {
    id: "finance",
    name: "categories.finance.name",
    calculators: financeCalculators,
    description: "categories.finance.description"
  },
]

export function getCalculatorBySlug(category: string, slug: string): Calculator | undefined {
  const categoryData = allCalculatorCategories.find((c) => c.id === category.toLowerCase())
  return categoryData?.calculators.find((calc) => calc.slug === slug)
}

export function getCalculatorsByCategory(category: string): Calculator[] {
  const categoryData = allCalculatorCategories.find((c) => c.id === category.toLowerCase())
  return categoryData?.calculators || []
}
