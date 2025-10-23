"use client"

import { useState } from "react"
import { getCalculatorBySlug } from "@/lib/calculators"
import { getTranslation, type Locale } from "@/lib/i18n"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"



const calculators: Record<string, (inputs: Record<string, number | string>) => number | string> = {
  "body-fat": (inputs) => {
    const waist = Number(inputs.waist)
    const neck = Number(inputs.neck)
    const height = Number(inputs.height)
    const gender = inputs.gender as string

    if (gender === "male") {
      return (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450).toFixed(1)
    } else {
      return (
        495 / (1.29579 - 0.35004 * Math.log10(waist + Number(inputs.hip) - neck) + 0.221 * Math.log10(height)) -
        450
      ).toFixed(1)
    }
  },
  bmi: (inputs) => {
    const weight = Number(inputs.weight)
    const height = Number(inputs.height) / 100
    return (weight / (height * height)).toFixed(1)
  },
  calories: (inputs) => {
    const age = Number(inputs.age)
    const weight = Number(inputs.weight)
    const height = Number(inputs.height)
    const activity = Number(inputs.activity)

    const bmr = 10 * weight + 6.25 * height - 5 * age + 5
    return Math.round(bmr * activity)
  },
  water: (inputs) => {
    const weight = Number(inputs.weight)
    const activity = Number(inputs.activity)
    return (weight * 0.033 + activity * 0.5).toFixed(1)
  },
  pace: (inputs) => {
    const distance = Number(inputs.distance)
    const time = Number(inputs.time)
    const paceMinutes = Math.floor(time / distance)
    const paceSeconds = Math.round((time / distance - paceMinutes) * 60)
    return `${paceMinutes}:${paceSeconds.toString().padStart(2, "0")}`
  },
  "heart-rate": (inputs) => {
    const age = Number(inputs.age)
    const restingHR = Number(inputs.restingHR)
    const maxHR = 220 - age
    const zones = {
      zone1: Math.round((maxHR - restingHR) * 0.5 + restingHR),
      zone2: Math.round((maxHR - restingHR) * 0.6 + restingHR),
      zone3: Math.round((maxHR - restingHR) * 0.7 + restingHR),
      zone4: Math.round((maxHR - restingHR) * 0.8 + restingHR),
      zone5: Math.round((maxHR - restingHR) * 0.9 + restingHR),
    }
    return `Z1: ${zones.zone1}, Z2: ${zones.zone2}, Z3: ${zones.zone3}, Z4: ${zones.zone4}, Z5: ${zones.zone5}`
  },
  protein: (inputs) => {
    const weight = Number(inputs.weight)
    const goal = Number(inputs.goal)
    return (weight * goal).toFixed(1)
  },
  tdee: (inputs) => {
    const age = Number(inputs.age)
    const weight = Number(inputs.weight)
    const height = Number(inputs.height)
    const activity = Number(inputs.activity)

    const bmr = 10 * weight + 6.25 * height - 5 * age + 5
    return Math.round(bmr * activity)
  },
  macros: (inputs) => {
    const calories = Number(inputs.calories)
    const diet = inputs.diet as string

    let carbs, protein, fat
    if (diet === "balanced") {
      carbs = (calories * 0.4) / 4
      protein = (calories * 0.3) / 4
      fat = (calories * 0.3) / 9
    } else if (diet === "lowcarb") {
      carbs = (calories * 0.3) / 4
      protein = (calories * 0.35) / 4
      fat = (calories * 0.35) / 9
    } else {
      carbs = (calories * 0.35) / 4
      protein = (calories * 0.4) / 4
      fat = (calories * 0.25) / 9
    }

    return `C: ${carbs.toFixed(0)}g, P: ${protein.toFixed(0)}g, F: ${fat.toFixed(0)}g`
  },
  bfp: (inputs) => {
    const waist = Number(inputs.waist)
    const hip = Number(inputs.hip)
    const neck = Number(inputs.neck)

    return (163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(0) - 78.387).toFixed(1)
  },
  loan: (inputs) => {
    const principal = Number(inputs.principal)
    const rate = Number(inputs.rate) / 100 / 12
    const years = Number(inputs.years)
    const n = years * 12

    const payment = (principal * (rate * Math.pow(1 + rate, n))) / (Math.pow(1 + rate, n) - 1)
    return payment.toFixed(2)
  },
  compound: (inputs) => {
    const principal = Number(inputs.principal)
    const rate = Number(inputs.rate) / 100
    const years = Number(inputs.years)
    const compounds = Number(inputs.compounds)

    const amount = principal * Math.pow(1 + rate / compounds, compounds * years)
    return amount.toFixed(2)
  },
  savings: (inputs) => {
    const initial = Number(inputs.initial)
    const monthly = Number(inputs.monthly)
    const rate = Number(inputs.rate) / 100 / 12
    const years = Number(inputs.years)
    const months = years * 12

    const futureValue = initial * Math.pow(1 + rate, months) + (monthly * (Math.pow(1 + rate, months) - 1)) / rate
    return futureValue.toFixed(2)
  },
  mortgage: (inputs) => {
    const homePrice = Number(inputs.homePrice)
    const downPayment = Number(inputs.downPayment)
    const principal = homePrice - downPayment
    const rate = Number(inputs.rate) / 100 / 12
    const years = Number(inputs.years)
    const n = years * 12

    const payment = (principal * (rate * Math.pow(1 + rate, n))) / (Math.pow(1 + rate, n) - 1)
    return payment.toFixed(2)
  },
  roi: (inputs) => {
    const investment = Number(inputs.investment)
    const gain = Number(inputs.gain)

    return ((gain / investment) * 100).toFixed(2)
  },
  breakeven: (inputs) => {
    const fixedCosts = Number(inputs.fixedCosts)
    const variableCost = Number(inputs.variableCost)
    const price = Number(inputs.price)

    return Math.ceil(fixedCosts / (price - variableCost))
  },
  discount: (inputs) => {
    const originalPrice = Number(inputs.originalPrice)
    const discountPercent = Number(inputs.discountPercent)

    return (originalPrice * (1 - discountPercent / 100)).toFixed(2)
  },
  tip: (inputs) => {
    const billAmount = Number(inputs.billAmount)
    const tipPercent = Number(inputs.tipPercent)
    const people = Number(inputs.people)

    const tip = billAmount * (tipPercent / 100)
    const total = billAmount + tip
    const perPerson = total / people

    return `Tip: $${tip.toFixed(2)}, Total: $${total.toFixed(2)}, Per Person: $${perPerson.toFixed(2)}`
  },
  inflation: (inputs) => {
    const amount = Number(inputs.amount)
    const years = Number(inputs.years)
    const rate = Number(inputs.rate) / 100

    return (amount * Math.pow(1 + rate, years)).toFixed(2)
  },
  currency: (inputs) => {
    return "Use live exchange rates API"
  },
}

