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
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (name: string, value: string | number) => {
    setInputs((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateInputs = (): boolean => {
    const newErrors: Record<string, string> = {}

    calculator.inputs?.forEach((input) => {
      const value = inputs[input.name]
      
      // Check if field is empty
      if (value === undefined || value === "" || value === null) {
        newErrors[input.name] = `${getTranslation(locale, input.label)} is required`
        return
      }

      // For number inputs, validate it's a valid number
      if (input.type === "number") {
        const numValue = Number(value)
        if (isNaN(numValue)) {
          newErrors[input.name] = `${getTranslation(locale, input.label)} must be a valid number`
          return
        }
        // Optional: Add validation for positive numbers
        if (numValue <= 0) {
          newErrors[input.name] = `${getTranslation(locale, input.label)} must be greater than 0`
          return
        }
      }

      // For select inputs, check if a value was selected
      if (input.type === "select" && !value) {
        newErrors[input.name] = `Please select a ${getTranslation(locale, input.label)}`
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateInputs()) {
      onCalculate(inputs)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1>
            {getTranslation(locale, calculator.heading)}
          </h1>
        </CardTitle>
        <CardDescription>{getTranslation(locale, calculator.descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {(calculator.inputs ?? []).map((input) => (
            <div key={input.name} className="space-y-2">
              <Label htmlFor={input.name}>
                {getTranslation(locale, input.label)}
                <span className="text-red-500 ml-1">*</span>
              </Label>
              {input.type === "select" ? (
                <div>
                  <Select
                    value={String(inputs[input.name] || "")}
                    onValueChange={(value) => handleInputChange(input.name, value)}
                  >
                    <SelectTrigger 
                      id={input.name}
                      className={errors[input.name] ? "border-red-500" : "w-full"}
                    >
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
                  {errors[input.name] && (
                    <p className="text-sm text-red-500 mt-1">{errors[input.name]}</p>
                  )}
                </div>
              ) : (
                <div>
                  <Input
                    id={input.name}
                    type={input.type}
                    placeholder={getTranslation(locale, input.label)}
                    value={inputs[input.name] || ""}
                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                    className={errors[input.name] ? "border-red-500" : ""}
                    required
                  />
                  {errors[input.name] && (
                    <p className="text-sm text-red-500 mt-1">{errors[input.name]}</p>
                  )}
                </div>
              )}
            </div>
          ))}
          <Button 
            type="submit" 
            className="w-full"
            disabled={Object.keys(inputs).length === 0}
          >
            {getTranslation(locale, "calculatorform.btn")}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}