
export interface CalculatorInput {
  label: string
  name: string
  type: "number" | "select" | "text"
  unit?: string
  options?: Array<{ value: string; label: string }>
}

export interface CalculatorHighlight {
  key: string // e.g., "health.bmi.highlights.0"
}

export interface CalculatorSection {
  id: string
  titleKey?: string
  contentKey?: string
  formulaKey?: string
  exampleKey?: string
  subsections?: CalculatorSection[]
  [key: string]: any
}

export interface HighlightsSection extends CalculatorSection {
  id: "highlights"
  titleKey: string
  highlights?: CalculatorHighlight[]
}

export interface CalculatorFAQ {
  qKey: string
  aKey: string
}

export interface Calculator {
  slug: string
  metaTitleKey: string
  metaDescriptionKey: string
  titleKey?: any
  category: string
  descriptionKey: string
  result?: {
    label?: string        // e.g., "finance.breakeven.result"
    explainKey?: string   // e.g., "finance.breakeven.resultExplain"
  }

  inputs?: CalculatorInput[]
  formulaId?: string

  sections?: CalculatorSection[]

  // ✅ NEW: Highlights at top level
  highlightsTitleKey?: string
  highlights?: CalculatorHighlight[]

  faqTitleKey?: string
  faqs?: CalculatorFAQ[]

  [key: string]: any
}



// CATEGORY WRAPPER
export interface CalculatorCategory {
  id: string
  metaTitle: string,
  metaDescription: string,
  name: string
  description: string
  calculators: Calculator[]
}