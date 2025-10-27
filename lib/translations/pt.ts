import { BookOpen, Globe, Info } from "lucide-react";

export const ptTranslations = {
  hero: {
    title: "Calyx Ferramentas Inteligentes Resultados Instantâneos",
    subtitle:
      "A Calyx oferece uma coleção completa de calculadoras online gratuitas para finanças, saúde, educação, matemática e conversões. Cada calculadora fornece resultados instantâneos e precisos com uma experiência limpa e sem anúncios. Seja você um estudante, profissional ou usuário comum, a Calyx simplifica cálculos complexos a qualquer hora e em qualquer lugar — inteligente, rápida e confiável.",
    cta: "Explorar Categorias",
  },
  nav: {
    home: "Início",
    about: "Sobre",
    services: "Serviços",
    contact: "Contato",
    calculators: "Calculadoras",
  },
  feature: {
    title: "Nossas Calculadoras",
    description: "Explore nossa coleção de calculadoras úteis",
  },
  categories: {
    health: "Saúde",
    finance: "Finanças",
    all: "Todas as Calculadoras",
  },
      cards: {
  title: "Calculadoras Online Gratuitas"
    },
  categoriespage:{
  title:"Explorar Categorias de Calculadoras",
  description:"Descubra todas as categorias de calculadoras online gratuitas — de finanças e saúde a matemática e conversões. O Calyx ajuda você a calcular de forma mais inteligente, rápida e fácil em cada área."
},
  search: {
    placeholder: "Procurar calculadoras...",
    notFound: "Nenhuma calculadora encontrada",
  },
  features: {
    title: "Por Que Escolher Nossas Calculadoras",
    feature1: "Cálculos Precisos",
    feature1Desc:
      "Obtenha resultados exatos usando fórmulas e algoritmos padrão da indústria",
    feature2: "Múltiplas Categorias",
    feature2Desc:
      "Acesse ferramentas de calculadora de saúde, finanças e muito mais em um só lugar",
    feature3: "Rápido e Fácil",
    feature3Desc:
      "Interface simples com resultados instantâneos e sem etapas complicadas",
  },
  //about content
  about: {
  tagline: "Ferramentas inteligentes. Matemática simples. Alcance global.",
  title: "Sobre a Calyx",
  subtitle:
    "A Calyx é uma plataforma de nova geração que oferece calculadoras online inteligentes, precisas e fáceis de usar para estudantes, profissionais e empresas em todo o mundo.",
  missiontitle: "Nossa missão na Calyx",
  missionsub:
    "Na Calyx, acreditamos que cálculos precisos devem ser simples, acessíveis e empoderadores. Nossa missão é fornecer as ferramentas de cálculo mais confiáveis e intuitivas do mundo — desde finanças até saúde — para que os usuários possam tomar decisões mais inteligentes e baseadas em dados.",
  missionsub2:
    "Com precisão, inovação e confiança no centro, estamos moldando um futuro digital mais inteligente — um cálculo de cada vez.",
  missioncard1: "Precisão",
  card1sub:
    "Cada calculadora que desenvolvemos é baseada em fórmulas verificadas, garantindo resultados consistentes e confiáveis em cada uso.",
  missioncard2: "Inovação",
  card2sub:
    "Exploramos continuamente novas maneiras de tornar dados complexos mais fáceis de entender e interagir por meio de ferramentas modernas e adaptáveis.",
  missioncard3: "Acessibilidade",
  card3sub:
    "A Calyx é projetada para todos, em qualquer lugar — multilíngue, responsiva e construída para capacitar usuários globais em todos os dispositivos.",
  valuetitle: "Nossos Princípios Fundamentais",
  valuesubtitle:
    "Na Calyx, nossa base é construída sobre valores que definem como criamos, inovamos e apoiamos nossos usuários todos os dias.",
  value1Title: "Clareza em Cada Cálculo",
  value1Desc:
    "Acreditamos que os dados nunca devem confundir — nossas ferramentas simplificam ideias complexas em informações claras e úteis.",
  value2Title: "Compromisso com a Precisão",
  value2Desc:
    "Cada fórmula e resultado é verificado para garantir a confiabilidade em todas as nossas calculadoras.",
  value3Title: "Inovação que Empodera",
  value3Desc:
    "A Calyx está em constante evolução — trazendo ferramentas mais inteligentes que fazem os números trabalharem a seu favor, não contra você.",
},
contact: {
  hero: {
    title: "Entre em contato com a Calyx",
    subtitle:
      "Valorizamos cada mensagem — seja feedback, colaboração ou apenas um olá amigável. Vamos nos conectar e criar coisas incríveis juntos.",
    primaryCta: "Envie-nos um e-mail",
    secondaryCta: "Saiba mais sobre nós",
  },
  support: {
    title: "Explore mais, aprenda melhor",
    subtitle:
      "Precisa de recursos extras, orientação ou ferramentas úteis? Reunimos tudo para tornar sua experiência mais simples e inteligente.",
    details: [
      {
        heading: "Guias úteis",
        content:
          "Explore nossos artigos e explicações detalhadas para uma melhor compreensão.",
        icon: BookOpen,
      },
      {
        heading: "Base de conhecimento",
        content:
          "Encontre informações e referências detalhadas sobre vários tópicos.",
        icon: Info,
      },
      {
        heading: "Acesso global",
        content:
          "Todos os recursos foram projetados para serem simples, multilíngues e acessíveis globalmente.",
        icon: Globe,
      },
    ],
  },
},

  // Calculadoras de Saúde
  health: {
    bodyFat: {
      title: "Calculadora de Gordura Corporal",
      desc: "Estime sua porcentagem de gordura corporal",
      waist: "Cintura (cm)",
      neck: "Pescoço (cm)",
      height: "Altura (cm)",
      gender: "Gênero",
      male: "Masculino",
      female: "Feminino",
      result: "Percentual de Gordura Corporal",
      about: "Sobre a Gordura Corporal",
      aboutText:
        "A porcentagem de gordura corporal mostra quanto do seu corpo é composto por tecido adiposo. É um indicador melhor de boa forma do que o IMC.",
      formula: "Fórmula",
      formulaText:
        "Usa o método da Marinha dos EUA: %GC = 495 / (1.0324 - 0.19077 * log10(cintura - pescoço) + 0.15456 * log10(altura)) - 450",
    },
    bmi: {
      title: "Calculadora de IMC",
      desc: "Calcule seu Índice de Massa Corporal",
      weight: "Peso (kg)",
      height: "Altura (cm)",
      result: "IMC",
      about: "Sobre o IMC",
      aboutText:
        "O IMC é uma medida de gordura corporal baseada na altura e no peso. Aplica-se a homens e mulheres adultos.",
      formula: "Fórmula",
      formulaText: "IMC = peso (kg) / (altura (m))²",
    },
    calories: {
      title: "Calculadora de Calorias",
      desc: "Calcule suas necessidades calóricas diárias",
      age: "Idade (anos)",
      weight: "Peso (kg)",
      height: "Altura (cm)",
      activity: "Nível de Atividade",
      sedentary: "Sedentário",
      light: "Leve",
      moderate: "Moderado",
      active: "Ativo",
      result: "Calorias Diárias",
      about: "Sobre Calorias",
      aboutText:
        "Calcula suas necessidades calóricas diárias com base na idade, peso, altura e nível de atividade.",
      formula: "Fórmula",
      formulaText: "Usa a equação Mifflin-St Jeor com multiplicador de atividade",
    },
    waterIntake: {
      title: "Calculadora de Ingestão de Água",
      desc: "Calcule a ingestão diária recomendada de água",
      weight: "Peso (kg)",
      activity: "Nível de Atividade (0–2)",
      result: "Água Diária (litros)",
      about: "Sobre a Ingestão de Água",
      aboutText:
        "A recomendação geral é de 8 copos por dia, mas as necessidades variam conforme o peso e a atividade.",
      formula: "Fórmula",
      formulaText: "Base: peso (kg) × 0,033 litros + ajuste de atividade",
    },
    pace: {
      title: "Calculadora de Ritmo de Corrida",
      desc: "Calcule seu ritmo de corrida",
      distance: "Distância (km)",
      time: "Tempo (minutos)",
      result: "Ritmo (min/km)",
      about: "Sobre o Ritmo",
      aboutText:
        "Calcula seu ritmo médio de corrida com base na distância e no tempo.",
      formula: "Fórmula",
      formulaText: "Ritmo = Tempo / Distância",
    },
    heartRate: {
      title: "Calculadora de Zona de Frequência Cardíaca",
      desc: "Calcule suas zonas de treino de frequência cardíaca",
      age: "Idade (anos)",
      restingHR: "Frequência Cardíaca em Repouso (bpm)",
      result: "Zonas de Frequência Cardíaca",
      about: "Sobre as Zonas de FC",
      aboutText:
        "Diferentes zonas de frequência cardíaca correspondem a diferentes intensidades de treino.",
      formula: "Fórmula",
      formulaText:
        "Usa a fórmula de Karvonen: FC Alvo = (FC Máx - FC Repouso) × Intensidade + FC Repouso",
    },
    protein: {
      title: "Calculadora de Proteína",
      desc: "Calcule suas necessidades diárias de proteína",
      weight: "Peso (kg)",
      goal: "Objetivo",
      maintenance: "Manutenção",
      muscle: "Ganho Muscular",
      loss: "Perda de Peso",
      result: "Proteína Diária (g)",
      about: "Sobre Proteína",
      aboutText:
        "As necessidades de proteína variam de acordo com seus objetivos de condicionamento físico e peso corporal.",
      formula: "Fórmula",
      formulaText:
        "Manutenção: 0,8g/kg, Músculo: 1,6–2,2g/kg, Perda: 1,2–1,6g/kg",
    },
    tdee: {
      title: "Calculadora de TDEE",
      desc: "Calcule o Gasto Energético Diário Total",
      age: "Idade (anos)",
      weight: "Peso (kg)",
      height: "Altura (cm)",
      activity: "Nível de Atividade",
      result: "TDEE (calorias)",
      about: "Sobre TDEE",
      aboutText:
        "O TDEE é o número total de calorias que seu corpo queima diariamente.",
      formula: "Fórmula",
      formulaText: "Usa a equação Mifflin-St Jeor com multiplicador de atividade",
    },
    macros: {
      title: "Calculadora de Macronutrientes",
      desc: "Calcule a divisão dos macronutrientes",
      calories: "Calorias Diárias",
      diet: "Tipo de Dieta",
      balanced: "Equilibrada",
      lowCarb: "Baixo Carboidrato",
      highProtein: "Alta Proteína",
      result: "Macronutrientes",
      about: "Sobre Macronutrientes",
      aboutText:
        "Macronutrientes são proteínas, carboidratos e gorduras que compõem sua dieta.",
      formula: "Fórmula",
      formulaText:
        "Equilibrada: 40C/30P/30G, Baixo Carbo: 30C/35P/35G, Alta Proteína: 35C/40P/25G",
    },
    bfp: {
      title: "Porcentagem de Gordura Corporal",
      desc: "Estime a gordura corporal a partir das medidas",
      waist: "Cintura (cm)",
      hip: "Quadril (cm)",
      neck: "Pescoço (cm)",
      result: "Gordura Corporal %",
      about: "Sobre Gordura Corporal",
      aboutText:
        "A porcentagem de gordura corporal é uma medida melhor de boa forma do que o peso sozinho.",
      formula: "Fórmula",
      formulaText:
        "Usa medições de circunferência para estimativa",
    },
  },
  // Calculadoras de Finanças
  finance: {
    loan: {
      title: "Calculadora de Empréstimo",
      desc: "Calcule pagamentos e juros de empréstimos",
      principal: "Valor do Empréstimo ($)",
      rate: "Taxa de Juros Anual (%)",
      years: "Prazo (anos)",
      result: "Pagamento Mensal",
      about: "Sobre Empréstimos",
      aboutText:
        "Calcule seu pagamento mensal de empréstimo com base no valor, taxa e prazo.",
      formula: "Fórmula",
      formulaText: "M = P × [r(1+r)^n] / [(1+r)^n - 1]",
    },
    compound: {
      title: "Calculadora de Juros Compostos",
      desc: "Calcule o crescimento com juros compostos",
      principal: "Principal ($)",
      rate: "Taxa Anual (%)",
      years: "Anos",
      compounds: "Compostos por Ano",
      result: "Montante Final",
      about: "Sobre Juros Compostos",
      aboutText: "Juros compostos são juros ganhos sobre juros.",
      formula: "Fórmula",
      formulaText: "A = P(1 + r/n)^(nt)",
    },
    savings: {
      title: "Calculadora de Poupança",
      desc: "Calcule o crescimento da poupança ao longo do tempo",
      initial: "Valor Inicial ($)",
      monthly: "Poupança Mensal ($)",
      rate: "Taxa de Juros Anual (%)",
      years: "Anos",
      result: "Total Poupado",
      about: "Sobre Poupança",
      aboutText:
        "Veja como sua poupança cresce com depósitos regulares e juros.",
      formula: "Fórmula",
      formulaText:
        "Calcula o valor futuro com depósitos regulares",
    },
    mortgage: {
      title: "Calculadora de Hipoteca",
      desc: "Calcule pagamentos de hipoteca",
      homePrice: "Preço da Casa ($)",
      downPayment: "Entrada ($)",
      rate: "Taxa de Juros (%)",
      years: "Prazo (anos)",
      result: "Pagamento Mensal",
      about: "Sobre Hipotecas",
      aboutText:
        "Calcule seu pagamento mensal e o total de juros pagos.",
      formula: "Fórmula",
      formulaText: "M = P × [r(1+r)^n] / [(1+r)^n - 1]",
    },
    roi: {
      title: "Calculadora de ROI",
      desc: "Calcule o retorno sobre investimento",
      investment: "Investimento ($)",
      gain: "Lucro ($)",
      result: "ROI %",
      about: "Sobre ROI",
      aboutText:
        "O ROI mede a rentabilidade de um investimento.",
      formula: "Fórmula",
      formulaText: "ROI = (Lucro / Investimento) × 100",
    },

    breakeven: {
      title: "Calculadora de Ponto de Equilíbrio",
      desc: "Calcule o ponto de equilíbrio",
      fixedCosts: "Custos Fixos ($)",
      variableCost: "Custo Variável por Unidade ($)",
      price: "Preço por Unidade ($)",
      result: "Unidades de Equilíbrio",
      about: "Sobre o Ponto de Equilíbrio",
      aboutText:
        "O ponto de equilíbrio ocorre quando a receita é igual ao custo total.",
      formula: "Fórmula",
      formulaText:
        "Equilíbrio = Custos Fixos / (Preço - Custo Variável)",
    },
    discount: {
      title: "Calculadora de Desconto",
      desc: "Calcule descontos e preço final",
      originalPrice: "Preço Original ($)",
      discountPercent: "Desconto (%)",
      result: "Preço Final",
      about: "Sobre Descontos",
      aboutText:
        "Calcule o preço final após aplicar o desconto.",
      formula: "Fórmula",
      formulaText: "Preço Final = Original × (1 - Desconto%)",
    },
    tip: {
      title: "Calculadora de Gorjeta",
      desc: "Calcule gorjeta e total da conta",
      billAmount: "Valor da Conta ($)",
      tipPercent: "Gorjeta (%)",
      people: "Número de Pessoas",
      result: "Gorjeta e Total",
      about: "Sobre Gorjetas",
      aboutText:
        "Calcule o valor da gorjeta e divida a conta entre as pessoas.",
      formula: "Fórmula",
      formulaText: "Gorjeta = Conta × %, Por Pessoa = Total / Pessoas",
    },
    inflation: {
      title: "Calculadora de Inflação",
      desc: "Calcule o impacto da inflação",
      amount: "Valor ($)",
      years: "Anos",
      rate: "Taxa de Inflação (%)",
      result: "Valor Futuro",
      about: "Sobre Inflação",
      aboutText:
        "Veja como a inflação afeta o valor do dinheiro ao longo do tempo.",
      formula: "Fórmula",
      formulaText: "Valor Futuro = Valor × (1 + Taxa)^Anos",
    },
    currency: {
      title: "Conversor de Moedas",
      desc: "Converta entre moedas",
      amount: "Valor",
      fromCurrency: "De Moeda",
      toCurrency: "Para Moeda",
      result: "Valor Convertido",
      about: "Sobre Moedas",
      aboutText:
        "Converta entre diferentes moedas com taxas de câmbio atuais.",
      formula: "Fórmula",
      formulaText: "Usa taxas de câmbio atuais",
    },
  },
  footer: {
    copyright: "© 2025 Calyx. Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    terms: "Termos de Serviço",
  },
};
