import type { Calculator } from "./types"

export const healthCalculators: Calculator[] = [
  {
    slug: "body-fat-calculator",
    titleKey: "health.bodyFat.title",
    category: "Health",
    descriptionKey: "health.bodyFat.desc",
    inputs: [
      { label: "health.bodyFat.waist", name: "waist", type: "number", unit: "cm" },
      { label: "health.bodyFat.neck", name: "neck", type: "number", unit: "cm" },
      { label: "health.bodyFat.height", name: "height", type: "number", unit: "cm" },
      {
        label: "health.bodyFat.gender",
        name: "gender",
        type: "select",
        options: [
          { value: "male", label: "health.bodyFat.male" },
          { value: "female", label: "health.bodyFat.female" },
        ],
      },
    ],
    formulaId: "body-fat",
    sections: [
      {
        id: "intro",
        title: "health.bodyFat.about",
        content: "health.bodyFat.aboutText",
      },
      {
        id: "formula",
        title: "health.bodyFat.formula",
        content: "health.bodyFat.formulaText",
      },
    ],
  },
  {
    slug: "bmi-calculator",
    titleKey: "health.bmi.title",
    category: "Health",
    descriptionKey: "health.bmi.desc",
    inputs: [
      { label: "health.bmi.weight", name: "weight", type: "number", unit: "kg" },
      { label: "health.bmi.height", name: "height", type: "number", unit: "cm" },
    ],
    formulaId: "bmi",
    sections: [
      {
        id: "intro",
        title: "health.bmi.about",
        content: "health.bmi.aboutText",
      },
      {
        id: "formula",
        title: "health.bmi.formula",
        content: "health.bmi.formulaText",
      },
    ],
  },
  {
    slug: "calorie-calculator",
    titleKey: "health.calories.title",
    category: "Health",
    descriptionKey: "health.calories.desc",
    inputs: [
      { label: "health.calories.age", name: "age", type: "number", unit: "years" },
      { label: "health.calories.weight", name: "weight", type: "number", unit: "kg" },
      { label: "health.calories.height", name: "height", type: "number", unit: "cm" },
      {
        label: "health.calories.activity",
        name: "activity",
        type: "select",
        options: [
          { value: "1.2", label: "health.calories.sedentary" },
          { value: "1.375", label: "health.calories.light" },
          { value: "1.55", label: "health.calories.moderate" },
          { value: "1.725", label: "health.calories.active" },
        ],
      },
    ],
    formulaId: "calories",
    sections: [
      {
        id: "intro",
        title: "health.calories.about",
        content: "health.calories.aboutText",
      },
      {
        id: "formula",
        title: "health.calories.formula",
        content: "health.calories.formulaText",
      },
    ],
  },
  {
    slug: "water-intake-calculator",
    titleKey: "health.waterIntake.title",
    category: "Health",
    descriptionKey: "health.waterIntake.desc",
    inputs: [
      { label: "health.waterIntake.weight", name: "weight", type: "number", unit: "kg" },
      { label: "health.waterIntake.activity", name: "activity", type: "number", unit: "0-2" },
    ],
    formulaId: "water",
    sections: [
      {
        id: "intro",
        title: "health.waterIntake.about",
        content: "health.waterIntake.aboutText",
      },
      {
        id: "formula",
        title: "health.waterIntake.formula",
        content: "health.waterIntake.formulaText",
      },
    ],
  },
  {
    slug: "running-pace-calculator",
    titleKey: "health.pace.title",
    category: "Health",
    descriptionKey: "health.pace.desc",
    inputs: [
      { label: "health.pace.distance", name: "distance", type: "number", unit: "km" },
      { label: "health.pace.time", name: "time", type: "number", unit: "minutes" },
    ],
    formulaId: "pace",
    sections: [
      {
        id: "intro",
        title: "health.pace.about",
        content: "health.pace.aboutText",
      },
      {
        id: "formula",
        title: "health.pace.formula",
        content: "health.pace.formulaText",
      },
    ],
  },
  {
    slug: "heart-rate-calculator",
    titleKey: "health.heartRate.title",
    category: "Health",
    descriptionKey: "health.heartRate.desc",
    inputs: [
      { label: "health.heartRate.age", name: "age", type: "number", unit: "years" },
      { label: "health.heartRate.restingHR", name: "restingHR", type: "number", unit: "bpm" },
    ],
    formulaId: "heart-rate",
    sections: [
      {
        id: "intro",
        title: "health.heartRate.about",
        content: "health.heartRate.aboutText",
      },
      {
        id: "formula",
        title: "health.heartRate.formula",
        content: "health.heartRate.formulaText",
      },
    ],
  },
  {
    slug: "protein-calculator",
    titleKey: "health.protein.title",
    category: "Health",
    descriptionKey: "health.protein.desc",
    inputs: [
      { label: "health.protein.weight", name: "weight", type: "number", unit: "kg" },
      {
        label: "health.protein.goal",
        name: "goal",
        type: "select",
        options: [
          { value: "0.8", label: "health.protein.maintenance" },
          { value: "1.9", label: "health.protein.muscle" },
          { value: "1.4", label: "health.protein.loss" },
        ],
      },
    ],
    formulaId: "protein",
    sections: [
      {
        id: "intro",
        title: "health.protein.about",
        content: "health.protein.aboutText",
      },
      {
        id: "formula",
        title: "health.protein.formula",
        content: "health.protein.formulaText",
      },
    ],
  },
  {
    slug: "tdee-calculator",
    titleKey: "health.tdee.title",
    category: "Health",
    descriptionKey: "health.tdee.desc",
    inputs: [
      { label: "health.tdee.age", name: "age", type: "number", unit: "years" },
      { label: "health.tdee.weight", name: "weight", type: "number", unit: "kg" },
      { label: "health.tdee.height", name: "height", type: "number", unit: "cm" },
      {
        label: "health.tdee.activity",
        name: "activity",
        type: "select",
        options: [
          { value: "1.2", label: "health.tdee.sedentary" },
          { value: "1.375", label: "health.tdee.light" },
          { value: "1.55", label: "health.tdee.moderate" },
          { value: "1.725", label: "health.tdee.active" },
        ],
      },
    ],
    formulaId: "tdee",
    sections: [
      {
        id: "intro",
        title: "health.tdee.about",
        content: "health.tdee.aboutText",
      },
      {
        id: "formula",
        title: "health.tdee.formula",
        content: "health.tdee.formulaText",
      },
    ],
  },
  {
    slug: "macro-calculator",
    titleKey: "health.macros.title",
    category: "Health",
    descriptionKey: "health.macros.desc",
    inputs: [
      { label: "health.macros.calories", name: "calories", type: "number", unit: "kcal" },
      {
        label: "health.macros.diet",
        name: "diet",
        type: "select",
        options: [
          { value: "balanced", label: "health.macros.balanced" },
          { value: "lowcarb", label: "health.macros.lowCarb" },
          { value: "highprotein", label: "health.macros.highProtein" },
        ],
      },
    ],
    formulaId: "macros",
    sections: [
      {
        id: "intro",
        title: "health.macros.about",
        content: "health.macros.aboutText",
      },
      {
        id: "formula",
        title: "health.macros.formula",
        content: "health.macros.formulaText",
      },
    ],
  },
  {
    slug: "body-fat-percentage",
    titleKey: "health.bfp.title",
    category: "Health",
    descriptionKey: "health.bfp.desc",
    inputs: [
      { label: "health.bfp.waist", name: "waist", type: "number", unit: "cm" },
      { label: "health.bfp.hip", name: "hip", type: "number", unit: "cm" },
      { label: "health.bfp.neck", name: "neck", type: "number", unit: "cm" },
    ],
    formulaId: "bfp",
    sections: [
      {
        id: "intro",
        title: "health.bfp.about",
        content: "health.bfp.aboutText",
      },
      {
        id: "formula",
        title: "health.bfp.formula",
        content: "health.bfp.formulaText",
      },
    ],
  },
]
