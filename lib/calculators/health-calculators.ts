import type { Calculator } from "./types"

export const healthCalculators: Calculator[] = [
  {
    slug: "body-fat-calculator",
    titleKey: "calculators.bodyFat.title",
    category: "Health",
    descriptionKey: "calculators.bodyFat.description",
    inputs: [
      { label: "inputs.waist", name: "waist", type: "number", unit: "cm" },
      { label: "inputs.neck", name: "neck", type: "number", unit: "cm" },
      { label: "inputs.height", name: "height", type: "number", unit: "cm" },
      {
        label: "inputs.gender",
        name: "gender",
        type: "select",
        options: [
          { value: "male", label: "inputs.genderMale" },
          { value: "female", label: "inputs.genderFemale" },
        ],
      },
    ],
    formulaId: "body-fat",
    sections: [
      {
        id: "intro",
        title: "sections.bodyFat.intro.title",
        content: "sections.bodyFat.intro.content",
      },
      {
        id: "formula",
        title: "sections.bodyFat.formula.title",
        content: "sections.bodyFat.formula.content",
      },
      {
        id: "usage",
        title: "sections.bodyFat.usage.title",
        content: "sections.bodyFat.usage.content",
      },
    ],
  },
  {
    slug: "bmi-calculator",
    titleKey: "calculators.bmi.title",
    category: "Health",
    descriptionKey: "calculators.bmi.description",
    inputs: [
      { label: "inputs.weight", name: "weight", type: "number", unit: "kg" },
      { label: "inputs.height", name: "height", type: "number", unit: "cm" },
    ],
    formulaId: "bmi",
    sections: [
      {
        id: "intro",
        title: "sections.bmi.intro.title",
        content: "sections.bmi.intro.content",
      },
      {
        id: "formula",
        title: "sections.bmi.formula.title",
        content: "sections.bmi.formula.content",
      },
    ],
  },
]
