export interface CalculatorInput {
  label: string 
  name: string
  type: "number" | "select" | "text"
  unit?: string
  options?: Array<{ value: string; label: string }> 
}

export interface CalculatorSection {
  id: string
  titleKey: string 
  contentKey?: string 
}

export interface CalculatorFAQ {
  qKey: string 
  aKey: string 
}

export interface Calculator {
  slug: string
  metaTitleKey: string
  metaDescriptionKey: string
  titleKey: string
  category: string
  descriptionKey: string
  inputs: CalculatorInput[]
  formulaId: string
  sections: CalculatorSection[]
  faqTitleKey?: any 
  faqs?: CalculatorFAQ[]
}

export interface CalculatorCategory {
  description: string
  id: string
  name: string 
  calculators: Calculator[]
}