import { healthCalculators } from "./health-calculators"
import { financeCalculators } from "./finance-calculators"
import type { Calculator, CalculatorCategory } from "./types"

export type { Calculator, CalculatorInput, CalculatorSection } from "./types"

export const allCalculatorCategories: CalculatorCategory[] = [
  {
    id: "health",
    name: "categories.health",
    calculators: healthCalculators,
  },
  {
    id: "finance",
    name: "categories.finance",
    calculators: financeCalculators,
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
