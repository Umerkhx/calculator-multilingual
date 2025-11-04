import type { Calculator } from "./types"

export const healthCalculators: Calculator[] = [
 {
  slug: "body-fat-calculator",
  metaTitleKey: "health.bodyFat.title",
  metaDescriptionKey: "health.bodyFat.desc",
  titleKey: "health.bodyFat.title",
  category: "Health",
  descriptionKey: "health.bodyFat.desc",
  formulaId: "bodyFat",

  toc: [
    { id: "why-use", labelKey: "health.bodyFat.tocAbout" },
    { id: "how-works", labelKey: "health.bodyFat.tochow" },
    { id: "why-track", labelKey: "health.bodyFat.toctrack" },
    { id: "understanding", labelKey: "health.bodyFat.tocunderstanding" },
    { id: "examples", labelKey: "health.bodyFat.tocexample" },
    { id: "interpret", labelKey: "health.bodyFat.tocinterpret" },
    { id: "reliable", labelKey: "health.bodyFat.tocreliable" },
  ],

  inputs: [
    { label: "health.bodyFat.gender", name: "gender", type: "select", options: [
      { value: "male", label: "health.bodyFat.male" },
      { value: "female", label: "health.bodyFat.female" },
    ]},
    { label: "health.bodyFat.height", name: "height", type: "number", unit: "cm" },
    { label: "health.bodyFat.weight", name: "weight", type: "number", unit: "kg" },
    { label: "health.bodyFat.waist", name: "waist", type: "number", unit: "cm" },
    { label: "health.bodyFat.neck", name: "neck", type: "number", unit: "cm" },
    { label: "health.bodyFat.hip", name: "hip", type: "number", unit: "cm" },
  ],

  heading: "health.bodyFat.heading",

  sections: [
    {
      id: "about",
      titleKey: "health.bodyFat.section1Title",
      contentKey: "health.bodyFat.section1Content",
      linkparacontent: "health.bodyFat.section1ExtraText",
      linkparaKey: "health.bodyFat.section1Link",
      linkparaslug: "tdee-calculator",
      subsections: [
        {
          id: "why-use",
          titleKey: "health.bodyFat.section1Sub1Title",
          introKey: "health.bodyFat.section1Sub1Intro",
          listKey: "health.bodyFat.section1Sub1List",
          contentKey: "health.bodyFat.section1Sub1Text",
        },
        {
          id: "how-works",
          titleKey: "health.bodyFat.section1Sub2Title",
          introKey: "health.bodyFat.section1Sub2Intro",
          listKey: "health.bodyFat.section1Sub2List",
          contentKey: "health.bodyFat.section1Sub2Text",
          lists: ["health.bodyFat.section1Sub2EndList"],
          endKey: "health.bodyFat.section1Sub2End",
        },
        {
          id: "why-track",
          titleKey: "health.bodyFat.section1Sub3Title",
          introKey: "health.bodyFat.section1Sub3Intro",
          listKey: "health.bodyFat.section1Sub3List",
          endKey: "health.bodyFat.section1Sub3End",
        },
      ],
    },
    {
      id: "formula",
      titleKey: "health.bodyFat.formulatitle",
      contentKey: "health.bodyFat.formulaText",
      subsections: [
        {
          id: "navy-formula",
          titleKey: "health.bodyFat.formulasubtitle1",
          formulas: [
            "health.bodyFat.formulaMale",
            "health.bodyFat.formulaFemale"
          ],
          type: "formula",
        },
        {
          id: "understanding",
          titleKey: "health.bodyFat.formulasubtitle2",
          imageKey: "health.bodyFat.formulasub2Image",
          imageAltKey: "health.bodyFat.formulasub2ImageAlt",
          contentKey: "health.bodyFat.formulasub2text",
          listKey: "health.bodyFat.formulasub2List",
          textKey: "health.bodyFat.formulasub2end",
          lists: ["health.bodyFat.formulasub2List2"],
          endKey: "health.bodyFat.formulasub2end2",
        },
        {
          id: "examples",
          titleKey: "health.bodyFat.formulasub3title",
          introKey: "health.bodyFat.formulasub3line",
          subsections: [
            {
              id: "male-example",
              labelKey: "health.bodyFat.formulasub3line2",
              listKey: "health.bodyFat.formulasub3List",
              subsections: [
                {
                  id: "step-1",
                  titleKey: "health.bodyFat.formulasteptitle",
                  formulaKey: "health.bodyFat.formulastep1",
                },
                {
                  id: "step-2",
                  titleKey: "health.bodyFat.formulasteptitle2",
                  lists: ["health.bodyFat.formulastepList"],
                  resultKey: "health.bodyFat.resulttext",
                },
              ],
            },
          ],
        },
        {
          id: "interpret",
          titleKey: "health.bodyFat.formulasub4title",
          imageKey: "health.bodyFat.formulasub4Image",
          imageAltKey: "health.bodyFat.formulasub4ImageAlt",
          contentKey: "health.bodyFat.formulasub4content",
        },
        {
          id: "reliable",
          titleKey: "health.bodyFat.formulasub5title",
          contentKey: "health.bodyFat.formulasub5content",
        },
      ],
    },
  ],

  faqTitleKey: "health.bodyFat.faqTitle",
  faqs: [
    { qKey: "health.bodyFat.faq.0.q", aKey: "health.bodyFat.faq.0.a" },
    { qKey: "health.bodyFat.faq.1.q", aKey: "health.bodyFat.faq.1.a" },
    { qKey: "health.bodyFat.faq.2.q", aKey: "health.bodyFat.faq.2.a" },
    { qKey: "health.bodyFat.faq.3.q", aKey: "health.bodyFat.faq.3.a" },
    { qKey: "health.bodyFat.faq.4.q", aKey: "health.bodyFat.faq.4.a" },
    { qKey: "health.bodyFat.faq.5.q", aKey: "health.bodyFat.faq.5.a" },
  ],
},

{
  slug: "bmi-calculator",
  metaTitleKey: "health.bmi.title",
  metaDescriptionKey: "health.bmi.desc",
  titleKey: "health.bmi.title",
  category: "Health",
  descriptionKey: "health.bmi.desc",
  formulaId: "bmi",

  toc: [
    { id: "why-use", labelKey: "health.bmi.tocwhy" },
    { id: "how-works", labelKey: "health.bmi.tochowitworks" },
    { id: "why-matters", labelKey: "health.bmi.tocwhybmi" },
    { id: "understanding", labelKey: "health.bmi.tocUnderstanding" },
    { id: "examples", labelKey: "health.bmi.tocexample" },
    { id: "categories", labelKey: "health.bmi.toccategories" },
  ],

  inputs: [
    { label: "health.bmi.weight", name: "weight", type: "number", unit: "kg" },
    { label: "health.bmi.height", name: "height", type: "number", unit: "cm" },
  ],

  heading: "health.bmi.heading",

  sections: [
    {
      id: "about",
      titleKey: "health.bmi.section1Title",
      contentKey: "health.bmi.section1Content",
      linkparacontent: "health.bmi.section1ExtraText",
      linkparaKey: "health.bmi.section1ExtraLinkText",
      linkparaslug: "body-fat-calculator",
      subsections: [
        {
          id: "why-use",
          titleKey: "health.bmi.section1Sub1Title",
          introKey: "health.bmi.section1Sub1Intro",
          contentKey: "health.bmi.section1Sub1Text",
          listKey: "health.bmi.section1Sub1List",
          endKey: "health.bmi.section1Sub1End",
        },
        {
          id: "how-works",
          titleKey: "health.bmi.section1Sub2Title",
          introKey: "health.bmi.section1Sub2Intro",
          listKey: "health.bmi.section1Sub2List",
          contentKey: "health.bmi.section1Sub2Text",
          endKey: "health.bmi.section1Sub2End",
        },
        {
          id: "why-matters",
          titleKey: "health.bmi.section1Sub3Title",
          contentKey: "health.bmi.section1Sub3Intro",
          endKey: "health.bmi.section1Sub3End",
        },
      ],
    },
    {
      id: "formula",
      titleKey: "health.bmi.section2Title",
      introKey: "health.bmi.section2Intro",
      contentKey: "health.bmi.section2Text",
      subsections: [
        {
          id: "metric-formula",
          formulaKey: "health.bmi.section2MetricFormula",
          type: "formula",
        },
        {
          id: "imperial-formula",
          introKey: "health.bmi.section2ImperialIntro",
          formulaKey: "health.bmi.section2ImperialFormula",
          type: "formula",
        },
        {
          id: "formula-end",
          contentKey: "health.bmi.section2End",
        },
        {
          id: "understanding",
          titleKey: "health.bmi.section2Sub1Title",
          imageKey: "health.bmi.section2Sub1Image",
          imageAltKey: "health.bmi.section2Sub1ImageAlt",
          contentKey: "health.bmi.section2Sub1Intro",
          textKey: "health.bmi.section2Sub1Text",
          pointsKey: "health.bmi.section2Sub1Points",
        },
        {
          id: "examples",
          titleKey: "health.bmi.section2Sub2Title",
          introKey: "health.bmi.section2Sub2Intro",
          subsections: [
            {
              id: "metric-example",
              labelKey: "health.bmi.section2Sub2MetricLabel",
              contentKey: "health.bmi.section2Sub2MetricText",
              formulaKey: "health.bmi.section2Sub2MetricFormula",
              resultKey: "health.bmi.section2Sub2MetricResult",
            },
            {
              id: "imperial-example",
              labelKey: "health.bmi.section2Sub2ImperialLabel",
              contentKey: "health.bmi.section2Sub2ImperialText",
              formulaKey: "health.bmi.section2Sub2ImperialFormula",
              resultKey: "health.bmi.section2Sub2ImperialResult",
            },
          ],
        },
        {
          id: "categories",
          titleKey: "health.bmi.section2Sub3Title",
          contentKey: "health.bmi.section2Sub3Intro",
          imageKey: "health.bmi.section2Sub3Image",
          imageAltKey: "health.bmi.section2Sub3ImageAlt",
          endKey: "health.bmi.section2Sub3End1",
          end2Key: "health.bmi.section2Sub3End2",
        },
      ],
    },
  ],

  faqTitleKey: "health.bmi.faqTitle",
  faqs: [
    { qKey: "health.bmi.faq.0.q", aKey: "health.bmi.faq.0.a" },
    { qKey: "health.bmi.faq.1.q", aKey: "health.bmi.faq.1.a" },
    { qKey: "health.bmi.faq.2.q", aKey: "health.bmi.faq.2.a" },
    { qKey: "health.bmi.faq.3.q", aKey: "health.bmi.faq.3.a" },
    { qKey: "health.bmi.faq.4.q", aKey: "health.bmi.faq.4.a" },
    { qKey: "health.bmi.faq.5.q", aKey: "health.bmi.faq.5.a" },
  ],
},
{
  slug: "calorie-calculator",
  metaTitleKey: "health.calories.title",
  metaDescriptionKey: "health.calories.desc",
  titleKey: "health.calories.title",
  category: "Health",
  descriptionKey: "health.calories.desc",
  formulaId: "calories",

  toc: [
    { id: "why-use", labelKey: "health.calories.tocwhy" },
    { id: "how-works", labelKey: "health.calories.tochowitworks" },
    { id: "why-matters", labelKey: "health.calories.tocwhymatters" },
    { id: "activity-factor", labelKey: "health.calories.tocactivity" },
    { id: "understanding", labelKey: "health.calories.tocunderstanding" },
    { id: "examples", labelKey: "health.calories.tocexample" },
    { id: "result", labelKey: "health.calories.tocresult" },
    { id: "reliable", labelKey: "health.calories.tocreliable" },
  ],

  inputs: [
    { label: "health.calories.age", name: "age", type: "number", unit: "years" },
    { label: "health.calories.weight", name: "weight", type: "number", unit: "kg" },
    { label: "health.calories.height", name: "height", type: "number", unit: "cm" },
    {
      label: "health.calories.gender", name: "gender", type: "select", options: [
        { value: "male", label: "health.calories.male" },
        { value: "female", label: "health.calories.female" },
      ]
    },
    { label: "health.calories.activity", name: "activity", type: "select" },
  ],

  heading: "health.calories.heading",

  sections: [
    {
      id: "about",
      titleKey: "health.calories.section1Title",
      contentKey: "health.calories.section1Content",
      linkparacontent: "health.calories.section1ExtraText",
      linkparaKey: "health.calories.section1ExtraLinkText",
      linkparaslug: "macro-calculator",
      subsections: [
        {
          id: "why-use",
          titleKey: "health.calories.section1Sub1Title",
          introKey: "health.calories.section1Sub1Intro",
          contentKey: "health.calories.section1Sub1Text",
        },
        {
          id: "how-works",
          titleKey: "health.calories.section1Sub2Title",
          introKey: "health.calories.section1Sub2Intro",
          listKey: "health.calories.section1Sub2List",
          contentKey: "health.calories.section1Sub2Text",
          endKey: "health.calories.section1Sub2End",
        },
        {
          id: "why-matters",
          titleKey: "health.calories.section1Sub3Title",
          contentKey: "health.calories.section1Sub3Intro",
          endKey: "health.calories.section1Sub3End",
        },
      ],
    },

    {
      id: "formula",
      titleKey: "health.calories.section2Title",
      introKey: "health.calories.section2Intro",
      subsections: [
        {
          id: "metric-formula-male",
          formulaKey: "health.calories.section2MetricFormulaMale",
          type: "formula",
        },
        {
          id: "metric-formula-female",
          formulaKey: "health.calories.section2MetricFormulaFemale",
          type: "formula",
        },
        {
          id: "formula-end",
          contentKey: "health.calories.section2End",
        },
        {
          id: "activity-factor",
          titleKey: "health.calories.section2Sub1Title",
          imageKey: "health.calories.section2Sub1Image",
          imageAltKey: "health.calories.section2Sub1ImageAlt",
          endKey: "health.calories.section2Sub1End",
        },
        {
          id: "understanding",
          titleKey: "health.calories.section2Sub2Title",
          contentKey: "health.calories.section2Sub2Intro",
        },
        {
          id: "examples",
          titleKey: "health.calories.section2Sub3Title",
          introKey: "health.calories.section2Sub3ExampleText",
          subsections: [
            {
              id: "male-example",
              listKey: "health.calories.section2Sub3List",
              formulas: [
                "health.calories.section2Sub3Formula1",
                "health.calories.section2Sub3Formula2",
                "health.calories.section2Sub3Formula3"
              ],
              endKey: "health.calories.section2Sub3End",
            },
          ],
        },
        {
          id: "result",
          titleKey: "health.calories.section2Sub4Title",
          contentKey: "health.calories.section2Sub4Intro",
        },
        {
          id: "reliable",
          titleKey: "health.calories.section2Sub5Title",
          contentKey: "health.calories.section2Sub5Intro",
        },
      ],
    },
  ],

  faqTitleKey: "health.calories.faqTitle",
  faqs: [
    { qKey: "health.calories.faq.0.q", aKey: "health.calories.faq.0.a" },
    { qKey: "health.calories.faq.1.q", aKey: "health.calories.faq.1.a" },
    { qKey: "health.calories.faq.2.q", aKey: "health.calories.faq.2.a" },
    { qKey: "health.calories.faq.3.q", aKey: "health.calories.faq.3.a" },
    { qKey: "health.calories.faq.4.q", aKey: "health.calories.faq.4.a" },
    { qKey: "health.calories.faq.5.q", aKey: "health.calories.faq.5.a" },
  ],
},

 {
  slug: "water-intake-calculator",
  metaTitleKey: "health.waterIntake.title",
  metaDescriptionKey: "health.waterIntake.desc",
  titleKey: "health.waterIntake.heading",
  category: "Health",
  descriptionKey: "health.waterIntake.desc",
  heading:"health.waterIntake.heading",
  formulaId: "water",

  inputs: [
    { label: "health.waterIntake.weight", name: "weight", type: "number", unit: "kg" },
    { label: "health.waterIntake.activity", name: "activity", type: "number", unit: "0-2" },
  ],

  toc: [
    { id: "why-use", labelKey: "health.waterIntake.tocwhy" },
    { id: "how-works", labelKey: "health.waterIntake.tochowitworks" },
    { id: "why-matters", labelKey: "health.waterIntake.tocwhyuse" },
    { id: "examples", labelKey: "health.waterIntake.tocExample" },
    { id: "understanding", labelKey: "health.waterIntake.tocResultUnderstanding" }
  ],

  sections: [
    {
      id: "intro",
      titleKey: "health.waterIntake.section1Title",
      contentKey: "health.waterIntake.section1Content",
      linkparacontent: "health.waterIntake.section1ExtraText",
      linkparaKey: "health.waterIntake.section1Link",
      linkparaslug: "tdee-calculator",
      subsections: [
        {
          id: "why-use",
          titleKey: "health.waterIntake.section1Sub1Title",
          introKey: "health.waterIntake.section1Sub1Intro",
        },
        {
          id: "how-works",
          titleKey: "health.waterIntake.section1Sub2Title",
          introKey: "health.waterIntake.section1Sub2Intro",
          listKey: "health.waterIntake.section1Sub2List",
          endKey: "health.waterIntake.section1Sub2Text",
        },
        {
          id: "why-matters",
          titleKey: "health.waterIntake.section1Sub3Title",
          introKey: "health.waterIntake.section1Sub3Intro",
        },
      ]
    },

    {
      id: "formula",
      titleKey: "health.waterIntake.section2Title",
      introKey: "health.waterIntake.section2Intro",
      subsections: [
        {
          id: "main-formula",
          formulaKey: "health.waterIntake.section2Formula",
          type: "formula",
          endKey:"health.waterIntake.section2end"
        },
        {
          id: "adjustment",
          titleKey: "health.waterIntake.section2AdjustmentTitle",
          beforeimagecontentKey: "health.waterIntake.section2AdjustmentText",
          imageKey: "health.waterIntake.section2AdjustmentImage",
          imageAltKey: "health.waterIntake.section2AdjustmentImageAlt",
        },
        {
          id: "examples",
          titleKey: "health.waterIntake.section2Sub1Title",
          introKey: "health.waterIntake.section2Sub1Intro",
          formulas: [
            "health.waterIntake.section2Sub1Step1",
            "health.waterIntake.section2Sub1Step2"
          ],
          endKey: "health.waterIntake.section2Sub1Result",
          endKey2: "health.waterIntake.section2Sub1Result2",
        },
        {
          id: "understanding",
          titleKey: "health.waterIntake.section3Title",
          imageKey: "health.waterIntake.section3Image",
          imageAltKey: "health.waterIntake.section3ImageAlt",
          contentKey: "health.waterIntake.section3Text",
        },
        {
          id: "why-formula-works",
          titleKey: "health.waterIntake.section4Title",
          contentKey: "health.waterIntake.section4Text",
        }
      ]
    },
  ],

  faqTitleKey: "health.waterIntake.faqTitle",
  faqs: [
    { qKey: "health.waterIntake.faq.0.q", aKey: "health.waterIntake.faq.0.a" },
    { qKey: "health.waterIntake.faq.1.q", aKey: "health.waterIntake.faq.1.a" },
    { qKey: "health.waterIntake.faq.2.q", aKey: "health.waterIntake.faq.2.a" },
    { qKey: "health.waterIntake.faq.3.q", aKey: "health.waterIntake.faq.3.a" },
    { qKey: "health.waterIntake.faq.4.q", aKey: "health.waterIntake.faq.4.a" },
    { qKey: "health.waterIntake.faq.5.q", aKey: "health.waterIntake.faq.5.a" },
  ]
},

{
  slug: "tdee-calculator",
  metaTitleKey: "health.tdee.title",
  metaDescriptionKey: "health.tdee.desc",
  titleKey: "health.tdee.title",
  category: "Health",
  descriptionKey: "health.tdee.desc",
  formulaId: "tdee",

  toc: [
    { id: "why-important", labelKey: "health.tdee.tocwhy" },
    { id: "how-it-works", labelKey: "health.tdee.tochowitworks" },
    { id: "why-use", labelKey: "health.tdee.tocwhyuse" },
    { id: "example", labelKey: "health.tdee.tocExample" },
    { id: "use-result", labelKey: "health.tdee.tochowtouse" },
  ],

  inputs: [
    { label: "health.tdee.age", name: "age", type: "number", unit: "years" },
    { label: "health.tdee.weight", name: "weight", type: "number", unit: "kg" },
    { label: "health.tdee.height", name: "height", type: "number", unit: "cm" },
    {
      label: "health.tdee.activity",
      name: "activity",
      type: "select",
      options: [
        { label: "health.tdee.sedentary", value: "sedentary" },
        { label: "health.tdee.light", value: "light" },
        { label: "health.tdee.moderate", value: "moderate" },
        { label: "health.tdee.very", value: "very" },
        { label: "health.tdee.extra", value: "extra" },
      ]
    },
  ],

  heading: "health.tdee.heading",

  sections: [
    {
      id: "about",
      titleKey: "health.tdee.section1Title",
      contentKey: "health.tdee.section1Content",
      subsections: [
        {
          id: "why-important",
          titleKey: "health.tdee.section1Sub1Title",
          introKey: "health.tdee.section1Sub1Intro",
          lists: ["health.tdee.section1Sub1List"],
          contentKey: "health.tdee.section1Sub1Text"
        },
        {
          id: "how-it-works",
          titleKey: "health.tdee.section1Sub2Title",
          introKey: "health.tdee.section1Sub2Intro",
          lists: ["health.tdee.section1Sub2List"],
          contentKey: "health.tdee.section1Sub2Text"
        },
        {
          id: "why-use",
          titleKey: "health.tdee.section1Sub3Title",
          contentKey: "health.tdee.section1Sub3Intro"
        }
      ]
    },

    {
      id: "formula",
      titleKey: "health.tdee.section2Title",
      introKey: "health.tdee.section2Intro",
      lists: ["health.tdee.section2List"],
      subsections: [
        {
          id:"bmr-step",
          titleKey:"health.tdee.section2Step1",
          formulas:[
            "health.tdee.section2Step1MaleFormula",
            "health.tdee.section2Step1FemaleFormula"
          ],
        },
        {
          id:"activity-step",
          titleKey:"health.tdee.section2Step2",
          contentKey:"health.tdee.section2Step2Text",
        },
        {
          id:"formula-summary",
          titleKey:"health.tdee.section2Step3",
          formulas:["health.tdee.section2Step3Formula"],
          contentKey:"health.tdee.section2Step3Text"
        },
        {
          id:"example",
          titleKey:"health.tdee.section2Sub1Title",
          imageKey:"health.tdee.section2Sub1Image",
          imageAltKey:"health.tdee.section2Sub1ImageAlt",
          introKey:"health.tdee.section2Sub1Example",
          contentKey:"health.tdee.section2Sub1ExampleMale",
          lists:["health.tdee.section2Sub1List"],
          formulas:[
            "health.tdee.section2Step1Formula",
            "health.tdee.section2Step1Formula2",
            "health.tdee.section2Step2Formula",
          ],
          endKey:"health.tdee.section2Step2End"
        },
        {
          id:"use-result",
          titleKey:"health.tdee.section2Sub2Title",
          introKey:"health.tdee.section2Sub2Intro",
          lists:["health.tdee.section2Sub2List"],
          linkparacontent:"health.tdee.section2Sub2Extra",
          linkparaKey:"health.tdee.section2Sub2ExtraLink",
          linkparaslug:"macro-calculator"
        },
        {
          id:"why-this-works",
          titleKey:"health.tdee.section2Sub3Title",
          contentKey:"health.tdee.section2Sub3Intro"
        }
      ]
    }
  ],

  faqTitleKey: "health.tdee.faqTitle",
  faqs: [
    { qKey: "health.tdee.faq.0.q", aKey: "health.tdee.faq.0.a" },
    { qKey: "health.tdee.faq.1.q", aKey: "health.tdee.faq.1.a" },
    { qKey: "health.tdee.faq.2.q", aKey: "health.tdee.faq.2.a" },
    { qKey: "health.tdee.faq.3.q", aKey: "health.tdee.faq.3.a" },
    { qKey: "health.tdee.faq.4.q", aKey: "health.tdee.faq.4.a" },
    { qKey: "health.tdee.faq.5.q", aKey: "health.tdee.faq.5.a" },
  ]
},
  {
    slug: "macro-calculator",
    metaTitleKey: "health.macros.title",
    metaDescriptionKey: "health.macros.desc",
    titleKey: "health.macros.title",
    category: "Health",
    descriptionKey: "health.macros.desc",
    formulaId: "macros",

    toc: [
      { id: "why-tracking", labelKey: "health.macros.tocwhy" },
      { id: "how-it-works", labelKey: "health.macros.tochowitworks" },
      { id: "why-use", labelKey: "health.macros.tocwhyuse" },
      { id: "macro-example", labelKey: "health.macros.tocMacro" },
      { id: "use-result", labelKey: "health.macros.tocresult" },
      { id: "formula", labelKey: "health.macros.tocformula" },
    ],

    inputs: [
      { label: "health.macros.calories", name: "calories", type: "number", unit: "kcal" },
      {
        label: "health.macros.diet", name: "diet", type: "select", options: [
          { label: "health.macros.balanced", value: "balanced" },
          { label: "health.macros.lowCarb", value: "lowCarb" },
          { label: "health.macros.highProtein", value: "highProtein" },
        ]
      },
    ],

    heading: "health.macros.heading",

    sections: [
      {
        id: "about",
        titleKey: "health.macros.section1Title",
        contentKey: "health.macros.section1Content",
        subsections: [
          {
            id: "why-tracking",
            titleKey: "health.macros.section1Sub1Title",
            introKey: "health.macros.section1Sub1Intro",
            lists: ["health.macros.section1Sub1List"],
            contentKey: "health.macros.section1Sub1Text",
          },
          {
            id: "how-it-works",
            titleKey: "health.macros.section1Sub2Title",
            introKey: "health.macros.section1Sub2Intro",
            lists: [
              "health.macros.section1Sub2List",
              "health.macros.section1Sub2List1"
            ],
            contentKey: "health.macros.section1Sub2Text",
          },
          {
            id: "why-use",
            titleKey: "health.macros.section1Sub3Title",
            contentKey: "health.macros.section1Sub3Intro",
          }
        ]
      },
      {
        id: "formula",
        titleKey: "health.macros.section2Title",
        introKey: "health.macros.section2Intro",
        textKey: "health.macros.section2Intro2",
        lists: ["health.macros.section2List"],
        linkparacontent:"health.macros.section2ExtraText",
        linkparaKey:"health.macros.section2ExtraLink",
        linkparaslug:"/calorie-calculator",
        subsections: [
          {
            id: "calorie-step",
            titleKey: "health.macros.section2StepsTitle",
            introKey: "health.macros.section2StepsText",
            lists: ["health.macros.section2StepList1"],
            endKey: "health.macros.section2StepTextend",
          },
          {
            id: "distribution-goals",
            titleKey: "health.macros.section2StepsTitle2",
            subtitleKey: "health.macros.section2StepsTitle3",
            lists: ["health.macros.section2StepList2"],
            endKey: "health.macros.section2StepTextend2",
          },
          {
            id: "macro-formula",
            titleKey: "health.macros.section2StepsTitle4",
            textKey: "health.macros.section2StepsExample",
            formulas: [
              "health.macros.section2Macroformula",
              "health.macros.section2Proteinformula"
            ],
            endKey: "health.macros.section2StepTextend3",
          },
          {
            id: "example",
            titleKey: "health.macros.section2Sub1Title",
            imageKey: "health.macros.section2Sub1Image",
            imageAltKey: "health.macros.section2Sub1ImageAlt",
            introKey: "health.macros.section2Sub1ExampleText",
            lists: [
              "health.macros.section2Sub1List",
              "health.macros.section2Sub1DailyList"
            ],
            endKey: "health.macros.section2Sub1DailyEnd"
          },
          {
            id: "use-result",
            titleKey: "health.macros.section2Sub2Title",
            contentKey: "health.macros.section2Sub2Intro",
          },
          {
            id: "why-this-works",
            titleKey: "health.macros.section2Sub3Title",
            contentKey: "health.macros.section2Sub3Intro",
          }
        ]
      }
    ],

    faqTitleKey: "health.macros.faqTitle",
    faqs: [
      { qKey: "health.macros.faq.0.q", aKey: "health.macros.faq.0.a" },
      { qKey: "health.macros.faq.1.q", aKey: "health.macros.faq.1.a" },
      { qKey: "health.macros.faq.2.q", aKey: "health.macros.faq.2.a" },
      { qKey: "health.macros.faq.3.q", aKey: "health.macros.faq.3.a" },
      { qKey: "health.macros.faq.4.q", aKey: "health.macros.faq.4.a" },
      { qKey: "health.macros.faq.5.q", aKey: "health.macros.faq.5.a" },
    ]
  },

    // {
  //   slug: "running-pace-calculator",
  //   metaTitleKey: "health.pace.metaTitle",
  //   metaDescriptionKey: "health.pace.metaDescription",
  //   titleKey: "health.pace.title",
  //   category: "Health",
  //   descriptionKey: "health.pace.desc",
  //   inputs: [
  //     { label: "health.pace.distance", name: "distance", type: "number", unit: "km" },
  //     { label: "health.pace.time", name: "time", type: "number", unit: "minutes" },
  //   ],
  //   formulaId: "pace",
  //   sections: [
  //     { id: "intro", titleKey: "health.pace.about", contentKey: "health.pace.aboutText" },
  //     { id: "formula", titleKey: "health.pace.formula", contentKey: "health.pace.formulaText" },
  //   ],
  //   faqTitleKey: "health.pace.faqTitle",
  //   faqs: [
  //     { qKey: "health.pace.faq.0.q", aKey: "health.pace.faq.0.a" },
  //     { qKey: "health.pace.faq.1.q", aKey: "health.pace.faq.1.a" },
  //     { qKey: "health.pace.faq.2.q", aKey: "health.pace.faq.2.a" },
  //     { qKey: "health.pace.faq.3.q", aKey: "health.pace.faq.3.a" },
  //     { qKey: "health.pace.faq.4.q", aKey: "health.pace.faq.4.a" },
  //     { qKey: "health.pace.faq.5.q", aKey: "health.pace.faq.5.a" },
  //   ],
  // },
  // {
  //   slug: "heart-rate-calculator",
  //   metaTitleKey: "health.heartRate.metaTitle",
  //   metaDescriptionKey: "health.heartRate.metaDescription",
  //   titleKey: "health.heartRate.title",
  //   category: "Health",
  //   descriptionKey: "health.heartRate.desc",
  //   inputs: [
  //     { label: "health.heartRate.age", name: "age", type: "number", unit: "years" },
  //     { label: "health.heartRate.restingHR", name: "restingHR", type: "number", unit: "bpm" },
  //   ],
  //   formulaId: "heart-rate",
  //   sections: [
  //     { id: "intro", titleKey: "health.heartRate.about", contentKey: "health.heartRate.aboutText" },
  //     { id: "formula", titleKey: "health.heartRate.formula", contentKey: "health.heartRate.formulaText" },
  //   ],
  //   faqTitleKey: "health.heartRate.faqTitle",
  //   faqs: [
  //     { qKey: "health.heartRate.faq.0.q", aKey: "health.heartRate.faq.0.a" },
  //     { qKey: "health.heartRate.faq.1.q", aKey: "health.heartRate.faq.1.a" },
  //     { qKey: "health.heartRate.faq.2.q", aKey: "health.heartRate.faq.2.a" },
  //     { qKey: "health.heartRate.faq.3.q", aKey: "health.heartRate.faq.3.a" },
  //     { qKey: "health.heartRate.faq.4.q", aKey: "health.heartRate.faq.4.a" },
  //     { qKey: "health.heartRate.faq.5.q", aKey: "health.heartRate.faq.5.a" },
  //   ],
  // },
  // {
  //   slug: "protein-calculator",
  //   metaTitleKey: "health.protein.metaTitle",
  //   metaDescriptionKey: "health.protein.metaDescription",
  //   titleKey: "health.protein.title",
  //   category: "Health",
  //   descriptionKey: "health.protein.desc",
  //   inputs: [
  //     { label: "health.protein.weight", name: "weight", type: "number", unit: "kg" },
  //     {
  //       label: "health.protein.goal",
  //       name: "goal",
  //       type: "select",
  //       options: [
  //         { value: "0.8", label: "health.protein.maintenance" },
  //         { value: "1.9", label: "health.protein.muscle" },
  //         { value: "1.4", label: "health.protein.loss" },
  //       ],
  //     },
  //   ],
  //   formulaId: "protein",
  //   sections: [
  //     { id: "intro", titleKey: "health.protein.about", contentKey: "health.protein.aboutText" },
  //     { id: "formula", titleKey: "health.protein.formula", contentKey: "health.protein.formulaText" },
  //   ],
  //   faqTitleKey: "health.protein.faqTitle",
  //   faqs: [
  //     { qKey: "health.protein.faq.0.q", aKey: "health.protein.faq.0.a" },
  //     { qKey: "health.protein.faq.1.q", aKey: "health.protein.faq.1.a" },
  //     { qKey: "health.protein.faq.2.q", aKey: "health.protein.faq.2.a" },
  //     { qKey: "health.protein.faq.3.q", aKey: "health.protein.faq.3.a" },
  //     { qKey: "health.protein.faq.4.q", aKey: "health.protein.faq.4.a" },
  //     { qKey: "health.protein.faq.5.q", aKey: "health.protein.faq.5.a" },
  //   ],
  // },

  // {
  //   slug: "body-fat-percentage",
  //   metaTitleKey: "health.bfp.metaTitle",
  //   metaDescriptionKey: "health.bfp.metaDescription",
  //   titleKey: "health.bfp.title",
  //   category: "Health",
  //   descriptionKey: "health.bfp.desc",
  //   inputs: [
  //     { label: "health.bfp.waist", name: "waist", type: "number", unit: "cm" },
  //     { label: "health.bfp.hip", name: "hip", type: "number", unit: "cm" },
  //     { label: "health.bfp.neck", name: "neck", type: "number", unit: "cm" },
  //   ],
  //   formulaId: "bfp",
  //   sections: [
  //     { id: "intro", titleKey: "health.bfp.about", contentKey: "health.bfp.aboutText" },
  //     { id: "formula", titleKey: "health.bfp.formula", contentKey: "health.bfp.formulaText" },
  //   ],
  //   faqTitleKey: "health.bfp.faqTitle",
  //   faqs: [
  //     { qKey: "health.bfp.faq.0.q", aKey: "health.bfp.faq.0.a" },
  //     { qKey: "health.bfp.faq.1.q", aKey: "health.bfp.faq.1.a" },
  //     { qKey: "health.bfp.faq.2.q", aKey: "health.bfp.faq.2.a" },
  //     { qKey: "health.bfp.faq.3.q", aKey: "health.bfp.faq.3.a" },
  //     { qKey: "health.bfp.faq.4.q", aKey: "health.bfp.faq.4.a" },
  //     { qKey: "health.bfp.faq.5.q", aKey: "health.bfp.faq.5.a" },
  //   ],
  // },
]