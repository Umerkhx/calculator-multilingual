"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { getTranslation, type Locale } from "@/lib/i18n"
import type { Calculator } from "@/lib/calculators/types"

interface CalculatorFormProps {
  calculator: Calculator
  locale: Locale
  onCalculate: (inputs: Record<string, number | string>) => void
  result: string | number | null
}

export function CalculatorForm({ calculator, locale, onCalculate, result }: CalculatorFormProps) {
  const [inputs, setInputs] = useState<Record<string, string | number>>({})

  const handleInputChange = (name: string, value: string | number) => {
    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCalculate(inputs)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{getTranslation(locale, calculator.titleKey)}</CardTitle>
        <CardDescription>{getTranslation(locale, calculator.descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {calculator.inputs.map((input) => (
            <div key={input.name} className="space-y-2">
              <Label htmlFor={input.name}>
                {getTranslation(locale, input.label)}
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
                    {input.options?.map((option) => (
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
          <Button onClick={handleSubmit} className="w-full">
            Calculate
          </Button>
        </form>


      </CardContent>
    </Card>
  )
}
