import type { Calculator } from "./types"

export const financeCalculators: Calculator[] = [
  
  {
    slug: "loan-calculator",
    metaTitleKey: "finance.loan.metaTitle",
    metaDescriptionKey: "finance.loan.desc",
    titleKey: "finance.loan.title",
    category: "Finance",
    descriptionKey: "finance.loan.desc",
    inputs: [
      { label: "finance.loan.principal", name: "principal", type: "number", unit: "$" },
      { label: "finance.loan.rate", name: "rate", type: "number", unit: "%" },
      { label: "finance.loan.years", name: "years", type: "number", unit: "years" },
    ],
    heading: "finance.loan.heading",
    toc: [
      { id: "about", labelKey: "finance.loan.tocabout" },
      { id: "formula", labelKey: "finance.loan.tocformula" },
      { id: "loan-payment-formula", labelKey: "finance.loan.tocloan" },
      { id: "example", labelKey: "finance.loan.tocexample" },
      { id: "why-matters", labelKey: "finance.loan.tocwhy" }
    ],

    sections: [
      {
        id: "about",
        titleKey: "finance.loan.aboutsection",
        contentKey: "finance.loan.aboutcontent"
      },
      {
        id: "formula",
        titleKey: "finance.loan.formulatitle",
        imageKey: "finance.loan.formulaImage",
        imageAltKey: "finance.loan.formulaImageAlt",
        introKey: "finance.loan.formulacontent",
        subsections: [
          {
            id: "loan-payment-formula",
            titleKey: "finance.loan.formulaSubtitle",
            formulaKey: "finance.loan.formula1",
            listKey: "finance.loan.formulaList"
          },
          {
            id: "example",
            titleKey: "finance.loan.formulaSubtitle2",
            introKey: "finance.loan.formulaSubcontent2",
            endKey: "finance.loan.formula2endcontent",
            formulas: ["finance.loan.formula2", "finance.loan.formula3"],
            resultKey: "finance.loan.formula3endcontent"
          },
          {
            id: "why-matters",
            titleKey: "finance.loan.formulasubtitle3",
            introKey: "finance.loan.formulasubcontent3",
            linkparacontent: "finance.loan.formulasub3extratext",
            linkparaKey: "finance.loan.formulasub3interlink",
            linkparaslug: "mortgage-calculator"
          }
        ]
      }
    ],

    faqTitleKey: "finance.loan.faqTitle",
    faqs: [
      { qKey: "finance.loan.faq.0.q", aKey: "finance.loan.faq.0.a" },
      { qKey: "finance.loan.faq.1.q", aKey: "finance.loan.faq.1.a" },
      { qKey: "finance.loan.faq.2.q", aKey: "finance.loan.faq.2.a" },
      { qKey: "finance.loan.faq.3.q", aKey: "finance.loan.faq.3.a" },
      { qKey: "finance.loan.faq.4.q", aKey: "finance.loan.faq.4.a" },
      { qKey: "finance.loan.faq.5.q", aKey: "finance.loan.faq.5.a" },
    ]
  },
 
  {
    slug: "mortgage-calculator",
    metaTitleKey: "finance.mortgage.metaTitle",
    metaDescriptionKey: "finance.mortgage.desc",
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
    toc: [
      { id: "why-important", labelKey: "finance.mortgage.tocwhy" },
      { id: "how-works", labelKey: "finance.mortgage.tochowmortage" },
      { id: "why-use", labelKey: "finance.mortgage.tocwhyuse" },
      { id: "formula", labelKey: "finance.mortgage.tocmortageformula" },
      { id: "step-1", labelKey: "finance.mortgage.tocformulastep1" },
      { id: "step-2", labelKey: "finance.mortgage.tocformulastep2" },
      { id: "step-3", labelKey: "finance.mortgage.tocformulastep3" },
      { id: "how-to-use", labelKey: "finance.mortgage.tocformulahowto" },
      { id: "why-works", labelKey: "finance.mortgage.tocformulawhy" },
    ],


    heading: "finance.mortgage.heading",

    sections: [
      {
        id: "about",
        titleKey: "finance.mortgage.aboutH2",
        contentKey: "finance.mortgage.aboutContent",
        subsections: [
          {
            id: "why-important",
            titleKey: "finance.mortgage.whyTitle",
            introKey: "finance.mortgage.whyIntro",
            listKey: "finance.mortgage.whyList",
            endKey: "finance.mortgage.whyEnd",
          },
          {
            id: "how-works",
            titleKey: "finance.mortgage.howWorksTitle",
            contentKey: "finance.mortgage.howWorksContent",
            textKey: "finance.mortgage.howWorksInputTitle",
            listKey: "finance.mortgage.howWorksInputList",
            textKey2: "finance.mortgage.howWorksResulttext",
            lists: ["finance.mortgage.howWorksResultList"],
            endKey: "finance.mortgage.howWorksEnd",
          },
          {
            id: "why-use",
            titleKey: "finance.mortgage.whyUseTitle",
            contentKey: "finance.mortgage.whyUseContent",
          },
        ],
      },
      {
        id: "formula",
        titleKey: "finance.mortgage.formulaMainTitle",
        introKey: "finance.mortgage.formulaMainIntro",
        subsections: [
          {
            id: "formula-intro",
            textKey: "finance.mortgage.formulaSubIntro",
            formulaKey: "finance.mortgage.formulaMain",
            pointsKey: "finance.mortgage.formulaDefinitionList",
            endKey: "finance.mortgage.formulaEndText",
          },
          {
            id: "formula-image",
            imageKey: "finance.mortgage.formulaImage",
            imageAltKey: "finance.mortgage.formulaImageAlt",
          },
          {
            id: "step-1",
            titleKey: "finance.mortgage.step1Title",
            listKey: "finance.mortgage.step1List",
            endKey: "finance.mortgage.step1End",
          },
          {
            id: "step-2",
            titleKey: "finance.mortgage.step2Title",
            listKey: "finance.mortgage.step2ExampleList",
            subsections: [
              {
                id: "step-2-calc",
                contentKey: "finance.mortgage.step2CalcStep1",
              },
              {
                id: "step-2-formula",
                contentKey: "finance.mortgage.step2CalcStep2",
              },
              {
                id: "step-2-result",
                contentKey: "finance.mortgage.step2ResultMeaning",
              },
            ],
          },
          {
            id: "step-3",
            titleKey: "finance.mortgage.step3Title",
            contentKey: "finance.mortgage.step3Content",
            subsections: [
              {
                id: "total-example",
                titleKey: "finance.mortgage.totalExampleTitle",
                listKey: "finance.mortgage.totalExampleList",
                endKey: "finance.mortgage.totalExampleEnd",
              },
            ],
          },
          {
            id: "how-to-use",
            titleKey: "finance.mortgage.howToUseTitle",
            listKey: "finance.mortgage.howToUseList",
            linkparacontent: "finance.mortgage.howToUseEnd",
            linkparaKey: "finance.mortgage.interlink",
            linkparaslug: "loan-calculator",
          },
          {
            id: "why-works",
            titleKey: "finance.mortgage.whyWorksTitle",
            contentKey: "finance.mortgage.whyWorksContent",
          },
        ],
      },
    ],

    faqTitleKey: "finance.mortgage.faqTitle",
    faqs: [
      { qKey: "finance.mortgage.faq.0.q", aKey: "finance.mortgage.faq.0.a" },
      { qKey: "finance.mortgage.faq.1.q", aKey: "finance.mortgage.faq.1.a" },
      { qKey: "finance.mortgage.faq.2.q", aKey: "finance.mortgage.faq.2.a" },
      { qKey: "finance.mortgage.faq.3.q", aKey: "finance.mortgage.faq.3.a" },
      { qKey: "finance.mortgage.faq.4.q", aKey: "finance.mortgage.faq.4.a" },
      { qKey: "finance.mortgage.faq.5.q", aKey: "finance.mortgage.faq.5.a" },
    ],
  },
  {
    slug: "roi-calculator",
    metaTitleKey: "finance.roi.metaTitle",
    metaDescriptionKey: "finance.roi.desc",
    titleKey: "finance.roi.title",
    category: "Finance",
    descriptionKey: "finance.roi.desc",
    inputs: [
      { label: "finance.roi.investment", name: "investment", type: "number", unit: "$" },
      { label: "finance.roi.gain", name: "gain", type: "number", unit: "$" },
    ],
    formulaId: "roi",
    toc: [
      { id: "about", labelKey: "finance.roi.tocabout" },
      { id: "why-matters", labelKey: "finance.roi.tocwhy" },
      { id: "how-works", labelKey: "finance.roi.tochow" },
      { id: "formula", labelKey: "finance.roi.tocformula" },
      { id: "examples", labelKey: "finance.roi.tocexample" },
      { id: "results", labelKey: "finance.roi.tocresult" },
    ],


    heading: "finance.roi.heading",

    sections: [
      {
        id: "about",
        titleKey: "finance.roi.aboutsection",
        contentKey: "finance.roi.aboutcontent",
        subsections: [
          {
            id: "why-matters",
            titleKey: "finance.roi.whytitle",
            contentKey: "finance.roi.whycontent",
            listKey: "finance.roi.whylist",
            linkparacontent: "finance.roi.whyextratext",
            linkparaKey: "finance.roi.whyinterlink",
            linkparaslug: "breakeven-calculator",
          },
          {
            id: "how-works",
            titleKey: "finance.roi.howworkstitle",
            introKey: "finance.roi.howworksIntro",
            listKey: "finance.roi.howworkslist",
            lists: ["finance.roi.howworksresultlist"],
          },
          {
            id: "why-use",
            titleKey: "finance.roi.whyusetitle",
            contentKey: "finance.roi.whyusecontent",
          },
        ],
      },
      {
        id: "formula",
        titleKey: "finance.roi.formulatitle",
        subsections: [
          {
            id: "formula-main",
            formulas: [
              "finance.roi.formulamain",
              "finance.roi.formula2"
            ],
            type: "formula",
          },
          {
            id: "formula-steps",
            titleKey: "finance.roi.stepTitle",
            listKey: "finance.roi.stepList",
            endKey: "finance.roi.stepEndText",
          },
          {
            id: "formula-image",
            imageKey: "finance.roi.formulaImage",
            imageAltKey: "finance.roi.formulaImageAlt",
          },
          {
            id: "examples",
            titleKey: "finance.roi.exampleTitle",
            subsections: [
              {
                id: "example-1",
                listKey: "finance.roi.exampleValues",
                subsections: [
                  {
                    id: "example-1-step-1",
                    contentKey: "finance.roi.exampleStep1",
                  },
                  {
                    id: "example-1-step-2",
                    contentKey: "finance.roi.exampleStep2",
                  },
                  {
                    id: "example-1-result",
                    contentKey: "finance.roi.exampleEnd",
                  },
                ],
              },
              {
                id: "example-2",
                titleKey: "finance.roi.example2Title",
                subsections: [
                  {
                    id: "investment-a",
                    listKey: "finance.roi.exampleA",
                  },
                  {
                    id: "investment-b",
                    listKey: "finance.roi.exampleB",
                  },
                  {
                    id: "comparison-result",
                    contentKey: "finance.roi.example2End",
                  },
                ],
              },
            ],
          },
          {
            id: "results",
            titleKey: "finance.roi.resultTitle",
            listKey: "finance.roi.resultList",
          },
          {
            id: "why-works",
            titleKey: "finance.roi.whysformulaTitle",
            contentKey: "finance.roi.whysformulaContent",
          },
        ],
      },
    ],

    faqTitleKey: "finance.roi.faqTitle",
    faqs: [
      { qKey: "finance.roi.faq.0.q", aKey: "finance.roi.faq.0.a" },
      { qKey: "finance.roi.faq.1.q", aKey: "finance.roi.faq.1.a" },
      { qKey: "finance.roi.faq.2.q", aKey: "finance.roi.faq.2.a" },
      { qKey: "finance.roi.faq.3.q", aKey: "finance.roi.faq.3.a" },
      { qKey: "finance.roi.faq.4.q", aKey: "finance.roi.faq.4.a" },
      { qKey: "finance.roi.faq.5.q", aKey: "finance.roi.faq.5.a" },
    ],
  },
  {
    slug: "breakeven-calculator",
    metaTitleKey: "finance.breakeven.metaTitle",
    metaDescriptionKey: "finance.breakeven.desc",
    titleKey: "finance.breakeven.title",
    category: "Finance",
    descriptionKey: "finance.breakeven.desc",
    inputs: [
      { label: "finance.breakeven.fixedCosts", name: "fixedCosts", type: "number", unit: "$" },
      { label: "finance.breakeven.variableCost", name: "variableCost", type: "number", unit: "$" },
      { label: "finance.breakeven.price", name: "price", type: "number", unit: "$" },
    ],
    formulaId: "breakeven",
    toc: [
      { id: "about", labelKey: "finance.breakeven.tocabout" },
      { id: "why-matters", labelKey: "finance.breakeven.tocwhy" },
      { id: "how-works", labelKey: "finance.breakeven.tochowitworks" },
      { id: "why-use", labelKey: "finance.breakeven.tocwhyuse" },
    ],



    heading: "finance.breakeven.heading",

    sections: [
      {
        id: "about",
        titleKey: "finance.breakeven.aboutTitle",
        contentKey: "finance.breakeven.aboutContent",
        subsections: [
          {
            id: "why-matters",
            titleKey: "finance.breakeven.whyTitle",
            introKey: "finance.breakeven.whyIntro",
            listKey: "finance.breakeven.whyList",
            endKey: "finance.breakeven.whyEnd",
            linkparacontent: "finance.breakeven.interlinkExtraText",
            linkparaKey: "finance.breakeven.interlinkSlugText",
            linkparaslug: "roi-calculator",
          },
          {
            id: "how-works",
            titleKey: "finance.breakeven.howWorksTitle",
            introKey: "finance.breakeven.howWorksIntro",
            textKey: "finance.breakeven.howWorksListTitle",
            listKey: "finance.breakeven.howWorksList",
            textKey2: "finance.breakeven.howWorksResultTitle",
            lists: ["finance.breakeven.howWorksResultList"],
            endKey: "finance.breakeven.howWorksEnd",
          },
          {
            id: "why-use",
            titleKey: "finance.breakeven.whyUseTitle",
            contentKey: "finance.breakeven.whyUseContent",
          },
        ],
      },
      {
        id: "formula",
        titleKey: "finance.breakeven.formulatitle",
        introKey: "finance.breakeven.formulaintro",
        subsections: [
          {
            id: "formula-main",
            textKey: "finance.breakeven.mainFormulaText",
            formulaKey: "finance.breakeven.formula",
            endKey: "finance.breakeven.afterFormulaDesc",
          },
          {
            id: "formula-components",
            titleKey: "finance.breakeven.step1Title",
            listKey: "finance.breakeven.step1List",
            contentKey: "finance.breakeven.cvpLine",
          },
          {
            id: "revenue-formula",
            titleKey: "finance.breakeven.step2Title",
            textKey: "finance.breakeven.step2Desc",
            formulaKey: "finance.breakeven.step2Formula",
            endKey: "finance.breakeven.step2Explain",
          },
          {
            id: "formula-image",
            imageKey: "finance.breakeven.imageUrl",
            imageAltKey: "finance.breakeven.imageAlt",
          },
          {
            id: "examples",
            titleKey: "finance.breakeven.exampleTitle",
            listKey: "finance.breakeven.exampleList",
            subsections: [
              {
                id: "example-step-1",
                contentKey: "finance.breakeven.exampleStep1",
              },
              {
                id: "example-step-2",
                contentKey: "finance.breakeven.exampleStep2",
              },
              {
                id: "example-result",
                contentKey: "finance.breakeven.exampleExplain",
              },
            ],
          },
          {
            id: "interpreting",
            titleKey: "finance.breakeven.interpretingTitle",
            listKey: "finance.breakeven.interpretingList",
            endKey: "finance.breakeven.interpretDesc",
          },
          {
            id: "why-works",
            titleKey: "finance.breakeven.whyWorksTitle",
            contentKey: "finance.breakeven.whyWorksDesc",
          },
        ],
      },
    ],

    faqTitleKey: "finance.breakeven.faqTitle",
    faqs: [
      { qKey: "finance.breakeven.faq.0.q", aKey: "finance.breakeven.faq.0.a" },
      { qKey: "finance.breakeven.faq.1.q", aKey: "finance.breakeven.faq.1.a" },
      { qKey: "finance.breakeven.faq.2.q", aKey: "finance.breakeven.faq.2.a" },
      { qKey: "finance.breakeven.faq.3.q", aKey: "finance.breakeven.faq.3.a" },
      { qKey: "finance.breakeven.faq.4.q", aKey: "finance.breakeven.faq.4.a" },
      { qKey: "finance.breakeven.faq.5.q", aKey: "finance.breakeven.faq.5.a" },
    ],
  },
 
  {
    slug: "inflation-calculator",
    metaTitleKey: "finance.inflation.metaTitle",
    metaDescriptionKey: "finance.inflation.desc",
    titleKey: "finance.inflation.title",
    category: "Finance",
    descriptionKey: "finance.inflation.desc",
    inputs: [
      { label: "finance.inflation.amount", name: "amount", type: "number", unit: "$" },
      { label: "finance.inflation.years", name: "years", type: "number", unit: "years" },
      { label: "finance.inflation.rate", name: "rate", type: "number", unit: "%" },
    ],
    formulaId: "inflation",
    toc: [
      { id: "why-matters", labelKey: "finance.inflation.tocwhy" },
      { id: "how-works", labelKey: "finance.inflation.tochowitworks" },
      { id: "why-use", labelKey: "finance.inflation.tocwhyuse" },
      { id: "step-1", labelKey: "finance.inflation.tocsteps1" },
      { id: "step-2", labelKey: "finance.inflation.tocsteps2" },
      { id: "results", labelKey: "finance.inflation.tocresults" },
      { id: "why-works", labelKey: "finance.inflation.tocwhyformula" },
    ],



    heading: "finance.inflation.heading",

    sections: [
      {
        id: "about",
        titleKey: "finance.inflation.aboutTitle",
        contentKey: "finance.inflation.aboutDesc",
        subsections: [
          {
            id: "why-matters",
            titleKey: "finance.inflation.whyTitle",
            contentKey: "finance.inflation.whyDesc",
            pointsKey: "finance.inflation.whyPoints",
          },
          {
            id: "how-works",
            titleKey: "finance.inflation.howTitle",
            contentKey: "finance.inflation.howDesc",
            listKey: "finance.inflation.howNeed",
            textKey: "finance.inflation.howResult",
            lists: ["finance.inflation.howResult"],
          },
          {
            id: "why-use",
            titleKey: "finance.inflation.whyUseTitle",
            contentKey: "finance.inflation.whyUseDesc",
          },
        ],
      },
      {
        id: "formula",
        titleKey: "finance.inflation.formulatitle",
        introKey: "finance.inflation.formulaintro",
        subsections: [
          {
            id: "formula-main",
            formulaKey: "finance.inflation.formula1",
            endKey: "finance.inflation.formula1endtext",
          },
          {
            id: "formula-image",
            imageKey: "finance.inflation.formulaImage",
            imageAltKey: "finance.inflation.formulaImageAlt",
          },
          {
            id: "step-1",
            titleKey: "finance.inflation.steps1title",
            introKey: "finance.inflation.steps1intro",
            listKey: "finance.inflation.steps1list",
            endKey: "finance.inflation.steps1endtext",
          },
          {
            id: "step-2",
            titleKey: "finance.inflation.steps2title",
            introKey: "finance.inflation.steps2intro",
            formulaKey: "finance.inflation.steps2formula",
            endKey: "finance.inflation.steps2endtext",
          },
          {
            id: "examples",
            titleKey: "finance.inflation.exampletitle",
            introKey: "finance.inflation.exampleintro",
            subsections: [
              {
                id: "example-1",
                listKey: "finance.inflation.example1list",
                subsections: [
                  {
                    id: "example-1-step",
                    labelKey: "finance.inflation.examplestep1",
                    lists: ["finance.inflation.examplelist"],
                    endKey: "finance.inflation.example2end",
                  },
                ],
              },
              {
                id: "example-2",
                titleKey: "finance.inflation.exampletitle2",
                introKey: "finance.inflation.example2intro",
                lists: ["finance.inflation.example2list"],
                endKey: "finance.inflation.example2endtext",
              },
            ],
          },
          {
            id: "results",
            titleKey: "finance.inflation.howtotitle",
            introKey: "finance.inflation.howtointro",
            listKey: "finance.inflation.howtolist",
            linkparacontent: "finance.inflation.howtoendtext",
            linkparaKey: "finance.inflation.howtoInterLink",
            linkparaslug: "roi-calculator",
          },
          {
            id: "why-works",
            titleKey: "finance.inflation.whyformulaworkstitle",
            contentKey: "finance.inflation.whyformulaworkscontent",
          },
        ],
      },
    ],

    faqTitleKey: "finance.inflation.faqTitle",
    faqs: [
      { qKey: "finance.inflation.faq.0.q", aKey: "finance.inflation.faq.0.a" },
      { qKey: "finance.inflation.faq.1.q", aKey: "finance.inflation.faq.1.a" },
      { qKey: "finance.inflation.faq.2.q", aKey: "finance.inflation.faq.2.a" },
      { qKey: "finance.inflation.faq.3.q", aKey: "finance.inflation.faq.3.a" },
      { qKey: "finance.inflation.faq.4.q", aKey: "finance.inflation.faq.4.a" },
      { qKey: "finance.inflation.faq.5.q", aKey: "finance.inflation.faq.5.a" },
    ],
  },
  {
    slug: "currency-converter",
    metaTitleKey: "finance.currency.metaTitle",
    metaDescriptionKey: "finance.currency.desc",
    titleKey: "finance.currency.title",
    category: "Finance",
    descriptionKey: "finance.currency.desc",
    inputs: [
      { label: "finance.currency.amount", name: "amount", type: "number", unit: "amount" },
      { label: "finance.currency.fromCurrency", name: "fromCurrency", type: "text" },
      { label: "finance.currency.toCurrency", name: "toCurrency", type: "text" },
    ],
    formulaId: "currency",
    toc: [
      { id: "about", labelKey: "finance.currency.tocabout" },
      { id: "conversion", labelKey: "finance.currency.tocconversion" },
      { id: "formula", labelKey: "finance.currency.tocformula" },
      { id: "example", labelKey: "finance.currency.tocexample" },
      { id: "accurate", labelKey: "finance.currency.tocaccurateconversion" },
    ],



    heading: "finance.currency.heading",

    sections: [
      {
        id: "about",
        titleKey: "finance.currency.aboutTitle",
        contentKey: "finance.currency.aboutDesc",
        linkparacontent: "finance.currency.aboutExtratext",
        linkparaKey: "finance.currency.aboutInterLink",
        linkparaslug: "inflation-calculator",
        subsections: [
          {
            id: "conversion",
            titleKey: "finance.currency.conversionTitle",
            contentKey: "finance.currency.conversioncontent",
            textKey: "finance.currency.keyhighlight",
            listKey: "finance.currency.keyhighlightList",
            endKey: "finance.currency.keyhighlightsendtext",
          },
        ],
      },
      {
        id: "formula",
        titleKey: "finance.currency.formulatitle",
        subsections: [
          {
            id: "formula-how",
            titleKey: "finance.currency.formulasubtitle",
            introKey: "finance.currency.formulasubintro",
            formulaKey: "finance.currency.formula1",
            pointsKey: "finance.currency.formula1list",
          },
          {
            id: "formula-image",
            imageKey: "finance.currency.formulaImage",
            imageAltKey: "finance.currency.formulaImageAlt",
          },
          {
            id: "example",
            titleKey: "finance.currency.exampletitle",
            introKey: "finance.currency.exampleintro",
            formulaKey: "finance.currency.exampleformula",
            endKey: "finance.currency.exampleendtext",
          },
          {
            id: "accurate",
            titleKey: "finance.currency.accuratetitle",
            subtitleKey: "finance.currency.accuratesubtitle",
            contentKey: "finance.currency.accuratesubcontent",
            listKey: "finance.currency.accuratesublist",
            endKey: "finance.currency.accuratesubend",
          },
        ],
      },
    ],

    faqTitleKey: "finance.currency.faqTitle",
    faqs: [
      { qKey: "finance.currency.faq.0.q", aKey: "finance.currency.faq.0.a" },
      { qKey: "finance.currency.faq.1.q", aKey: "finance.currency.faq.1.a" },
      { qKey: "finance.currency.faq.2.q", aKey: "finance.currency.faq.2.a" },
      { qKey: "finance.currency.faq.3.q", aKey: "finance.currency.faq.3.a" },
      { qKey: "finance.currency.faq.4.q", aKey: "finance.currency.faq.4.a" },
      { qKey: "finance.currency.faq.5.q", aKey: "finance.currency.faq.5.a" },
    ],
  },
   // {
  //   slug: "discount-calculator",
  //   metaTitleKey: "finance.discount.metaTitle",
  //   metaDescriptionKey: "finance.discount.desc",
  //   titleKey: "finance.discount.title",
  //   category: "Finance",
  //   descriptionKey: "finance.discount.desc",
  //   inputs: [
  //     { label: "finance.discount.originalPrice", name: "originalPrice", type: "number", unit: "$" },
  //     { label: "finance.discount.discountPercent", name: "discountPercent", type: "number", unit: "%" },
  //   ],
  //   formulaId: "discount",
  //   sections: [
  //     { id: "intro", titleKey: "finance.discount.about", contentKey: "finance.discount.aboutText" },
  //     { id: "formula", titleKey: "finance.discount.formula", contentKey: "finance.discount.formulaText" },
  //   ],
  //   faqTitleKey: "finance.discount.faqTitle",
  //   faqs: [
  //     { qKey: "finance.discount.faq.0.q", aKey: "finance.discount.faq.0.a" },
  //     { qKey: "finance.discount.faq.1.q", aKey: "finance.discount.faq.1.a" },
  //     { qKey: "finance.discount.faq.2.q", aKey: "finance.discount.faq.2.a" },
  //     { qKey: "finance.discount.faq.3.q", aKey: "finance.discount.faq.3.a" },
  //     { qKey: "finance.discount.faq.4.q", aKey: "finance.discount.faq.4.a" },
  //     { qKey: "finance.discount.faq.5.q", aKey: "finance.discount.faq.5.a" },
  //   ],
  // },
  // {
  //   slug: "tip-calculator",
  //   metaTitleKey: "finance.tip.metaTitle",
  //   metaDescriptionKey: "finance.tip.desc",
  //   titleKey: "finance.tip.title",
  //   category: "Finance",
  //   descriptionKey: "finance.tip.desc",
  //   inputs: [
  //     { label: "finance.tip.billAmount", name: "billAmount", type: "number", unit: "$" },
  //     { label: "finance.tip.tipPercent", name: "tipPercent", type: "number", unit: "%" },
  //     { label: "finance.tip.people", name: "people", type: "number", unit: "people" },
  //   ],
  //   formulaId: "tip",
  //   sections: [
  //     { id: "intro", titleKey: "finance.tip.about", contentKey: "finance.tip.aboutText" },
  //     { id: "formula", titleKey: "finance.tip.formula", contentKey: "finance.tip.formulaText" },
  //   ],
  //   faqTitleKey: "finance.tip.faqTitle",
  //   faqs: [
  //     { qKey: "finance.tip.faq.0.q", aKey: "finance.tip.faq.0.a" },
  //     { qKey: "finance.tip.faq.1.q", aKey: "finance.tip.faq.1.a" },
  //     { qKey: "finance.tip.faq.2.q", aKey: "finance.tip.faq.2.a" },
  //     { qKey: "finance.tip.faq.3.q", aKey: "finance.tip.faq.3.a" },
  //     { qKey: "finance.tip.faq.4.q", aKey: "finance.tip.faq.4.a" },
  //     { qKey: "finance.tip.faq.5.q", aKey: "finance.tip.faq.5.a" },
  //   ],
  // },
   // {
  //   slug: "compound-interest-calculator",
  //   metaTitleKey: "finance.compound.metaTitle",
  //   metaDescriptionKey: "finance.compound.desc",
  //   titleKey: "finance.compound.title",
  //   category: "Finance",
  //   descriptionKey: "finance.compound.desc",
  //   inputs: [
  //     { label: "finance.compound.principal", name: "principal", type: "number", unit: "$" },
  //     { label: "finance.compound.rate", name: "rate", type: "number", unit: "%" },
  //     { label: "finance.compound.years", name: "years", type: "number", unit: "years" },
  //     { label: "finance.compound.compounds", name: "compounds", type: "number", unit: "times/year" },
  //   ],
  //   formulaId: "compound",
  //   sections: [
  //     { id: "intro", titleKey: "finance.compound.about", contentKey: "finance.compound.aboutText" },
  //     { id: "formula", titleKey: "finance.compound.formula", contentKey: "finance.compound.formulaText" },
  //   ],
  //   faqTitleKey: "finance.compound.faqTitle",
  //   faqs: [
  //     { qKey: "finance.compound.faq.0.q", aKey: "finance.compound.faq.0.a" },
  //     { qKey: "finance.compound.faq.1.q", aKey: "finance.compound.faq.1.a" },
  //     { qKey: "finance.compound.faq.2.q", aKey: "finance.compound.faq.2.a" },
  //     { qKey: "finance.compound.faq.3.q", aKey: "finance.compound.faq.3.a" },
  //     { qKey: "finance.compound.faq.4.q", aKey: "finance.compound.faq.4.a" },
  //     { qKey: "finance.compound.faq.5.q", aKey: "finance.compound.faq.5.a" },
  //   ],
  // },
  // {
  //   slug: "savings-calculator",
  //   metaTitleKey: "finance.savings.metaTitle",
  //   metaDescriptionKey: "finance.savings.desc",
  //   titleKey: "finance.savings.title",
  //   category: "Finance",
  //   descriptionKey: "finance.savings.desc",
  //   inputs: [
  //     { label: "finance.savings.initial", name: "initial", type: "number", unit: "$" },
  //     { label: "finance.savings.monthly", name: "monthly", type: "number", unit: "$" },
  //     { label: "finance.savings.rate", name: "rate", type: "number", unit: "%" },
  //     { label: "finance.savings.years", name: "years", type: "number", unit: "years" },
  //   ],
  //   formulaId: "savings",
  //   sections: [
  //     { id: "intro", titleKey: "finance.savings.about", contentKey: "finance.savings.aboutText" },
  //     { id: "formula", titleKey: "finance.savings.formula", contentKey: "finance.savings.formulaText" },
  //   ],
  //   faqTitleKey: "finance.savings.faqTitle",
  //   faqs: [
  //     { qKey: "finance.savings.faq.0.q", aKey: "finance.savings.faq.0.a" },
  //     { qKey: "finance.savings.faq.1.q", aKey: "finance.savings.faq.1.a" },
  //     { qKey: "finance.savings.faq.2.q", aKey: "finance.savings.faq.2.a" },
  //     { qKey: "finance.savings.faq.3.q", aKey: "finance.savings.faq.3.a" },
  //     { qKey: "finance.savings.faq.4.q", aKey: "finance.savings.faq.4.a" },
  //     { qKey: "finance.savings.faq.5.q", aKey: "finance.savings.faq.5.a" },
  //   ],
  // },
]