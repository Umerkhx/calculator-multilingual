export interface CalculatorInput {
  label: string // translation key like "inputs.waist"
  name: string
  type: "number" | "select" | "text"
  unit?: string
  options?: Array<{ value: string; label: string }> // for select inputs
}

export interface CalculatorSection {
  id: string
  title: string // translation key like "sections.intro.title"
  content: string // translation key like "sections.intro.content"
}

export interface Calculator {
  slug: string
  titleKey: string // translation key like "calculators.bodyFat.title"
  category: string
  descriptionKey: string // translation key like "calculators.bodyFat.description"
  inputs: CalculatorInput[]
  formulaId: string
  sections: CalculatorSection[]
}

export interface CalculatorCategory {
  description: string
  id: string
  name: string // translation key like "categories.health"
  calculators: Calculator[]
}
