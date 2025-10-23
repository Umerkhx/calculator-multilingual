import type { Locale } from "./i18n"

export const calculatorTranslations = {
  en: {
    categories: {
      health: "Health",
      finance: "Finance",
    },
    calculators: {
      bodyFat: {
        title: "Body Fat Calculator",
        description: "Estimate your body fat percentage using measurements.",
      },
      bmi: {
        title: "BMI Calculator",
        description: "Calculate your Body Mass Index based on height and weight.",
      },
      loan: {
        title: "Loan Calculator",
        description: "Calculate monthly loan payments and total interest.",
      },
    },
    inputs: {
      waist: "Waist",
      neck: "Neck",
      height: "Height",
      gender: "Gender",
      genderMale: "Male",
      genderFemale: "Female",
      weight: "Weight",
      principal: "Loan Amount",
      rate: "Interest Rate",
      years: "Loan Period",
    },
    sections: {
      bodyFat: {
        intro: {
          title: "About Body Fat",
          content:
            "Body fat percentage shows how much of your body is fat tissue. It is a better indicator of fitness than BMI.",
        },
        formula: {
          title: "Formula",
          content: "Uses U.S. Navy method based on measurements for accurate body fat estimation.",
        },
        usage: {
          title: "How to Use",
          content:
            "Enter your waist, neck, and height measurements along with your gender to calculate body fat percentage.",
        },
      },
      bmi: {
        intro: {
          title: "About BMI",
          content: "Body Mass Index (BMI) is a measure of body fat based on height and weight.",
        },
        formula: {
          title: "Formula",
          content: "BMI = weight (kg) / (height (m))²",
        },
      },
      loan: {
        intro: {
          title: "About Loan Calculation",
          content: "Calculate your monthly payment and total interest for any loan.",
        },
        formula: {
          title: "Formula",
          content:
            "Monthly Payment = P × [r(1+r)^n] / [(1+r)^n - 1], where P is principal, r is monthly rate, n is number of payments.",
        },
      },
    },
  },
  ur: {
    categories: {
      health: "صحت",
      finance: "مالیات",
    },
    calculators: {
      bodyFat: {
        title: "جسم کی چربی کیلکولیٹر",
        description: "اپنی جسم کی چربی کی فیصد کا تخمینہ لگائیں۔",
      },
      bmi: {
        title: "BMI کیلکولیٹر",
        description: "اپنے قد اور وزن کی بنیاد پر BMI کا حساب لگائیں۔",
      },
      loan: {
        title: "قرض کیلکولیٹر",
        description: "ماہانہ قرض کی ادائیگی اور کل سود کا حساب لگائیں۔",
      },
    },
    inputs: {
      waist: "کمر",
      neck: "گردن",
      height: "قد",
      gender: "جنس",
      genderMale: "مرد",
      genderFemale: "عورت",
      weight: "وزن",
      principal: "قرض کی رقم",
      rate: "سود کی شرح",
      years: "قرض کی مدت",
    },
    sections: {
      bodyFat: {
        intro: {
          title: "جسم کی چربی کے بارے میں",
          content: "جسم کی چربی کی فیصد ظاہر کرتی ہے کہ آپ کے جسم کا کتنا حصہ چربی ہے۔",
        },
        formula: {
          title: "فارمولا",
          content: "یہ U.S. Navy کے طریقے کو استعمال کرتے ہوئے درست نتائج دیتا ہے۔",
        },
        usage: {
          title: "استعمال کی ہدایات",
          content: "اپنی کمر، گردن اور قد کی پیمائش درج کریں تاکہ جسم کی چربی کا فیصد معلوم ہو۔",
        },
      },
      bmi: {
        intro: {
          title: "BMI کے بارے میں",
          content: "BMI قد اور وزن کی بنیاد پر جسم کی چربی کا پیمانہ ہے۔",
        },
        formula: {
          title: "فارمولا",
          content: "BMI = وزن (کلوگرام) / (قد (میٹر))²",
        },
      },
      loan: {
        intro: {
          title: "قرض کی گنتی کے بارے میں",
          content: "کسی بھی قرض کے لیے ماہانہ ادائیگی اور کل سود کا حساب لگائیں۔",
        },
        formula: {
          title: "فارمولا",
          content: "ماہانہ ادائیگی = P × [r(1+r)^n] / [(1+r)^n - 1]",
        },
      },
    },
  },
  es: {
    categories: {
      health: "Salud",
      finance: "Finanzas",
    },
    calculators: {
      bodyFat: {
        title: "Calculadora de Grasa Corporal",
        description: "Estime su porcentaje de grasa corporal usando medidas.",
      },
      bmi: {
        title: "Calculadora de IMC",
        description: "Calcule su Índice de Masa Corporal basado en altura y peso.",
      },
      loan: {
        title: "Calculadora de Préstamos",
        description: "Calcule los pagos mensuales del préstamo e interés total.",
      },
    },
    inputs: {
      waist: "Cintura",
      neck: "Cuello",
      height: "Altura",
      gender: "Género",
      genderMale: "Hombre",
      genderFemale: "Mujer",
      weight: "Peso",
      principal: "Monto del Préstamo",
      rate: "Tasa de Interés",
      years: "Período del Préstamo",
    },
    sections: {
      bodyFat: {
        intro: {
          title: "Acerca de la Grasa Corporal",
          content: "El porcentaje de grasa corporal muestra cuánto de su cuerpo es tejido graso.",
        },
        formula: {
          title: "Fórmula",
          content: "Utiliza el método de la Marina de EE.UU. basado en medidas.",
        },
        usage: {
          title: "Cómo Usar",
          content: "Ingrese sus medidas de cintura, cuello y altura para calcular el porcentaje de grasa corporal.",
        },
      },
      bmi: {
        intro: {
          title: "Acerca del IMC",
          content: "El Índice de Masa Corporal (IMC) es una medida de grasa corporal basada en altura y peso.",
        },
        formula: {
          title: "Fórmula",
          content: "IMC = peso (kg) / (altura (m))²",
        },
      },
      loan: {
        intro: {
          title: "Acerca del Cálculo de Préstamos",
          content: "Calcule su pago mensual e interés total para cualquier préstamo.",
        },
        formula: {
          title: "Fórmula",
          content: "Pago Mensual = P × [r(1+r)^n] / [(1+r)^n - 1]",
        },
      },
    },
  },
  fr: {
  categories: {
    health: "Santé",
    finance: "Finances",
  },
  calculators: {
    bodyFat: {
      title: "Calculateur de Graisse Corporelle",
      description: "Estimez votre pourcentage de graisse corporelle à partir de vos mensurations.",
    },
    bmi: {
      title: "Calculateur d’IMC",
      description: "Calculez votre indice de masse corporelle en fonction de votre taille et de votre poids.",
    },
    loan: {
      title: "Calculateur de Prêt",
      description: "Calculez les paiements mensuels de votre prêt et le montant total des intérêts.",
    },
  },
  inputs: {
    waist: "Tour de taille",
    neck: "Tour de cou",
    height: "Taille",
    gender: "Genre",
    genderMale: "Homme",
    genderFemale: "Femme",
    weight: "Poids",
    principal: "Montant du prêt",
    rate: "Taux d’intérêt",
    years: "Durée du prêt",
  },
  sections: {
    bodyFat: {
      intro: {
        title: "À propos de la Graisse Corporelle",
        content: "Le pourcentage de graisse corporelle indique quelle proportion de votre corps est constituée de tissu adipeux.",
      },
      formula: {
        title: "Formule",
        content: "Utilise la méthode de la Marine américaine basée sur les mensurations.",
      },
      usage: {
        title: "Comment Utiliser",
        content: "Saisissez vos mensurations de taille, de cou et de taille corporelle pour calculer votre pourcentage de graisse.",
      },
    },
    bmi: {
      intro: {
        title: "À propos de l’IMC",
        content: "L’indice de masse corporelle (IMC) est une mesure de la graisse corporelle basée sur la taille et le poids.",
      },
      formula: {
        title: "Formule",
        content: "IMC = poids (kg) / (taille (m))²",
      },
    },
    loan: {
      intro: {
        title: "À propos du Calcul de Prêt",
        content: "Calculez votre paiement mensuel et le montant total des intérêts pour n’importe quel prêt.",
      },
      formula: {
        title: "Formule",
        content: "Paiement mensuel = P × [r(1+r)^n] / [(1+r)^n - 1]",
      },
    },
  },
},

ar: {
  categories: {
    health: "الصحة",
    finance: "التمويل",
  },
  calculators: {
    bodyFat: {
      title: "حاسبة نسبة دهون الجسم",
      description: "احسب نسبة الدهون في جسمك باستخدام القياسات.",
    },
    bmi: {
      title: "حاسبة مؤشر كتلة الجسم (BMI)",
      description: "احسب مؤشر كتلة جسمك بناءً على الطول والوزن.",
    },
    loan: {
      title: "حاسبة القرض",
      description: "احسب الدفعات الشهرية وإجمالي الفائدة على القرض.",
    },
  },
  inputs: {
    waist: "الخصر",
    neck: "الرقبة",
    height: "الطول",
    gender: "الجنس",
    genderMale: "ذكر",
    genderFemale: "أنثى",
    weight: "الوزن",
    principal: "مبلغ القرض",
    rate: "نسبة الفائدة",
    years: "مدة القرض (بالسنوات)",
  },
  sections: {
    bodyFat: {
      intro: {
        title: "حول نسبة دهون الجسم",
        content: "نسبة دهون الجسم تُظهر مقدار الأنسجة الدهنية مقارنة بإجمالي وزن الجسم.",
      },
      formula: {
        title: "الصيغة",
        content: "تستخدم طريقة البحرية الأمريكية المعتمدة على القياسات لتقدير نسبة الدهون.",
      },
      usage: {
        title: "كيفية الاستخدام",
        content: "أدخل قياسات خصرك ورقبتك وطولك لحساب نسبة الدهون في جسمك.",
      },
    },
    bmi: {
      intro: {
        title: "حول مؤشر كتلة الجسم (BMI)",
        content: "مؤشر كتلة الجسم هو مقياس لكمية الدهون في الجسم بناءً على الطول والوزن.",
      },
      formula: {
        title: "الصيغة",
        content: "مؤشر كتلة الجسم = الوزن (كغ) / (الطول (م))²",
      },
    },
    loan: {
      intro: {
        title: "حول حساب القرض",
        content: "احسب الدفعة الشهرية وإجمالي الفائدة لأي نوع من القروض.",
      },
      formula: {
        title: "الصيغة",
        content: "الدفعة الشهرية = P × [r(1+r)^n] / [(1+r)^n - 1]",
      },
    },
  },
}


} as const

export function getCalculatorTranslation(locale: Locale, key: string): string {
  const keys = key.split(".")
  let value: any = calculatorTranslations[locale]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