export default async function CalculatorPage({ params }: any) {
  const { locale, category, calculator } = await params
  const calc = getCalculatorBySlug(category, calculator)

  if (!calc) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-destructive">{getTranslation(locale, "search.notFound")}</h1>
      </div>
    )
  }

  return <CalculatorContent calc={calc} locale={locale} calculatorFunc={calculators[calc.formulaId]} />
}

function CalculatorContent({ calc, locale, calculatorFunc }: any) {
  const [inputs, setInputs] = useState<Record<string, string | number>>({})
  const [result, setResult] = useState<string | number | null>(null)

  const handleCalculate = () => {
    if (calculatorFunc) {
      const res = calculatorFunc(inputs)
      setResult(res)
    }
  }

  const handleInputChange = (name: string, value: string | number) => {
    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Calculator Form */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>{getTranslation(locale, calc.titleKey)}</CardTitle>
              <CardDescription>{getTranslation(locale, calc.descriptionKey)}</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  handleCalculate()
                }}
              >
                {calc.inputs.map((input:any) => (
                  <div key={input.name} className="space-y-2">
                    <Label htmlFor={input.name}>
                      {getTranslation(locale, input.label)}
                      {input.unit && <span className="text-muted-foreground ml-1">({input.unit})</span>}
                    </Label>
                    {input.type === "select" ? (
                      <Select
                        value={String(inputs[input.name] || "")}
                        onValueChange={(value) => handleInputChange(input.name, value)}
                      >
                        <SelectTrigger id={input.name}>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          {input.options?.map((option:any) => (
                            <SelectItem key={option.value} value={option.value}>
                              {getTranslation(locale, option.label)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        id={input.name}
                        type={input.type}
                        placeholder={getTranslation(locale, input.label)}
                        value={inputs[input.name] || ""}
                        onChange={(e) => handleInputChange(input.name, e.target.value)}
                      />
                    )}
                  </div>
                ))}
                <Button onClick={handleCalculate} className="w-full">
                  Calculate
                </Button>
              </form>

              {result !== null && (
                <Card className="mt-4 bg-accent">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-1">{getTranslation(locale, calc.titleKey)}</p>
                    <p className="text-2xl font-bold">{result}</p>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Information Sections */}
        <div className="md:col-span-2">
          <Tabs defaultValue={calc.sections[0]?.id} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {calc.sections.map((section:any) => (
                <TabsTrigger key={section.id} value={section.id}>
                  {getTranslation(locale, section.title)}
                </TabsTrigger>
              ))}
            </TabsList>
            {calc.sections.map((section:any) => (
              <TabsContent key={section.id} value={section.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{getTranslation(locale, section.title)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{getTranslation(locale, section.content)}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
