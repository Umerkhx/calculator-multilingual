export const healthFormulas = {
  "body-fat": (inputs: Record<string, number | string>) => {
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
  bmi: (inputs: Record<string, number | string>) => {
    const weight = Number(inputs.weight)
    const height = Number(inputs.height) / 100
    return (weight / (height * height)).toFixed(1)
  },
  calories: (inputs: Record<string, number | string>) => {
    const age = Number(inputs.age)
    const weight = Number(inputs.weight)
    const height = Number(inputs.height)
    const activity = Number(inputs.activity)
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5
    return Math.round(bmr * activity)
  },
  water: (inputs: Record<string, number | string>) => {
    const weight = Number(inputs.weight)
    const activity = Number(inputs.activity)
    return (weight * 0.033 + activity * 0.5).toFixed(1)
  },
  pace: (inputs: Record<string, number | string>) => {
    const distance = Number(inputs.distance)
    const time = Number(inputs.time)
    const paceMinutes = Math.floor(time / distance)
    const paceSeconds = Math.round((time / distance - paceMinutes) * 60)
    return `${paceMinutes}:${paceSeconds.toString().padStart(2, "0")}`
  },
  "heart-rate": (inputs: Record<string, number | string>) => {
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
  protein: (inputs: Record<string, number | string>) => {
    const weight = Number(inputs.weight)
    const goal = Number(inputs.goal)
    return (weight * goal).toFixed(1)
  },
  tdee: (inputs: Record<string, number | string>) => {
    const age = Number(inputs.age)
    const weight = Number(inputs.weight)
    const height = Number(inputs.height)
    const activity = Number(inputs.activity)
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5
    return Math.round(bmr * activity)
  },
  macros: (inputs: Record<string, number | string>) => {
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
  bfp: (inputs: Record<string, number | string>) => {
    const waist = Number(inputs.waist)
    const hip = Number(inputs.hip)
    const neck = Number(inputs.neck)
    return (163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(0) - 78.387).toFixed(1)
  },
}
